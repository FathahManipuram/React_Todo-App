import Modal from "./Modal";


export default function TaskInput({
  text,
  setText,
  deadline,
  setDeadline,
  addTask,
  editingId,
}) {
  return (
    <>
    {!editingId && 
      <div className="input_area">

          <input
            type="text"
            placeholder="Enter Task..."
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            title="Date and time"
          />
          <button className='btn_primary' onClick={addTask}>Add</button>
    </div>
    }
    </>
  );
}
