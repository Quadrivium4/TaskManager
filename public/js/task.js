const params = window.location.search;
const id = new URLSearchParams(params).get('id');
const taskDOM = document.getElementById("task");
const idDOM = document.getElementById("id");
const nameDOM = document.getElementById("name");
const checkboxDOM = document.getElementById("checkbox");
const saveDOM = document.getElementById("save");
getTask(id).then(response=>response.json()).then(data=>{
    let task = data[0];
    idDOM.innerHTML = task._id;
    nameDOM.value = task.name;
    if(task.completed){
        checkbox.checked = true;
    }
    console.log(task);
});
saveDOM.addEventListener("click",()=>{
    console.log(checkboxDOM.checked);
    const obj = {
        name: nameDOM.value,
        completed: checkboxDOM.checked,
    }
    console.log("save")
    patchTask(obj, id);
})