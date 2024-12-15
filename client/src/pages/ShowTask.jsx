import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowTask = () => {
  const [task, setTask] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/tasks/${id}`)
      .then((response) => {
        setTask(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"></h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="felx felx-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{task._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{task.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Description</span>
            <span>{task.description}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(task.createdAt).toString()}</span>
          </div>
          {/* <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(task.updatedAt).toString()}</span>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default ShowTask;
