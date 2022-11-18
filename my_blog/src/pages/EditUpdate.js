import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUpdate = () => {
  // STATE
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [image, setImage] = useState("");

  // ID-OLISH-UCHUN
  const { id } = useParams();

  // HOME-PAGE LOCAL
  const navigate = useNavigate();

  // UPDATE-POST FUNC
  const fetchDate = async () => {
    const { data } = await axios.get(`/api/travel/${id}`);
    setTitle(data.travel.title);
    setDescr(data.travel.descr);
    setImage(data.travel.image);
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    await axios.put(`/api/travel/${id}`, {
      title,
      descr,
      image,
    });
    navigate("/");
  };

  useEffect(() => {
    fetchDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <form onSubmit={updateHandler} className="mt-3">
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
          value={title}
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
          value={descr}
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
          value={image}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        YANGILASH
      </button>
    </form>
  );
};

export default EditUpdate;
