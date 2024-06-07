import "./../styles/taskStatus.css";

const taskStatus = (props) => {
  return `
    <div class='taskStatus ${props.type}'>
        <h1>${props.type} Task</h1>
        <strong>${props.data}</strong>
    </div>
    `;
};

export default taskStatus;
