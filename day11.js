//1.
//ans:
// function sum(a,b){
//     return a+b
// }
// console.log(sum(12,3))


//2.
//ans:
// function name(){
//     return (`Hello,Ram!`)
// }
// console.log(name())


//3.
//ans:
// function check_number(x){
//     if(x%2==0)
//         return ("It is even")
//     else return("it is odd")
// }
// console.log(check_number(21))



//4.
//ans:
// function array(x){
//     return (x[0])
// }
// console.log(array("read"))


//5.
//ans:
// function smallest(a){
//     let min=a[0]
//     for(let i=0;i<=a.length-1;i++){
//         if(a[i]<min){
//             min=a[i]
//         }
//     }
//     console.log(min)
// }
// smallest([16,33,22,12,1])



//6.
//ans:
// function outer_function(){
//     function inner_function(s){
//         return (s*s)
//     }
//     console.log(inner_function(9))
// }
// outer_function()


//7.
//ans:
// function number(a){
//     function is_positive_negative(){
//         if(a>0){
//             console.log("it is a positive")
//         }
//         else if(a<0){
//             console.log("it is a negative")
//         }
//         else{
//             console.log("enter a valid number")
//         }

//     }
//     is_positive_negative()
// }
// number(-3)



//8.
//ans:
// function string(a){
//     let bag=""
//     function innerstring(){
//         for(let i=a.length-1;i>=0;i--){
//             bag=bag+a[i]
//         }
//         console.log(bag)
//     }
//     innerstring()
// }
// string("chowdaiah")

//9.
//ans:
// function numbers(a,b){
//     function sum(){
//         return a+b
//     }
//     console.log(sum())
// }
// numbers(4,5)


//10.
//ans:
// function multiply(a){
//     function is_multiply(){
//         return a*10
//     }
//     console.log(is_multiply())
// }
// multiply(2)



//11
//ans:
// let arr=[1,23,43,55,2,12,98]
// let bag=0;
// for(let i=0;i<=arr.length-1;i++){
//     bag=bag+arr[i]
// }
// console.log(bag)


//12.
//ans:
// let arr=["chowdaiah","ganesh","nithin","narendra","upendra"]
// for(let i=0;i<=arr.length-1;i++){
//     console.log(arr[i])
// }


//13.
//ans:
// function checkElement(arr, element) {
//   return arr.includes(element);
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(checkElement(arr, 3)); 
// console.log(checkElement(arr, 6))

//14.
//ans:
// function lastElement(a){
//     a.pop()
//     return a
// }
// let a=lastElement([1,2,3,4,5,6])
// console.log(a)


//15.
//ans:
// function array(a){
//     return a.length
// }
// let b=array([1,2,3,4,2,4,2,43,66])
// console.log(b)


//16.
//ans:
// function string(a){
//     let bag=0
//     for(let i=0;i<=a.length-1;i++){
//         if(a[i]=="a"|| a[i]=="e" || a[i]=="i" || a[i]=="o" || a[i]=="u"){
//              bag=bag+1
//         }
//     }
//     return bag

// }
// let a=string("chowdaiah")
// a=string("naga chowdaiaiah")
// console.log(a)


//17.
// function to_uppercase(a){
//     return a.toUpperCase();
// }
// console.log(to_uppercase("chowdiah"))


//18.
//ans:
// function is_palindrome(a){
//     let str=''
//     for(let i=a.length-1;i>=0;i--){
//         str=str+a[i]
//     }
//     if(str==a){
//         console.log("it is a palindrome")
//     }
//     else{
//         console.log("not a palindrome")
//     }
// }
// is_palindrome("abbaaba")

//19.
//ans:
// function to_join(a,b){
//     let new_str = a + " " + b;
//     return new_str
// }
// console.log(to_join("Naga","chowdaiah"))


//20.
//ans:
// function no_ofwords(a){
//     let count=0;
//     for(let i=0;i<=a.length-1;i++){
//         count=count+1
//     }
//     return count
// }
// let b=no_ofwords("jethendra")
// console.log(b)


//21.
//ans:
// let obj={
//     name:"maruthi suzuki",
//     model:2021,
//     color:"white",
//     year:2025
// }
// console.log(obj)



//22.
//ans:
// let books={
//     title:"Amaran",
//     author:"chowdaiah",
//     number_of_pages:90
// }
// let { title, author,  number_of_pages } = books;


// console.log("Title:", title);
// console.log("Author:", author);
// console.log("Number of Pages:", number_of_pages);



//23.
//ans:
// let movie={
//     name:"chalo",
//     directior:"jethendra",
//     release_date:2026
// }
// movie.release_date=2027
// console.log(movie)


//24.
//ans:
// let phone={
//     brand:"redmi",
//     model:"redmi 8a",
//     price:12000
// }
// phone.color="blue";
// console.log(phone)


//25.
//ans:
// let city={
//     name:"Hyderabad",
//     population:10,
//     country:"india"
// }
// console.log(`${city.name} is a city in ${city.country} with a ${city.population} of 
// million.`)