interface Printable{
    objName:string;
    fname?:string;
    lname?:string;
    age?:number;
  
    radius?:number;
  }
  const employee:Printable = {
    objName: "employee",
    fname : "Robin",
    lname : "Sharma",
    age : 25
  }
  
  const circle:Printable = {
    objName: "circle",
    radius : 8
  }
  
  let prints = (obj:object)=>{
    for(let [k,v] of Object.entries(obj)){
      console.log(`${k}:${v}`);
    }
  }
  
  let printAll = (...objs)=>{
    for(let i of objs){
      prints(i);
    }
  }
  printAll(employee,circle);