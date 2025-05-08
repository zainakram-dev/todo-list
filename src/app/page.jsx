
"use client"
import { useState } from "react";

export default function TodoFunction() {
  let [todo1, todo2] = useState([
    { id: 0, task: "hello this is new for me" },
    { id: 1, task: "can it be good for future" },
    { id: 2, task: "this will be complete soon" }
  ]);
  let [todo3, todo4] = useState("");
  let [todo5, todo6] = useState(null);

  function myfunction() {
    if (todo3.trim() === "") return;

    if (todo5 !== null) {
      todo2(todo1.map((item) =>
        item.id === todo5 ? { ...item, task: todo3 } : item
      ));
    } else {
      todo2([...todo1, { id: todo1.length, task: todo3 }]);
    }

    todo4("");
    todo6(null);
  }

  function deletefunction(id) {
    todo2(todo1.filter((item) => item.id !== id));
  }

  function editfunction(item) {
    todo6(item.id);
    todo4(item.task);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}> Todo List</h1>

      <div style={styles.inputArea}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter task here..."
          value={todo3}
          onChange={(e) => todo4(e.target.value)}
        />
        <button style={styles.addBtn} onClick={myfunction}>
          {todo5 !== null ? "Update" : "Insert"}
        </button>
      </div>

      <div style={styles.listContainer}>
        {todo1.map((item) => (
          <div key={item.id} style={styles.todoItem}>
            <span style={styles.taskText}>{item.task}</span>
            <div>
              <button style={styles.editBtn} onClick={() => editfunction(item)}>Edit</button>
              <button style={styles.deleteBtn} onClick={() => deletefunction(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 💅 Inline styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "white",
    borderRadius:"20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily:"serif"
  },
  heading: {
    textAlign:"center",
    marginBottom:"20px",
    color: "black"
  },
  inputArea: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    marginRight: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    color:"black"
  },
  addBtn: {
    padding: "10px 20px",
    backgroundColor: "green",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },  
  todoItem: {
    backgroundColor: "white",
    padding: "12px",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
  },
  taskText: {
    fontSize: "16px",
    color: "black"
  },
  editBtn: {
    marginRight: "10px",
    backgroundColor: "Blue",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  deleteBtn: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
   cursor: "pointer"
  }
}; 


