import "./app.css";
import { useEffect, useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
import Popup from "./components/Popup";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState("");
  const [deadline, setDeadline] = useState("");

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [editingDt, setEditingDt] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [modalData, setModalData] = useState("");
  const [modalClick, setModalClick] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  if (showPopup) {
    setTimeout(() => {
      setShowPopup(false);
      setData("");
    }, 2000);
  }

  const startEditing = (task) => {
    setShowModal(false);
    setEditingId(task.id);
    setEditingText(task.title);
    setEditingDt(task.deadline);
    setModalClick(null);
  };

  const saveEdit = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, title: editingText, deadline: editingDt }
        : task,
    );
    setTasks(updatedTasks);
    setEditingId(null);
    setEditingText("");
    setEditingDt("");
    setModalClick(null);
    setData("Task updated successfully ✅");
    setShowPopup(true);
  };

  const addTask = () => {
    if (text.trim() === "") {
      setData("⚠️ Please enter task!");
      setShowPopup(true);
      return;
    }

    const newTask = {
      id: Date.now(),
      title: text,
      completed: false,
      deadline: deadline,
    };

    setTasks((prev) => [...prev, newTask]);
    setText("");
    setDeadline("");

    setData("Task Created ✅");
    setShowPopup(true);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setShowModal(false);
    setSelectedId(null);
    setModalClick(null);
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );

    setTasks(updatedTasks);
  };

  return (
    <>
      {showPopup && <Popup data={data} />}

      {showModal && (
        <Modal
          setShowModal={setShowModal}
          selectedId={selectedId}
          modalData={modalData}
          modalClick={modalClick}
        />
      )}
      <h1 className="header">To-Do List</h1>
      <div className="todo_area">
        <TaskInput
          text={text}
          setText={setText}
          deadline={deadline}
          setDeadline={setDeadline}
          addTask={addTask}
          setShowModal={setShowModal}
          editingId={editingId}
        />
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          editingId={editingId}
          editingText={editingText}
          setEditingText={setEditingText}
          editingDt={editingDt}
          setEditingDt={setEditingDt}
          saveEdit={saveEdit}
          startEditing={startEditing}
          deleteTask={deleteTask}
          setShowModal={setShowModal}
          setSelectedId={setSelectedId}
          setModalData={setModalData}
          setModalClick={setModalClick}
        />
      </div>
    </>
  );
}

export default App;
