import React, { Component } from 'react'

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };

        this.addItem = this.addItem.bind(this);
        this.createTask = this.createTask.bind(this);
    }
    addItem(e) {

        this.setState({
            value: e.target.value
        });
    }
    createTask() {
        this.props.onCreate(this.state.value)
    }
    render() {
        return (
            <>
                <div className="input-group mb-3 justify-content-center">
                    <input type="text"
                        className="form-control input text-center"
                        placeholder="Write your ToDo's"
                        onChange={this.addItem} />
                    <button className="btn inp-btn"
                        type="button" id="button-addon2"
                        onClick={this.createTask}>Add Task</button>
                </div>
            </>

        )
    }
}

export default Input