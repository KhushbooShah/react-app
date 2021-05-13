// Custom component name's first character should be uppercase.
// Reason behind that is, react internally recognize tags with case lettering.
// Every internal tag starts with lower case letter
// And, custom tag should start with upper case letter

import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

//(can be any name but standard practice is to use props)
//props --> js object containing key value pair of properties passed in the custom object
//i.e to accept dynamic content from where it is rendered.
function Todo(props) {
  //React hook. Always return the array with two elements.
  //You can set initial value of the state and it can be accessed using the first element of the array
  //Second element in array, is a function which allows us to change the value of the state
  //You cannot change the state value by reassinging the first element of the array
  const [modalIsOpen, setModelIsOpen] = useState(false);

  function deleteHandler() {
    setModelIsOpen(true);
  }

  function closeModalHandler() {
    setModelIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* Example of ternary operation in react : {modalIsOpen ? <Modal /> : null}*/}
      {/* Another alternative is as below : 
      In JS if you use && operator, if both conditions are true then second value will be returned*/}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onClickCustomFunction={closeModalHandler} />}
    </div>
  );
}

export default Todo;
