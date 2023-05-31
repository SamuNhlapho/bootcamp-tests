function findItemsOver (list, threshold){
    //findItemsOver = (list,threshold)=>{
      let answer = [];
      for (let i=0;i<list.length;i++){
        if(list[i].qty>threshold){
          answer.push(list[i]);
        }
      }return(answer)
    }