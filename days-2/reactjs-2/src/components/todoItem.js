import React, { Component } from "react";

export default class TodoItem extends Component {
   render() {
      const {items, handleEdit, handleDelete}=this.props;
      return (
         <li key={items.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span className="todo-title mr-2">{items.nama}</span>
            <span>
               <button
                  className="btn btn-secondary mr-2"
                  onClick={() => handleEdit(items)}
               >
                  Edit
               </button>
               <button className="btn btn-danger" onClick={() => handleDelete(items)}>
                  Delete
               </button>
            </span>
         </li>
      );
   }
}