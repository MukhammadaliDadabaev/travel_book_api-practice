import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const TravelBook = () => {
  // DATE-API
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("/api/travel").then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      <div className="card my-3">
        <img
          src="https://ucarecdn.com/b76b9f96-4b10-41a9-8ab2-7bc0122dcebe/"
          className="card-img-top"
          alt="Booking"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        <div className="mx-2">
          <Link to="/add" className="btn btn-primary">
            ADD
          </Link>
          <Link to="/update/:id" className="btn btn-primary m-2">
            UPDATE
          </Link>
          <Link to="/delete" className="btn btn-primary">
            DELETE
          </Link>
        </div>
      </div>
      <div className="card my-3">
        <img
          src="https://rezdy.com//wp-content/uploads/2014/02/1_11zon-3.jpg"
          className="card-img-top"
          alt="Booking"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        <div className="mx-2">
          <Link to="/add" className="btn btn-primary">
            ADD
          </Link>
          <Link to="/update/:id" className="btn btn-primary m-2">
            UPDATE
          </Link>
          <Link to="/delete" className="btn btn-primary">
            DELETE
          </Link>
        </div>
      </div>
      <div className="card my-3">
        <img
          src="https://www.barakah-webmaster.com/wp-content/uploads/2019/12/beispiel3.jpg"
          className="card-img-top"
          alt="Booking"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        <div className="mx-2">
          <Link to="/add" className="btn btn-primary">
            ADD
          </Link>
          <Link to="/update/:id" className="btn btn-primary m-2">
            UPDATE
          </Link>
          <Link to="/delete" className="btn btn-primary">
            DELETE
          </Link>
        </div>
      </div>
    </>
  );
};

export default TravelBook;
