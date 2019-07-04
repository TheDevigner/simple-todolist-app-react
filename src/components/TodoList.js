import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, handleClear, handleDelete, handleEdit } = this.props;
    const itemlist = items.map(item => {
      return (
        <TodoItem
          key={item.id}
          title={item.item}
          id={item.id}
          handleDelete={handleDelete}
          handleEdit={() => handleEdit(item.id)}
        />
      );
    });

    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>
          {itemlist}
          <button
            type="button"
            className="btn btn-block btn-danger text-capitalize mt-5
          "
            onClick={handleClear}
          >
            clear list
          </button>
        </ul>
      </div>
    );
  }
}
