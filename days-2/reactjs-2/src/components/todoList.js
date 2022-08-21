import React, { Component } from "react";
import TodoItem from "./todoItem";

export default class TodoList extends Component {
   render() {
      const {data, handleEdit, handleDelete}=this.props;
      return (
         <ul className="list-group my-2">
            {data.map((item)=>{
            return (
               <TodoItem 
                  items={item} 
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
               />
            )
      })}
      </ul>
   );
   }
}