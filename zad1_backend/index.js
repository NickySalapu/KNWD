/*
    Iterate through given array and replace each element if:
    -element is even replace with "Even"
    -element is divisible by 7 replace with "DivBy7"
    -element is divisible by 7 and 5 replace with "DivBy7and5"
    -element is negative replace "Negative"
    Example:
    input: [3,4,7,14]
    output: [3,"Even","DivBy7","EvenDivBy7"]
 */

window.onload = ()=> {
    //given array
    let data = [-5,3,6,8,14,-7,2,1,35,3,5,-14,8,4,-1,-3];
    var temp;
    for(var i=0;i<data.length;i++){
      temp = data[i];
      data[i] = data[i].toString();
      data[i] = data[i].replace("-", "Negative");
      data[i] = data[i].replace(new RegExp(/\d*[02468]/g), "Even");
      if(temp % 7 === 0 || temp < 0 || temp % 2 === 0){
        data[i] =data[i].replace(new RegExp(/[13579]/g),"");
      }
      if(temp % 7 === 0 && temp % 5 === 0){
        data[i] += 'DivBy7and5';
      }else if(temp % 7 === 0){
        data[i] += 'DivBy7';
      }
      if (!data[i].match(/[a-z]/i)) {
    //powinno byc jeszcze sprawdzenie dla floata etc. ale skoro w przykładzie same Inty...
        data[i] = parseInt(data[i]);
      }
    }
    console.log(data);
};
