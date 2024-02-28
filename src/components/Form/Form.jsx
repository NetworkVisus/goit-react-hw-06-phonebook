import * as Styled from './Form.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from '../../redux/slices/ContactsSlice/contactsSlice';
import { contactsSelector } from '../../redux/selectors';

export const Form = () => {
  const contactsState = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    let nameTmp = '';
    const nameArr = event.currentTarget.elements.name.value.split(' ');
    nameArr.forEach(element => {
      nameTmp += ' ' + element[0].toUpperCase() + element.slice(1);
    });
    let numberTmp = event.currentTarget.elements.number.value;
    numberTmp = numberPretty(numberTmp);
    const newContact = {
      id: nanoid(),
      name: nameTmp.trim(),
      number: numberTmp,
    };
    dispatch(addContactAction(newContact));
    event.currentTarget.reset();
  };

  function numberPretty(string) {
    let stringTmp = string.split('-').join('');
    stringTmp =
      stringTmp.slice(0, 3) +
      '-' +
      stringTmp.slice(3, 5) +
      '-' +
      stringTmp.slice(5, 7);
    return stringTmp;
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.InputDiv>
        <Styled.Label htmlFor="name">Name and Surname:</Styled.Label>
        <Styled.Input
          type="text"
          name="name"
          label="Name and Surname"
          pattern="[A-Za-z ]{2,50}"
          placeholder="Enter name and surname"
          required
        />
      </Styled.InputDiv>
      <Styled.InputDiv>
        <Styled.Label htmlFor="number">Phone number:</Styled.Label>
        <Styled.Input
          type="tel"
          name="number"
          placeholder="Phone Number(7 digits)"
          pattern="\d{3}-?\d{2}-?\d{2}"
          required
        />
      </Styled.InputDiv>
      <Styled.SubmitBtn type="submit">Add contact</Styled.SubmitBtn>
    </Styled.Form>
  );
};
