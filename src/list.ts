import { v4 as uuidV4 } from "uuid"
import { saveTasks,type Task,loadTasks,timeDateFormat} from "./util";


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
            createdAt: timeDateFormat.format(new Date())
        }
        tasks.push(newTask)
        saveTasks(tasks)
        addListItem(newTask)
        input.value = ""
    })

    removeAll?.addEventListener('click',e =>{
        e.preventDefault()

        if(list?.innerHTML==''|| list?.innerHTML == null) return

        tasks = []
        saveTasks(tasks)
        list.innerHTML= "";
    })

    function addListItem(task: Task):void {

        //item
        const itemId:string = task.id;
        const item = document.createElement("li")
        item.classList.add("list-group-item","d-flex","justify-content-between");

        //label
        const label = document.createElement("label")
        label.classList.add("form-check-label","fs-2","text-capitalize")
        label.htmlFor="checkBox"
        
        // task start time
        const start = document.createElement("span")
        start.classList.add("me-2","fs-6","flex-nowrap")
        const startTime = task.createdAt
        start.innerHTML = "Start: "+ startTime;

        // task finish time 
        const finish = document.createElement("span")
        finish.classList.add("fs-5","flex-nowrap","d-block")

        
        //checkbox/toggle
        const checkbox = document.createElement("input")
        checkbox.classList.add("form-check-input","me-3","p-3")
        checkbox.id="checkBox"
        checkbox.type = "checkbox"

        //remove single task btn
        const removeBtn = document.createElement("button")
        removeBtn.classList.add("btn", "btn-outline-danger","text-center","font-weight-bold","px-2");

        
        //update/edit input
        const update = document.createElement("input")
        update.classList.add("form-control","d-none","d-inline-block")
        update.value=task.title

        //edit btn
        let isFirstImage = true;
        const edit = document.createElement("button")
        edit.classList.add("btn","btn-light","text-center","px-2","me-3")
        const editImg = document.createElement("img")
        editImg.src = "edit.svg"
        editImg.alt = "edit"
        edit.append(editImg)

        //div
        const div = document.createElement("div")
        div.classList.add("me-3")
        //div2
        const div2 = document.createElement("div")
        div2.classList.add("me-3")
        //div3
        const div3 = document.createElement("div")
        // div3.classList.add("me-3","d-flex","justify-content-between")
        
        
        //eventListners
        checkbox.addEventListener("change", () => {
          task.completed = checkbox.checked
          checkbox.checked ? label.classList.add("text-decoration-line-through") : label.classList.remove("text-decoration-line-through")
          task.finishedAt = timeDateFormat.format(new Date())
          checkbox.checked ?  finish.innerHTML = "Finish: "+ task.finishedAt : finish.innerHTML = ""
            saveTasks(tasks)
        })

        
        removeBtn.addEventListener("click",()=>{
            const newArray:Task[] = tasks.filter((item)=>{if(item.id!=itemId){return item}})
            tasks =[];
            tasks = newArray;
            saveTasks(tasks);

            if(list?.innerHTML==''|| list?.innerHTML == null) return
            list.innerHTML= "";
            tasks.forEach(addListItem)
        })

        edit.addEventListener("click",()=>{
            label.classList.toggle("d-none")
            checkbox.classList.toggle("d-none")
            update.classList.toggle("d-none")
            if (isFirstImage) {
                editImg.src = "save.svg";
                isFirstImage=false;
            } 
            else {
                editImg.src = "edit.svg";
                isFirstImage=true;
            }
            task.title=update.value
            saveTasks(tasks)
            label.innerText=update.value
        })
        
        //append
        checkbox.checked = task.completed
        checkbox.checked ? label.classList.add("text-decoration-line-through") : label.classList.remove("text-decoration-line-through")
        checkbox.checked ?  finish.innerHTML = "Finish: "+ task.finishedAt  : finish.innerHTML = ""
        removeBtn.append("X")
        div3.append(start,finish)
        label.append( `${task.title}`)
        div.append(checkbox, label,update,div3)
        div2.append(edit,removeBtn)
        item.append(div,div2)
        list?.append(item)
    }

}



