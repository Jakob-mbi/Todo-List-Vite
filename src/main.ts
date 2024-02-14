import './style.css'
import Items from './list'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="border">
    <ul id="list"></ul>
    <form id="new-task-form">
      <input type="text" id="new-task-title">
      <button type="submit">Add</button>
    </form>
  </div>
`
Items();
