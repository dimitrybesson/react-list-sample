import React from 'react';

const ListItem = (props) => {

    const deleteItem = () => {
        props.onDelete(props.item.id)
    }

    return (
        <div>
            <span>{props.item.title}</span>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default ListItem;