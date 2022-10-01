import React, { Component } from 'react'

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.markDone = this.markDone.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.state = {
            backgroundColor: '',
            textDecoration: ''
        }
    }

    markDone() {
        if (this.state.backgroundColor === '' && this.state.textDecoration === '') {
            this.setState({
                backgroundColor: 'rgb(102, 240, 102',
                textDecoration: 'line-through'
            });
        } else {
            this.setState({
                backgroundColor: '',
                textDecoration: ''
            });
        }
    }
    removeItem() {
        this.props.removeItem(this.props.id);
    }
    render() {
        return (
            <>
                <li className='list-group-item position-relative'
                    onClick={this.markDone}
                    style={{
                        backgroundColor: this.state.backgroundColor,
                        textDecoration: this.state.textDecoration
                    }}>
                    {this.props.item.name}
                    <button className='btn btn-danger position-absolute list-btn' onClick={this.removeItem}>Delete</button>
                </li>
            </>

        )
    }
}

export default ListItem;