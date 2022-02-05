const list = [ 
    { name: 'create a post', status: 'In progress', priority: 'high'  }, 
    { name: 'test', status: 'To Do', priority: 'high'  }, 
    { name: 'write a post', status: 'To Do', priority: 'high'  },
    { name: 'have a walk', status: 'To Do', priority: 'high'  },
] 


const STATUS = {
    TO_DO: 'To Do',
    IN_PROGRESS: 'In progress',
    DONE : 'Done',
}

const PRIORITY = {
    HIGH: 'high',
    LOW: 'low',
}


function changeStatus(task, condition){

    let indexTask = list.findIndex(item => item.name == task);
    list[indexTask].status = condition;
}


function addTask(createTask){

    list.push({name: createTask, status: STATUS.TO_DO, priority: 'high'});
}

function deleteTask(deleteTask){

    let indexTask = list.findIndex(item => item.name == deleteTask);
    list.splice(indexTask, 1);
}



function showBy(str){

    let toDo = 'To Do: \n';
    let inProgress = 'In Progress: \n';
    let done = 'Done: \n';

    let high = 'High: \n';
    let low = 'Low: \n';

    for(let i = 0; i < list.length;i++){
    
        if(str === 'status'){

            if(list[i].status === STATUS.TO_DO){
                toDo += '  ' + list[i].name + ',' + '\n';
            }else if(list[i].status === STATUS.IN_PROGRESS){
                inProgress += '  ' + list[i].name + ',' + '\n';
            }else if(list[i].status === STATUS.DONE){
                done += '  ' + list[i].name + ',' + '\n';
            } 
        }else if(str === 'priority'){
            if(list[i].priority === PRIORITY.HIGH){
                high += '  ' + list[i].name + ',' + '\n';
            }else if(list[i].priority === PRIORITY.LOW){
                low += '  ' + list[i].name + ',' + '\n';
            }
        }    
    }

    if(toDo === 'To Do: \n'){
        toDo += '  ' + '-' + '\n';
    }else if(inProgress === 'In Progress: \n'){
        inProgress += '  ' + '-' + '\n';
    }else if(done === 'Done: \n'){
        done += '  ' + '-' + '\n';
    } 

    if(high === 'High: \n'){
        high += '  ' + '-' + '\n';
    }else if(low === 'Low: \n'){
        low += '  ' + '-' + '\n';
    }
    
    
    if(str === 'status'){
        console.log(toDo + inProgress + done);
    }else if(str === 'priority'){
        console.log(high + low);
    }
}

showBy('priority');
