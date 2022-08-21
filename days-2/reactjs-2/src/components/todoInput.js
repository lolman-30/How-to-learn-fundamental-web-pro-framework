import React, { Component } from "react";

export default class TodoInput extends Component {
   render() {
      const {activeItem, editItem, handleChange, handleSubmit}=this.props
      return (
         <div className="card card-body">
            <form action="">
            <div className="form-group">
               <label>Title</label>
               <input
                  type="text"
                  name="nama"
                  className="form-control text-capitalize"
                  placeholder="add todo item"
                  value={activeItem.nama}
                  onChange={handleChange}
               />
            </div>
            <div className="form-group form-check">
               <input
                  type="checkbox"
                  name="completed"
                  className="form-check-input"
                  value={activeItem.complated}
                  onChange={handleChange}
               />
               <label className="form-check-label">Completed</label>
            </div>
            <button
               type="submit"
               className={
                  editItem ? "btn btn-success mt-3" : "btn btn-primary mt-3"
               }
               onClick={() => handleSubmit(activeItem)}
            >
               {editItem ? "Edit" : "Add"}
            </button>
         </form>
      </div>
   );
  }
}