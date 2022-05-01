const bar=document.querySelector("#bar");
const items=document.querySelector("#item");
bar.addEventListener("click",()=>{
    if(item.classList.contains('hide')){
        items.classList.remove("hide");
    }else{
        items.classList.add("hide");
    }
});
// ************send mail**************
// function sendEmail() {
//     Email.send({
//       Host: "smtp.gmail.com",
//       Username: "BinMadeSmart@gmail.com",
//       Password: "123456@a",
//       To: "aksoni0520@gmail.com",
//       From: "BinMadeSmart@gmail.com",
//       Subject: "Sending Email using javascript",
//       Body: "Well that was easy!!",
//     })
//       .then(function (message) {
//         alert("mail sent successfully")
//       });
//   }