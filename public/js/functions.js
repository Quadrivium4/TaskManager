const getAllTask = async() =>{
    try {
        let response = await fetch(`api/v1/tasks`,{
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        /*.then(response => response.json())
        .then(data1 => {
            //console.log(data);
            data = data1;
        });*/
        let data = await response.json();
        return data;
        //console.log(data);
    } catch (error) {
        return "error";
    }
}
async function getBlogAndPhoto() { 
    try { 
        let utente = await fetch("/utente"); 
        return { utente}; 
    } 
    catch (e) { 
        console.log("Si è verificato un errore!"); 
    } 
}
const postTask = (obj) =>{
    fetch("api/v1/tasks",{
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    });
    location.href = location.origin;
    document.getElementById("submit-btn").style.backgroundColor = "red";
    //location.reload();
}
const deleteTask = (id) =>{
    fetch(`api/v1/tasks/${id}`,{
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    });
    location.reload();
}
const patchTask = (obj, id) =>{
    fetch(`api/v1/tasks/${id}`,{
        method: "PATCH",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    });
}
const getTask = async (id) =>{
    let data = await fetch(`api/v1/tasks/${id}`,{
        method: "GET",
        headers: {
            "content-type": "application/json"
        }
    });
    return data;
}