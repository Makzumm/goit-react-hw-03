function ContactListItem({ data, onDelete }) {
    const handleDelete = () => {
        onDelete(data.id);
    }

    return (
        <div>
            <p>{data.name}</p>
            <p>{data.number}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default ContactListItem;