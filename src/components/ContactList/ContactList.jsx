import Contact from "../Contact/Contact";
import { nanoid } from 'nanoid'

function ContactList({ contactData, deleteContact }) {
    return (
        <>
            <ul>
                {contactData.map((contact => {
                    const id = contact.id ? contact.id : nanoid();

                    return <li key={id}>
                        <Contact data={contact} onDelete={deleteContact} />
                    </li>
                }))}
            </ul>
        </>
    )
}

export default ContactList;
