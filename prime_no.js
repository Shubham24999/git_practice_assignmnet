let count=0;
let num=34;

for(let i = 2 ; i<=num/2 ;i++){
   if(num%i==0){
       count++;
   }
}
if(count==2){
   console.log("prime");
}else{
   console.log("not prime");
}
