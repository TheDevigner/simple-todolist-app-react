import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      item: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    console.log("newItem", newItem);
    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      editItem: false
    });
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleClear = () => {
    this.setState({ items: [] });
  };

  handleDelete = id => {
    const newItems = this.state.items.filter(item => {
      return item.id !== id;
    });

    this.setState({
      items: newItems
    });
  };

  handleEdit = id => {
    const updatedItems = this.state.items.filter(item => id !== item.id);
    const selectedItem = this.state.items.find(item => id === item.id);

    this.setState({
      items: updatedItems,
      id: id,
      item: selectedItem.item,
      editItem: true
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-4">
              <h3 className="text-capitalize text-center">Todo Input</h3>
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                handleClear={this.handleClear}
                handleEdit={this.handleEdit}
                handleDelete={this.handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
