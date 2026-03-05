import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import formatDateTime from "../utils/formatDateTime";



export default function TaskItem({
	task,
	toggleComplete,
	editingId,
	editingText,
	setEditingText,
	editingDt,
	setEditingDt,
	saveEdit,
	startEditing,
  setShowModal,
  setSelectedId,
  setModalData,
  setModalClick,
  deleteTask,
}){
	return (
		<li key={task.id}>
  <label className="custom_checkbox">
  <input
    type="checkbox"
    checked={task.completed}
    onChange={() => toggleComplete(task.id)}
  />
  <span className="checkmark"></span>
</label>

          {editingId=== task.id ? (
            <>
            <div className="edit_area">
            <input
            autoFocus
            value={editingText}
            onChange={(e)=> setEditingText(e.target.value)} />

            <input type="datetime-local" value={editingDt}
            onChange={(e)=> setEditingDt(e.target.value)} />
            </div>

            <button className='save_btn' onClick={()=>saveEdit(task.id)}>Save</button> 
            </>
          ):(
            <>
            <span className="title">{task.title}</span>
            <span className="time">{formatDateTime(task.deadline)}</span>
             <span className={task.completed? 'completed':'not'}>{task.completed? "Completed": "Not completed"}</span>
            <div className='btns'>
            <button className='edit_btn' onClick={()=>{
              setModalData("Do you want edit?")
              setSelectedId(task)
              setShowModal(true)
              setModalClick(()=> ()=> startEditing(task))
            }}><FontAwesomeIcon icon={faPenToSquare} /></button>
            {/* <button className='delete_btn' onClick={()=> deleteTask(task.id)}><FontAwesomeIcon icon={faTrashCan} className='delete_icon' /></button> */}
            <button className='delete_btn' onClick={()=> {
              setSelectedId(task.id)
              setModalData("Are you sure to delete?")
              setShowModal(true)
              setModalClick(()=> ()=> deleteTask(task.id))
            }}><FontAwesomeIcon icon={faTrashCan} className='delete_icon' /></button>
             </div>
            
            </>
          )
          }
          
          </li>
	)
}