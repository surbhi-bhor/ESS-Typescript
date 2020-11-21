function *gens() {
    for (let i=1; ; i++) {
      let sum=0, temp=i;
      let numOfDigits = temp.toString().length;
      while(temp>0){
        let remainder = temp%10;
        sum += Math.pow(remainder, numOfDigits);
        temp = parseInt(temp/10);
      }
      
       if(i>1000){
        throw new Error('i value greater than 1000')
      }
      else if(sum == i){
        yield i;
      }
    }
  }
  
  try {
    for (let n of gens())
        console.log(n); // will throw after `5`
    //console.log('not throwing');
  } catch(e) {
    console.log('throwing', e);
  }

  let makeIterable =  gens();
  makeIterable.next();

  //const makeIterable = gens()

// for (let x of makeIterable) {
//     console.log(x);
// }

// for (let x of makeIterable) {
//     console.log(x);
// }
  
