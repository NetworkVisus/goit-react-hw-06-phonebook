import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import * as Styled from './App.styled';

export const App = () => {
  return (
    <Styled.MainDiv>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Styled.MainDiv>
  );
};

export default App;
