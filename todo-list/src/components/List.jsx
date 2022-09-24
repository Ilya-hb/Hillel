import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

    render() {
        return (
            <ol className='list-group list-group-numbered'>
                {
                    this.props.list.map((item) => {
                        return <ListItem key={item.id} item={item} />
                    })
                }
            </ol>
        )

    }
}

export default List;