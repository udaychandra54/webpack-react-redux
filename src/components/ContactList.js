import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

const ContactList = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    let id = e.target.id;
    console.log(id);
    dispatch({ type: "DELETE", payload: id });
  };
  return (
    <Fragment>
      {data.length === 0 && <h2 className="text-center">No data Found</h2>}
      {data.length !== 0 && (
        <div className="container mt-4 ">
          <table className="table w-50 mx-auto">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <div className="container">
                        <button
                          className="btn btn-danger"
                          id={item.id}
                          onClick={deleteHandler}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </Fragment>
  );
};

export default ContactList;
