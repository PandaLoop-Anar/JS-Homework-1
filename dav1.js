//1. ცვლადი სახელწოდებით myVariable და მნიშვნელობით 5.
let myVariable = 5 ;
console.log(myVariable);
//2. ცვლადი სახელწოდებით testVariable და მნიშვნელობით myVariable ცვლადი.
let testVariable = myVariable;
console.log(testVariable);
//3. ორი ცვლადი x და y და მნიშვნელობებით 4 და 5. 
let x = 4;
let y = 5;
console.log(x,y);
//4. შემოიტანეთ ცვლადი სახელწოდებით sum და მიანიჭეთ მას x და y-ის ჯამი მნიშვნელობად. 
let sum = x + y;
console.log(sum);
//5. შემოიტანეთ ცვლადი სახელწოდებით product და მიანიჭეთ მას x და y-ის ნამრავლი მნიშვნელობად.
let product = x*y;
console.log(product);
//6. შემოიტანეთ ცვლადი სახელწოდებით quotient და მიანიჭეთ მას x და y-ის განაყოფი მნიშვნელობად. 
let quotient = x/y;
console.log(quotient);
//7. შემოიტანეთ ცვლადი სახელწოდებით difference და მიანიჭეთ მას x და y-ის სხვაობა მნიშვნელობად. 
let difference = x - y;
console.log(difference);
//8. გარდაქმენით მოცემულობა += გამოყენებით x = x + 12.
x = 12; //let x = 12; მეწერა, მაგრამ რადგან x უკვე განსაზღვრული მაქვს ამიტომ reassigning გავაკეთე.
x += 12;
console.log(x);
//9. შექმენით ახალი ცვლადი სახელწოდებით num და შეინახეთ მასში let str = “66”; მნიშვნელობა, გადაკონვერტირებული number ტიპად. 
let str = "66";
let num = Number(str);
console.log(num);
//10.	\n \t \\ გამოყენებით ქვევით მოცემული output-ის მისაღებად შემოიტანეთ ცვლადი სახელწოდებით myStr და მნიშვნელობაში გაუწერეთ შესაბამისი კოდი, არ გამოიყენოთ სფეისი. 
let myStr = "FirstLine \n \t \\\SecondLine \nThirdLine";
console.log(myStr);


//თამაში „ჯეირანი“
let user = prompt("კეთილი იყოს თქვენი მობრძანება თამაშ ჯეირანში. \n თამაშის დასაწყებად შეიყვანეთ ერთ-ერთი შემდეგ სიტყვათაგანი: \n   'ქვა', 'ბადე' ან 'მაკრატელი'.");
let randomNum = Math.floor(Math.random()*3);
switch(randomNum){
    case 0:
        randomNum = 'ქვა';
        break;
    case 1:
        randomNum = 'ბადე';
        break;
    case 2: 
        randomNum = 'მაკრატელი';
        break;
}
if(user === 'ქვა' && randomNum === 'მაკრატელი'){
    alert(`ჩემი პასუხია - ${randomNum}, ხოლო თქვენი პასუხია - ${user} \n \n გილოცავთ, თქვენ გაიმარჯვეთ!`);
}else if(user === 'ბადე' && randomNum === 'ქვა'){
    alert(`ჩემი პასუხია - ${randomNum}, ხოლო თქვენი პასუხია - ${user} \n \n გილოცავთ, თქვენ გაიმარჯვეთ!`);
}else if(user === 'მაკრატელი' && randomNum === 'ბადე'){
    alert(`ჩემი პასუხია - ${randomNum}, ხოლო თქვენი პასუხია - ${user} \n \n გილოცავთ, თქვენ გაიმარჯვეთ!`);
}else if((user === 'ქვა' && randomNum === 'ქვა') || (user === 'ბადე' && randomNum === 'ბადე') || (user === 'მაკრატელი' && randomNum === 'მაკრატელი')){
    alert(`ჩემი პასუხია - ${randomNum}, თქვენი პასუხიცაა - ${user} \n \n ფრე, თავიდან სცადეთ.`);
}else if((user === 'ქვა' && randomNum === 'ბადე') || (user === 'ბადე' && randomNum === 'მაკრატელი') || (user === 'მაკრატელი' && randomNum === 'ქვა')){
    alert(`ჩემი პასუხია - ${randomNum}, ხოლო თქვენი პასუხია - ${user} \n \n სამწუხაროდ, თქვენ დამარცხდით.`);
}else{
    alert(`გთხოვთ სწორად შეიყვანოთ სიტყვა!`);
}
