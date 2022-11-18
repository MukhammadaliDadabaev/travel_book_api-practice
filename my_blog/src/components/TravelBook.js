import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TravelBook = () => {
  // STATE
  const [travelBook, setTravelBook] = useState([]);
  const [delById, setDelById] = useState("");

  // DATE-API
  const fetchData = async () => {
    const { data } = await axios.get("/api/travel");
    setTravelBook(data.travels);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // DELETE  BY_ID FUNC
  const deleteHandler = async (e) => {
    e.preventDefault();
    await axios.delete(`/api/travel/${delById}`);
    fetchData();
  };

  return (
    <>
      {travelBook.map((travbook) => (
        <div key={travbook._id} className="card my-3">
          <img
            src={travbook.image}
            className="card-img-top"
            alt={travbook.title}
          />
          <div className="card-body">
            <h5 className="card-title">{travbook.title}</h5>
            <p className="card-text">{travbook.descr}</p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
          <div className="mx-2">
            <Link to="/add" className="btn btn-primary">
              ADD
            </Link>
            <Link
              to={`/update/${travbook._id}`}
              className="btn btn-primary m-2"
            >
              UPDATE
            </Link>
            <form onSubmit={deleteHandler} className="d-inline">
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => setDelById(travbook._id)}
              >
                DELETE
              </button>
            </form>
          </div>
        </div>
      ))}
    </>
  );
};

export default TravelBook;
