//1
function countToFifty(){
  for (let i = 1; i < 51; i++){ 
  var count = console.log(i); 
  }
  return count;

}

//2
function countFromOne(x){
  for (let i = 1; i <= x; i++ )
  var l = console.log(i); 
  return l ;
}

//3
function threeAndFiveInFifty(){
  for (let i = 1; i <= 50; i++){
  if (i % 3 === 0 || i % 5 === 0 ){
  console.log(i);      
 };
}
    
}

//4
function threeAndFive(x){
  for (let i = 1; i <= x; i++){
      if (i % 3 === 0 || i % 5 === 0 ){
          console.log(i);
      }
  }
}


//
function triple(arr){
  var number = [];
  for (let i = 0; i < arr.length; i++ ){
  number.push(arr[i]*3)
  }
  return number;
}

console.log(triple([1, 2, 3]))