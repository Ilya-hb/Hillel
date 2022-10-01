import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

    render() {
        return (
            <div className='list-container'>
                <ol className='list-group list-group-numbered'>
                    {
                        this.props.list.map((item) => {
                            return <ListItem key={item.id} item={item} removeItem={this.props.removeItem}/>
                        })
                    }
                </ol>
            </div>
        )

    }
}

export default List;