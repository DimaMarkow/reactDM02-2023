import { Component } from 'react';
import Section from 'components/Section/Section';
import ContactsForm from 'components/ContactsForm/ContactsForm';

import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class Contacts extends Component {
  state = {
    ...INITIAL_STATE,
  };

  createContact = data => {
    console.log(data);

    const newContact = {
      ...data,
      id: nanoid(),
    };

    const normalizedName = newContact.name.toLowerCase();

    const repeatedContact = this.state.contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );
    const alertString = newContact.name + ' is already in contacts.';
    if (repeatedContact) {
      alert(alertString);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onDelete = selectedId => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        contact => selectedId !== contact.id
      );
      return { contacts: [...newContacts] };
    });
  };

  onFilterChange = filterText => {
    console.log(filterText);
    this.setState({ filter: filterText });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <>
        <Section title="Phonebook">
          <ContactsForm createContact={this.createContact} />
        </Section>
        <Section title="Contacts">
          <>
            {' '}
            <Filter
              filterText={this.state.filter}
              onFilterChange={this.onFilterChange}
            />
            <ContactList contacts={visibleContacts} onDelete={this.onDelete} />
          </>
        </Section>
      </>
    );
  }
}

export default Contacts;
