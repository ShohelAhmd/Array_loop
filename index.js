var num = [10,20,30,40,50];
var sum=0;
for(var i=0;i<5;i++ ){
    document.write(num[i]+" ");
    sum=sum+num[i];
}
document.write("total sum of all number : "+sum);


var number=new Array();

for(var i=0; i<5; i++){
    number[i]=parseInt(prompt("enter a number : "));
}