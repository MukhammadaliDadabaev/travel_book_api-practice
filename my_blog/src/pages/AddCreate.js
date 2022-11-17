import React from "react";
import { Link } from "react-router-dom";

const AddCreate = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" name="title" id="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="descr" className="form-label">
          Description
        </label>
        <input type="text" className="form-control" name="descr" id="descr" />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image URL
        </label>
        <input type="text" className="form-control" name="image" id="image" />
      </div>
      <Link to="/" className="btn btn-primary ml-2">
        SAQLASH
      </Link>
      <Link to="/" className="btn btn-primary text-right">
        BOSH SAHIFA
      </Link>
    </form>
  );
};

export default AddCreate;
