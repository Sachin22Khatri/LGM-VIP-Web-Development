import React, { useState } from "react";
import Loader from "react-loader-spinner";

function UseEffect() {
  const [users, setUser] = useState([]);
  const [load, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 900);

    const response = await fetch("https://reqres.in/api/users");
    const users = await response.json();
    setUser([]);
    setTimeout(() => {
      setUser(users.data);
    }, 1000);

    //console.log(data);
  };

  return (
    <>
      <div className="navbar">
        <figure className="navbar-brand">
          <img
            className="image is-48x48"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
            alt=""
          />
          <span className="react-name">React</span>
        </figure>
        <button className="btn button is-info is-rounded" onClick={fetchData}>
          Click Me
        </button>
      </div>

      {load ? (
        <div class="st-react-loader-st-icon">
          <div
            class="st-react-loader-tables"
            id="st-react-loader-tables-1"
          ></div>
          <div
            class="st-react-loader-tables"
            id="st-react-loader-tables-2"
          ></div>
          <div
            class="st-react-loader-tables"
            id="st-react-loader-tables-3"
          ></div>
          <div
            class="st-react-loader-tables"
            id="st-react-loader-tables-4"
          ></div>
          <div
            class="st-react-loader-tables"
            id="st-react-loader-tables-5"
          ></div>
          <div
            class="st-react-loader-tables"
            id="st-react-loader-tables-6"
          ></div>
          <div
            class="st-react-loader-tables"
            id="st-react-loader-tables-7"
          ></div>
        </div>
      ) : (
        " "
      )}
      <div className="container">
        {users?.map((curr, index) => {
          return (
            <div className="card">
              <div className="card-image">
                <figure className="image is-128x128">
                  <img className="is-rounded" src={curr.avatar} alt={curr.id} />
                </figure>
              </div>
              <div className="card-content" key={index}>
                <h2 className="title is-4">
                  {curr.first_name} {curr.last_name}
                </h2>
                <hr />
                <p className="title is-6">{curr.email}</p>
                <p className="subtitle is-6">ID: {curr.id}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default UseEffect;
