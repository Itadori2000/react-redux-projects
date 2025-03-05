import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function SimpleCRUD() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);


  const handleAdd = () => {
    if (editIndex !== null) {
      const updatedItems = items.map((item, i) =>
        i === editIndex ? newItem : item
      );
      setItems(updatedItems);
      setEditIndex(null);
      setNewItem("");
    } else if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setNewItem(items[index]);
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(to left, #051937, #092e66, #1e4397, #3d58cb, #646cff)",
        borderRadius: 10,
        padding: "2rem",
      }}
    >
      <h2>CRUD (Create, Read, Update, Delete)</h2>
      <input
        type="text"
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button onClick={handleAdd}>
        {editIndex !== null ? "Update" : "Add"}
      </button>
      <br />

      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <p style={{fontSize: "1.3rem"}}>{item}</p>
            <div>
              <button onClick={() => startEdit(index)}>Edit</button>
              <button
                onClick={() => deleteItem(index)}
                disabled={editIndex !== null}
              >
                Delete
              </button>
            </div>
          </div>
          <hr />
        </React.Fragment>
      ))}
      <FontAwesomeIcon icon={faToggleOn} />
    </div>
  );
}

export default SimpleCRUD;
