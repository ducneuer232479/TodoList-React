function ListItem(props) {
  function handleClick(event) {
    const clicked = event.target;
    clicked.classList.toggle("checked");
  }
  function handleClose() {
    props.deleteTask(props.id);
  }
  function handleUpdate(event) {
    event.preventDefault();
    props.dataNeededUpdate("updateBtn", "Update", props.task, props.id);
  }
  return (
    <li id={props.id} onClick={handleClick}>
      {props.task}{" "}
      <span className="close" onClick={handleClose}>
        ×
      </span>
      <button className="update" onClick={handleUpdate}>
        Update
      </button>
    </li>
  );
}

export default ListItem;
