import * as Styled from './Contacts.styled';
import { useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { removeContactAction } from '../../redux/slices/ContactsSlice/contactsSlice';

export const Contacts = () => {
  const filterState = useSelector(filterSelector);
  const contactsState = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const filteredContacts = contactsState.length
    ? contactsState.filter(contact =>
        contact.name.toLowerCase().includes(filterState.toLowerCase())
      )
    : [];

  const handleDelete = event => {
    const deleteContactId = event.currentTarget.id;
    dispatch(removeContactAction(deleteContactId));
  };

  return (
    <Styled.List>
      {filteredContacts.map(el => {
        return (
          <Styled.Item key={el.id}>
            <Styled.Text>
              {el.name}: {el.number}
            </Styled.Text>
            <Styled.DeleteBtn onClick={handleDelete} id={el.id}>
              Delete
            </Styled.DeleteBtn>
          </Styled.Item>
        );
      })}
    </Styled.List>
  );
};
