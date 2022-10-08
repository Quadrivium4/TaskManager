

let submitBtn = document.getElementById("submit-btn");
console.log(getAllTask())
getAllTask()/*.then((response) => response.json())*/.then(data=>{
    data.forEach(task => {
        let display = "none";
        let style = "";
        if(task.completed){
            display = "flex";
            style= "text-decoration: line-through"
        }
        let block = `
            <div class="task" id="${task._id}">
                <div type="checkbox" disabled>
                    <div class="check-arrow" style="display:  ${display}">
                        <span n="1"></span>
                        <span n="2"></span>
                    </div>
                </div>
                <h2 style="${style}">${task.name}</h2>
                <button class="delete-btn btn">X</button>
                <button class="modify-btn btn">></button>
            </div>
        `;
        document.getElementById("tasks").innerHTML += block;
    });
    let tasksDOM = document.getElementsByClassName("task");
    for(let i =0; i< tasksDOM.length; i++){
        let task = tasksDOM[i];
        let id = task.getAttribute("id")
        let tasksChildrens = task.children;
        for(let j =0; j< tasksChildrens.length; j++){
            let el = tasksChildrens[j];
            if(el.classList[0] == "delete-btn"){
                el.addEventListener("click",()=>{
                    deleteTask(id);
                })
                
            }else if(el.classList[0] == "modify-btn"){
                el.addEventListener("click",()=>{
                    location.href = "./task.html?id="+id;
                });

            }else{

            }
        }
    }
    /*let deleteBtns = document.getElementsByClassName("delete-btn");
    let modifyBtns = document.getElementsByClassName("modify-btn");
    let taskBoxes = document.getElementsByClassName("task");
    for(let i =0; i< deleteBtns.length; i++){
        let delBtn = deleteBtns[i];
        let modBtn = modifyBtns[i];
        let taskBox = taskBoxes[i];

        delBtn.addEventListener("click",()=>{
            deleteTask(delBtn.getAttribute("id"));
            console.log('hi');
        });
        modBtn.addEventListener("click",()=>{
            patchTask({name: "procoder4"}, modBtn.getAttribute("id"));
            console.log(modBtn.getAttribute("id"));
        });
        taskBox.addEventListener("click",()=>{
            getTask(taskBox.getAttribute("id"));
            console.log(taskBox.getAttribute("id"));
        });
    }*/
});
//document.getElementById("tasks").innerHTML = getAllTask();
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(location);
    
    let name = document.getElementById("name").value;
    postTask({"name": name, "completed":false});
});
