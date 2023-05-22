import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const Task = () => {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [update, setUpdate] = useState("");
  const navigate = useNavigate();

  const handleAdd = () => {
    setTask([...task, todo]);
    setTodo("");
  };

  const handleDel = (idx) => {
    setTask((preTask) => preTask.filter((_, index) => index !== idx));
  };
  const handleUpdate = () => {
    if (update.trim() !== "") {
      setTask((prevTasks) => {
        const updatedTask = [...prevTasks];
        updatedTask[editTask] = update;
        return updatedTask;
      });
      setEditTask(null);
      setUpdate("");
    }
  };
  function handleEdit(idx) {
    setEditTask(idx);
    setUpdate(todo[idx]);
  }
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            m: 1,
            width: "25ch",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            marginLeft: "20rem"
          }
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Add task "
          variant="outlined"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add task
        </Button>
      </Box>

      <ul>
        {task.map((ele, idx) => {
          return (
            <div>
              <li key={idx}>
                {editTask === idx ? (
                  <div>
                    <input
                      type="text"
                      value={update}
                      onChange={(e) => setUpdate(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Update</button>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "2rem"
                    }}
                  >
                    <span style={{ color: "blue" }}> {ele}</span>
                    <button onClick={() => handleEdit(idx)}>Edit</button>
                    <button onClick={() => handleDel(idx)}>❌</button>
                  </div>
                )}
              </li>
            </div>
          );
        })}
      </ul>
    </>
  );
};
export default Task;
