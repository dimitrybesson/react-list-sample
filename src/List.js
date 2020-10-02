import React from 'react';
import ListItem from './ListItem';

const List = (props) => {

    const items = props.items.map(item => (
        <ListItem key={item.id} item={item} onDelete={props.onDelete}/>
    ))

    return (
        <>
            <h1>Hello World!</h1>
            <div>{items}</div>
        </>
    )
}

export default List;