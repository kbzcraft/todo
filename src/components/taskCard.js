import "./../styles/taskCard.css";
import { deleteIcon, editIcon, markAsCompleteIcon } from "./js/icons";
const taskCard = (props) => {
  return `
    <div class='taskCard'>
        <div class='taskContent'>
            <div class='content'>
                <h2 class='taskTitle'>${props.title}</h2>
                <p class='taskDetail'>${props.detail}</p>
            </div>
            <p class='startDate'>${props.date}</p>
        </div>
        <div class='icons'>
            <button data-index = ${props.index} class='icons markAsComplete'>
                <i >${markAsCompleteIcon}</i>
            </button>
            <button data-index = ${props.index} class='icons edit'>
                <i>${editIcon}</i>
            </button>
            <button data-index = ${props.index} class='icons delete'>
                <i>${deleteIcon}</i>
            </button>
        </div>
    </div>
    `;
};

export default taskCard;
