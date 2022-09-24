import React, { Component } from 'react'

class ListItem extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onClick(e) {
        e.target.style = 'text-decoration-line: line-through';
    }
    onDelete(e) {
        
    }
    render() {
        return (
            <li className='list-group-item' onClick={this.onClick} onDelete={this.onDelete}>{this.props.item.name}</li>
        )
    }
}

export default ListItem