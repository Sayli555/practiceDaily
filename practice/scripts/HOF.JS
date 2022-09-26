

function interview(Name){

    if(Name=="sayli"){
        return function (topic){
            console.log(`hi ${Name} , please explain ${topic}`)
        }   
    }
    if(Name=="savita"){
        return function (topic){
            console.log(`hi ${Name} , please explain ${topic}`)
        }   
    }
    if(Name=="snehal"){
        return function (topic){
            console.log(`hi ${Name} , please explain ${topic}`)
        }   
    }
    if(Name=="sheta"){
        return function (topic){
            console.log(`hi ${Name} , please explain ${topic}`)
        }   
    }
}

// 2 methods of calling

interview("sayli")("js")


//or
const cand1=interview("sayli");
cand1("js");
cand1("react")