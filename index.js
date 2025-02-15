var num = [10,20,30,40,50];
var sum=0;
for(var i=0;i<5;i++ ){
    document.write(num[i]+" ");
    sum=sum+num[i];
}
document.write("total sum of all number : "+sum +"<br/>");


var number=new Array();

for(var i=0; i<5; i++){
    number[i]=parseInt(prompt("enter a number : "));
    document.write(number[i] + " ");
}

var total=0;
for(var i=0; i<5; i++){
    total =total+number[i];

}

document.write("Total is : "+total);