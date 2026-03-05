import TaskItem from "./TaskItem"


export default function TaskList({
	tasks,
	toggleComplete,
	editingId,
	editingText,
	setEditingText,
	editingDt,
	setEditingDt,
	saveEdit,
	startEditing,
	deleteTask,
	showModal,
	setShowModal,
	setSelectedId,
	setModalData,
  	setModalClick,

}){
	return (
		<div className="task_area">
 
   <ul>
        {tasks.map((task)=>(
          <TaskItem
          task= {task}
	toggleComplete={toggleComplete}
	editingId= {editingId}
	editingText= {editingText}
	setEditingText= {setEditingText}
	editingDt={editingDt}
	setEditingDt={setEditingDt}
	saveEdit= {saveEdit}
	startEditing={startEditing}
	deleteTask= {deleteTask}
	showModal= {showModal}
	setShowModal={setShowModal}
	setSelectedId={setSelectedId}
	setModalData={setModalData}
  	setModalClick={setModalClick}


          />
          
        ))}
      </ul>
</div>
	)
}