import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBox(props) {
  const [search, setsearch] = useState("");

  const handelOnChange = (event) => {
    setsearch(event.target.value);
  };

  const handelonSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handelonSubmit}
        className="form-inline d-flex justify-content-center md-form form-sm mt-2"
      >
        <input
          className="form-control form-control-sm mr-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
          style={{
            color: "inherit",
          }}
          onChange={handelOnChange}
        />

        <Link to={`/search/${search}`} className="text-white">
          <button className={`btn btn-${props.theme.btnColor} btn-sm px-3`}>
            <i className="fas fa-search" aria-hidden="true"></i>
          </button>
        </Link>
      </form>
    </div>
  );
}
