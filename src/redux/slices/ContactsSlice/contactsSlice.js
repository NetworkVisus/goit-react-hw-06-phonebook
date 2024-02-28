import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContactAction: {
      prepare(newContact) {
        return {
          payload: {
            ...newContact,
            id: nanoid(),
          },
        };
      },
      reducer(state, action) {
        const existingContact = state.contacts.find(
          contact =>
            contact.name.toLowerCase().trim() ===
            action.payload.name.toLowerCase().trim()
        );

        if (existingContact) {
          alert(
            'This user is already in the list, try to delete it and add a new one'
          );
          return state;
        }
        return { ...state, contacts: [...state.contacts, action.payload] };
      },
    },
    removeContactAction(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContactAction, removeContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
