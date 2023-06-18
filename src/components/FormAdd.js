import { useState, useEffect } from "react";

function FormAdd(props) {
  const [valueInput, setValueInput] = useState("");
  const [currClassBtn, setCurrClassBtn] = useState(props.classButton);
  const [currContentBtn, setCurrContentBtn] = useState(props.contentButton);

  function handleChange(event) {
    setValueInput(event.target.value);
  }
  function handleButton(event) {
    const clicked = event.target;
    if (clicked.classList.contains("addBtn")) {
      props.addNewTask(valueInput);
      setValueInput("");
    }
    if (clicked.classList.contains("updateBtn")) {
      props.updateTask(valueInput);
      setValueInput("");
      setCurrClassBtn("addBtn");
      setCurrContentBtn("Add");
    }
  }

  useEffect(() => {
    setValueInput(props.currentTask);
    setCurrClassBtn(props.classButton);
    setCurrContentBtn(props.contentButton);
  }, [props.numberUpdate]);

  return (
    <div className="header" id="myDiv">
      <h2>My Todo List</h2>
      <input
        type="text"
        onChange={handleChange}
        value={valueInput}
        id="myInput"
        placeholder="Please enter task....."
      ></input>
      <span className={currClassBtn} onClick={handleButton}>
        {currContentBtn}
      </span>
    </div>
  );
}

export default FormAdd;
