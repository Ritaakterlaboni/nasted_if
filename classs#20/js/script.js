let a =10;
a =20;
console.log(a);


//let a same name a variable nawya jabe ans scope ar ta scope a output dite hobe
//let a=10
if (true){
    let a=9
   console.log(a);
}
console.log(a);          //scope ar modde jodi code likhi tobe scope ar modde e print likte hobe


//marks sheet nasted if start
//logical operator start

let marks=110

if( marks<0 || marks>100){
   // document.write("Cannot Show Any Result")        //    ||  ata holo or oparetor
}


else if(marks >=33 && marks <=49){
    document.write("u got C")
}
else if(marks >=50 && marks <=59){
    document.write("u got B")
}
else if(marks >=60 && marks <=69){
    document.write("u got A-")
}
else if(marks >=70 && marks <=79){
    document.write("u got A")
}
else if(marks >=80 && marks <=100){
    document.write("u got A+")
}

else{
    document.write("failed")
}



//nasted if start
//input start

let emailaddres = "rita@gmail.com"
let number= 12345698732         //0 ke akta letter dhora hoi r bangladesh ar number a 0 samne dawya lage na 
let password ="abc123"

//start logic

if(emailaddres == "rita@gmail.com"){        //jehetu amader dekha lagbe na j email milse ki na tai  amra output delet kore number milse kina tai arekta if likbo
    if(number== 12345698732){       //jehetu amader ai outpput o dorkar nai tai aita te o arekta if likbo
        if( password =="abc123"){       // aitar o output dawya lagbo na jodi ader thake aktar o input vhul dawya hoi tobe sudu seita show korbo
            document.write("Wellcome To Feacebook")        // jehetu last aita tai sob mille ja amra shoe korate chai tai likbo
        }
        else{
            document.write("invalid password")
        }
    }
    else{
        document.write("invalid number")
        
    }
}
else{
    document.write("invalid email addres")
}



