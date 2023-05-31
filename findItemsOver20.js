function findItemsOver20 (list){
    let answer =[];
    for(let i=0; i<list.length;i++){
      if(list[i].qty>20){
        answer.push(list[i]);
      }
    }return(answer)
  }