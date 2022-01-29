const list = {
    "create a new practice task": "In Progress",
    // "make a bed": "Done",
    "write a post": "To Do",
    "have a walk": "In Progress",
   }

function changeStatus(task, condition){

    if(task in list){
        list[task] = condition;
    }
}


function addTask(createTask){

    list[createTask] = "To Do";
}

function deleteTask(deleteTask){

    delete list[deleteTask];
}

function showList(){

    let toDo = 'To Do: \n';
    let inProgress = 'In Progress: \n';
    let done = 'Done: \n';

    for(let key in list){
        if(list[key] === 'To Do'){
            toDo += '  ' + key + ',' + '\n';
        }else if(list[key] === 'In Progress'){
            inProgress += '  ' + key + ',' + '\n';
        }else if(list[key] === 'Done'){
            done += '  ' + key + ',' + '\n';
        }
    }
        if(toDo == 'To Do: \n'){
            toDo = 'To Do: \n' + '  ' + '-' + '\n';
        }else if(inProgress == 'In Progress: \n'){
            inProgress = 'In Progress: \n' + '  ' + '-' + '\n';
        }else if(done == 'Done: \n'){
            done = 'Done: \n' + '  ' + '-' + '\n';
        }   
    
    
    console.log(toDo + inProgress + done);
}

addTask("do some exercises");
addTask("Take a shower");
addTask("Do the cleaning");
changeStatus("do some exercises", "Done");
changeStatus("Take a shower", "In Progress");


showList();