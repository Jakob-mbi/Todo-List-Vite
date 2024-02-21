import { v4 as uuidV4 } from "uuid"


type Task = {
    id: string
    title: string
    completed: boolean
    createdAt: Date
}



export default function Items(){

    const list = document.querySelector<HTMLUListElement>('#list');
    const form = document.querySelector<HTMLFormElement>('#new-task-form');
    const input = document.querySelector<HTMLInputElement>('#new-task-title');
    const removeAll = document.querySelector<HTMLButtonElement>('#remove-all-tasks');
    let tasks: Task[] = loadTasks()
    tasks.forEach(addListItem)

    form?.addEventListener('submit', e => {
        e.preventDefault()

        if(input?.value==''|| input?.value == null) return

        const newTask: Task = {
            id: uuidV4(),
            title: input.value,
            completed: false,
            createdAt: new Date()
        }
        tasks.push(newTask)
        saveTasks()
        addListItem(newTask)
        input.value = ""
    })

    removeAll?.addEventListener('click',e =>{
        e.preventDefault()

        if(list?.innerHTML==''|| list?.innerHTML == null) return

        tasks = []
        saveTasks()
        list.innerHTML= "";
    })

    function addListItem(task: Task):void {

        const item = document.createElement("li")
        item.classList.add("list-group-item","d-flex","justify-content-between");

        const label = document.createElement("label")
        label.classList.add("form-check-label","fs-4","text-capitalize")
        label.htmlFor="checkBox"

        const checkbox = document.createElement("input")
        checkbox.classList.add("form-check-input","me-3","p-3")
        checkbox.id="checkBox"
        checkbox.type = "checkbox"

        const removeBtn = document.createElement("button")
        removeBtn.classList.add("btn", "btn-outline-danger","text-center","font-weight-bold","px-2");

        const div = document.createElement("div")
        div.classList.add("me-3")
        
        
        
        checkbox.addEventListener("change", () => {
          task.completed = checkbox.checked
          checkbox.checked ? label.classList.add("text-decoration-line-through") : label.classList.remove("text-decoration-line-through")
            saveTasks()
        })

        const itemId:string = task.id;
        removeBtn.addEventListener("click",()=>{
            const newArray:Task[] = tasks.filter((item)=>{if(item.id!=itemId){return item}})
            tasks =[];
            tasks = newArray;
            saveTasks();

            if(list?.innerHTML==''|| list?.innerHTML == null) return
            list.innerHTML= "";
            tasks.forEach(addListItem)
        })
        
        checkbox.checked = task.completed
        checkbox.checked ? label.classList.add("text-decoration-line-through") : label.classList.remove("text-decoration-line-through")
        removeBtn.append("X")
        label.append( `${task.title}`)
        div.append(checkbox, label)
        item.append(div,removeBtn)
        list?.append(item)
    }

    function saveTasks():void {
        localStorage.setItem('Tasks',JSON.stringify(tasks))
    }
    function loadTasks():Task[]{
        const taskJSON = localStorage.getItem('Tasks')
        if(taskJSON == null) return []
        return JSON.parse(taskJSON)
    }

}



