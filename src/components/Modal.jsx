import {createPortal} from "react-dom"

export default function Modal({setShowModal, modalData, modalClick}){
	const modalRoot= document.getElementById('modal-root');

	if(!modalRoot) return null;
	return createPortal(
		<div className="new_overlay">
		<div className="modal">
		<h2>{modalData}</h2>
				
		<button onClick={()=> setShowModal(false)}>Cancel</button>
		<button className="delete" onClick={modalClick}>Ok</button>
		</div>
		</div>
,
		modalRoot
	)

}