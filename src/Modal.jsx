import'./Modal.css';

const Modal = (props) => {
  return (
    <>
    <div onClick={props.onClick} className="backdrop"></div>\
    <div className="modal">
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <button onClick={props.onClick}>Okay</button>
    </div>
    </>
  );
};

export default Modal