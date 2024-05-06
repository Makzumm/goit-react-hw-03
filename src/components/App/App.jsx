import { useEffect, useState } from 'react'
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

function App() {

  const [data, setData] = useState(() => {

    const savedData = localStorage.getItem('savedData');

    if (savedData !== null) {
      return JSON.parse(savedData)
    }

    return [

      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

    ]

  })
  const [filter, setFilter] = useState("")

  const addContact = (values, actions) => {
    console.log(values)
    setData((prevTasks) => {
      return [...prevTasks, values]
    })
    actions.resetForm();
  }

  const deleteContact = (taskId) => {
    setData(prevTasks => {
      return prevTasks.filter((task) => task.id !== taskId)
    })
  }

  useEffect(() =>
    window.localStorage.setItem("savedData", JSON.stringify(data))
  )

  const visibileTasks = data.filter((personData) => personData.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={addContact} />
      <SearchBox value={filter} handleSearchBox={setFilter} />
      <ContactList contactData={visibileTasks} deleteContact={deleteContact} />
    </div>
  );
}
export default App
