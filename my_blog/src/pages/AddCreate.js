import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCreate = () => {
  // STATE
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  // HOME-PAGE LOCAL
  const navigate = useNavigate();

  // CREATE-POST FUNC
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/travel/add", {
      title,
      descr,
      image,
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          <b>Title</b>
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descr" className="form-label">
          <b>Description</b>
        </label>
        <input
          type="text"
          className="form-control"
          name="descr"
          id="descr"
          onChange={(e) => setDescr(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          <b>Image URL</b>
        </label>
        <input
          type="text"
          className="form-control"
          name="image"
          id="image"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        SAQLASH
      </button>
    </form>
  );
};

export default AddCreate;
