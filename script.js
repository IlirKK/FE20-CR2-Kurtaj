let tasks = [{ 

    taskName: "Take dog for a walk", 
    
    taskImage: "./images/dogwalk.jpeg", 
    
    description: "My dog missile needs to go for a walk, otherwise it'll end bad", 

    deadlineDates: "today",
    
    importance: 1,   
},
{
    taskName: "Doctors appointment", 
    
    taskImage: "./images/doc.jpeg", 

    description: "Have my weekly checkup at the doctors", 

    deadlineDates: "12.10.2023",

    importance: 3,   
},
{
    taskName: "Practice Coding", 
    
    taskImage: "./images/coding.jpg", 

    description: "Finish my current project that I'm doing to get better at coding", 

    deadlineDates: "14.10.2023",

    importance: 5,   
},
{
    taskName: "Charge Phone", 
    
    taskImage: "./images/chargephone.jpeg", 

    description: "Charge my phone for tomorrow", 

    deadlineDates: "today",

    importance: 2,   
},
{
    taskName: "Play Videogames", 
    
    taskImage: "./images/playvid.jpg", 

    description: "Play a planned session with my friends", 

    deadlineDates: "15.10.2023",

    importance: 0,   
},
{
    taskName: "Pick up Package", 
    
    taskImage: "./images/package.webp", 

    description: "Picking up a package from the post office", 

    deadlineDates: "11.10.2023",

    importance: 3,   
},
{
    taskName: "Mow Lawn", 
    
    taskImage: "./images/Mowing.jpeg", 

    description: "Mow the Lawn outside my house", 

    deadlineDates: "14.10.2023",

    importance: 4,   
},
{
    taskName: "Take out Trash", 
    
    taskImage: "./images/trash.jpg", 

    description: "Taking the trash outside", 

    deadlineDates: "10.10.2023",

    importance: 2,   
},
{
    taskName: "Creating music", 
    
    taskImage: "./images/music.webp", 

    description: "Mix and Master the music for an upcoming Album", 

    deadlineDates: "18.10.2023",

    importance: 4,   
}

]

function buttonColor(importance,taskNumber) {

    if (importance === 0 || importance === 1) {
        return `<button type="button" class="btn btn-success" onclick="increasePriority(${taskNumber})" >${importance}</button>`
    } else if (importance == 2 || importance === 3) {
        return `<button type="button" class="btn btn-warning" onclick="increasePriority(${taskNumber})">${importance}</button>`
    } else {
        return `<button type="button" class="btn btn-danger" onclick="increasePriority(${taskNumber})">${importance}</button>`
    }


}

function increasePriority(taskNumber) {
    tasks[taskNumber].importance
        if(tasks[taskNumber].importance <= 4) {
            tasks[taskNumber].importance++
        }
        else {
            return "This task already has maximum Priority!"
        }
    rerender()
}


function zeile3(importance,taskNumber) {
    return `    <div class="d-flex flex-row mb-3">
                <div class="p-2"> ❗ </div>
                <div class="p-2">Priority Level:</div>
                <div class="p-2">${buttonColor(importance,taskNumber)}</div>
                </div>`
    
}

function zeile4(deadlineDates) {
    return `<div class="d-flex flex-row mb-3">
            <div class="p-2">🗓️</div>
            <div class="p-2">Deadline:</div>
            <div class="p-2">${deadlineDates}</div>
            </div>`
}

function unten(taskImage) {
    return `<img src="${taskImage}" class="card-img-bottom" alt="dogwalk"></img>`
}


function title(taskName) {
    return `<h5> ${taskName}</h5>`

}


function describe(description) {
    return `<p class="card-text"> ${description}</p>`
}





function ganzenContainer(task,taskNumber) {
    return `
    <div class="col">
    <div class="card"><div class="card-body">${title(task.taskName)}
            ${describe(task.description)}
            ${zeile3(task.importance,taskNumber)}
            ${zeile4(task.deadlineDates)} </div>
            ${unten(task.taskImage)}</div>
            </div>`
 
}



function rerender() {
    document.getElementById("myID1").innerHTML = tasks.map(ganzenContainer).join("")
}

rerender()


