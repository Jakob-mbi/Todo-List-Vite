type Task = {
    id: string
    title: string
    completed: boolean
    createdAt: string
    finishedAt?: string
}

function saveTasks(tasks:Task[]):void {
    localStorage.setItem('Tasks',JSON.stringify(tasks))
}
function loadTasks():Task[]{
    const taskJSON = localStorage.getItem('Tasks')
    if(taskJSON == null) return []
    return JSON.parse(taskJSON)
}

const timeDateFormat = new Intl.DateTimeFormat("sv",{
    timeStyle: "short",
    dateStyle: "short",
})


export {saveTasks,loadTasks,type Task,timeDateFormat}
