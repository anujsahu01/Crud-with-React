import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function All() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function getData() {
    try {
      const response = await fetch("http://localhost:4000");
      const result = await response.json();

      if (!response.ok) {
        console.error(result.error);
        setError(result.error || "Something went wrong");
      } else {
        setData(result);
        setError(""); // Reset error if data fetch is successful
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (_id) => {
    try {
      const response = await fetch(`http://localhost:4000/${_id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (!response.ok) {
        console.error(result.error);
        setError(result.error || "Failed to delete");
      } else {
        setError("Deleted successfully");

        setTimeout(() => {
          setError("");
          getData();
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setError("Error deleting data");
    }
  };

  return (
    <>
      <div className="container my-2">
        <h2 className="text-center">All Data</h2>
        {error && <p className="text-danger">{error}</p>}

        <div className="row ">
          {data.length > 0 ? (
            data.map((ele) => (
              <div key={ele._id} className="col-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{ele.name}</h5>
                    <p className="card-subtitle mb-2 text-muted">{ele.email}</p>
                    <p className="card-subtitle mb-2 text-muted">{ele.age}</p>

                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => handleDelete(ele._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/update/${ele._id}`)} 
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No Data Available</p>
          )}
        </div>
      </div>
    </>
  );
}
