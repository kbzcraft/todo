export default function addTask() {
  return `
    <section class="add-task">
      <div>
        <input type="text" id='titleInput' placeholder="Task title" />
        <input type="text" id='detailInput' placeholder="detail" />
      </div>
      <button id='addTaskBtn'>
        <span class="a"></span>
        <span class="b"></span>
      </button>
    </section>
    `;
}
