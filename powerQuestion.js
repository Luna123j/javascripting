
  let i = 5
  while(i>4){
    let result = (16**i);
    if(!result.toString().includes(1) && !result.toString().includes(2) && !result.toString().includes(4) && !result.toString().includes(8)){
      console.log(i) ;
      break;
    }
    i+=1;
  }

