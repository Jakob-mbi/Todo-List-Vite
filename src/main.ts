import './style.css'
import Items from './list'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="card">
    <div class="card-body ">
      <h5 class="card-title text-center fs-2 fw-bold">Todo App</h5>
      <ul id="list" class="list-group mb-5"></ul>
      <form id="new-task-form">
        <input type="text" id="new-task-title"  class="form-control mb-1 py-2">
        <button type="submit" class="btn btn-primary py-2 mt-2" id="add-task">Add</button>
        <button type="button" class="btn btn-danger ml-5 py-2 mt-2" id="remove-all-tasks">Remove All</button>
      </form>
    </div>
  </div>
`
Items();
