// ------  ARRAYS ---------

// Question 1
// var studentNames = [] ;
// studentNames[0]= "Syed";
// studentNames[1]= "Jazib";
// studentNames[2]= "Hussain";
// studentNames[3]= "Rizvi";

// Question 2
// const StudentNames = new Array();

// Question 3
// var stringsArray = ["jazib"];
// alert(stringsArray);

// Question 4 
// var numbersArray = [1];
// alert(numbersArray);

// Question 5

// Question 6
// var mixedArray = ["jazib"+""+"100"];
// alert(mixedArray);

// Question 7
// var Qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"] ;
// document.write("Qualifications:" + "<br/>" + "1)" + Qualification[0] + "<br/>" + "2)" + Qualification[1] + "<br/>" + "3)"  + Qualification[2]+ "<br/>" + "4)" + Qualification[3]+ "<br/>" + "5)" + Qualification[4]+ "<br/>" + "6)" + Qualification[5]+ "<br/>" + "7)" + Qualification[6]+ "<br/>" + "8)" + Qualification[7]) 

// Question 8
// var std = ["Syed", "Jazib", "Hussain"];
// var marks = [320, 230, 480];
// var totalMarks = 500;
// for (let i = 0; i < std.length; i++) {
//     document.write( "Score of " + std[i] + " " + "is " + marks[i] + ". Percentage:" + " " + marks[i] / totalMarks * 100 + "%" + "<br>" + "</h3>" + "</div>");
// }

// Question 9

// Question 10
// var arr1 = [320, 230, 480, 120];
// document.write("Scores Of Students" + " " + arr1 + "<br>");
// document.write("Ordered Scores Of Students" + " " + arr1.sort(function (a, b) { return a - b }));

// Question 11
// var cityList = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// copyList = cityList.slice(2, 4)
// document.write("Cities List:" + "<br/>" + cityList + "<br/>" + "<br/>" + "Selected Cities List:" + "<br/>" + copyList);

// Question 12
// var arr = ["This", "is", "my", "cat"];
// document.write("Array: <br>" + arr);
// document.write("<br>String<br>" + (arr.join(" ")));

// Question 13
// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("<h4>Devices</h4>" + devices);
// document.write("<br>Out<br>" + devices.shift());
// document.write("<br>Out<br>" + devices.shift());
// document.write("<br>Out<br>" + devices.shift());
// document.write("<br>Out<br>" + devices.shift());

// Question 14
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("<h4>Devices</h4>" + devices);
// document.write("<br>Out<br>" + devices.pop());
// document.write("<br>Out<br>" + devices.pop());
// document.write("<br>Out<br>" + devices.pop());
// document.write("<br>Out<br>" + devices.pop());
// document.write("<br>Out<br>" + devices);

// Question 15
// var manuFacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select> ")
// for (var i = 0; i < manuFacturer.length; i++) {
//     document.write("<option>" + manuFacturer[i] + "</option>")
// }
// document.write("</select>");


// ------  ARRAYS AND LOOP  ---------

// Question 1
// var mul_arr=[["jaz"],20,"b"]
// alert(mul_arr);

// Question 2
// var arr1=[[0 , 1 , 2 , 3],[1,0,1,2],[2,1,0,1]];
// document.write(arr1[0]+"<br>"+arr1[1]+"<br>"+arr1[2]);

// Question 3
// for(var i=1;i<=10;i++){
//     document.write(i +"<br>");
// }

// Question 4 ????
// var a=prompt("Enter a number to show its multiplication table");
// var b=prompt("Enter length multiplication table");
// var x=a;
// var y=b;
// for(var i=1;i<=b;i++){
//     document.write( "Multiplication table of" + " " + a + "<br>" + "Length" + " " + b + "<br>"+ a+"x"+i+"="+a*i+"<br>");
// }

// Question 5
// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for(var i=0;i<fruits.length;i++){
//   document.write(fruits[i]+"<br>"); 
// }
// for(var i=0;i<fruits.length;i++){
//    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }

// Question 6a
// document.write("Counting: <br><br>");
// for(var i=1;i<=15;i++){
//    document.write(i+",");
// }
// Question 6b
// document.write("<br><br>Reverse Counting: <br><br>");
//  for(var i=10;i>=1;i--){
//      document.write(i+",");
// }
// Question 6c
// document.write("<br><br>Even <br><br>");
// for(var i=0;i<=20;i+2){
//     document.write(i+",");
// }
// Question 6d
// document.write("<br><br>Odd <br><br>");
// for(var i=1;i<=20;i+2){
//     document.write(i+",");
// }
// Question 6e
// document.write("<br><br>Series <br><br>");
// for(var i=2;i<=20;i+2){
//      document.write(i+"k,"); 
//  }

// Question 7
// var array=["cake","apple pie","cookie","chips","patties"]
// var a=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for(var i=0;i<array.length;i++){
//     if(a===array[i]){
//         alert(a+ " " + "is available at index "+i+" in our bakery");
//     }
//     else{
//         alert("we are sorry" + " " +a+" is not available in our bakery");
//    }
// }

// Question 8
// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;
// document.write(array);

// for (i=0; i<=largest;i++){
//   if (array[i]>largest) {
//         var largest=array[i];
//     }
// }   
// document.write("<br>"+ "The largest number is" + " " +largest);

// Question 9
// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var smallest= 100;
// document.write(array);

// for (i=0; i<=smallest;i++){
//     if (array[i]<smallest) {
//         var smallest=array[i];
//     }
// }   
// document.write("<br>"+ "The smallest number is" + " " +smallest);

// Question 10
// for(var i=1;i<=100;i++){
//     if(i%5==0){
//         document.write(i+" ,")
//     }
// }