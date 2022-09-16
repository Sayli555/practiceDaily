 

//  let init={
//     count:0
//  }


 export const reducer=(state,action)=>{
    console.log(state,action);
    if(action.type==="add"){
        state.count++
    }
    return {...state};
 }