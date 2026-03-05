import { createPortal } from "react-dom";

export default function Popup({data}){
const modalRoot= document.getElementById('modal-root');
if(!modalRoot) return null;
	return createPortal(
		<div className="new_overlay">
		<div className="popup">
		<p>{data}</p>
		</div>
		</div>
,
		modalRoot
	)
}