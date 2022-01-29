function Calc(act, a, b){
    
    if(act == undefined || a == undefined || b == undefined){
        return alert('Error');
    }else if(typeof a != 'number'|| typeof b != 'number'){
        return alert('unknown operation');
    }else{
        if(act == 'sum'){
        return a + b;
        }else if(act == 'diff'){
            return a - b;
        }else if(act == 'multi'){
            return a * b;
        }else if(act == 'div'){
            return a / b
        }
    }
}   
   
        

console.log(Calc('sum',1, 2));

function Calc(act, a, b){
    
    if(act == undefined || a == undefined || b == undefined){
        return alert('Error');
    }else if(typeof a != 'number'|| typeof b != 'number'){
        return alert('unknown operation');
    }else{
        switch(act){

            case 'sum':
                return a + b;
            case 'diff':
                return a - b;
            case 'multi':
                return a * b;
            case 'div':
                return a / b;
        }
    }
    
}

console.log(Calc('div',-1, 2));