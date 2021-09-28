const lenghtvalue = document.querySelector("#numberinput");
const password = document.querySelector("#password");
const createpassword = document.querySelector("#newpassword");
const showpassword = document.querySelector("#showpassword");
const copypassword = document.querySelector("#copypassword");
const checkbox1 = document.querySelector("#checkbox1");
const checkbox2 = document.querySelector("#checkbox2");
const checkbox3 = document.querySelector("#checkbox3");
const checkbox4 = document.querySelector("#checkbox4");
const numbers = [0,1,2,3,4,5,6,7,8,9];
const lowercase = ["a","b","c","d","e","f","g","h,i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercase = ["A","B","C","D","E","F","G","H,I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const symbols = ["@","!","#","+","-","_","*","/",".",";","%","&","=","`",":"]
createpassword.addEventListener("click",createtitle);
copypassword.addEventListener("click",copy);
function createtitle(){
    
    
    var i = 0;
    let value1 = ""
    const deger =Number(lenghtvalue.value)
    if(checkbox1.checked === false && checkbox2.checked === false && checkbox3.checked === false && checkbox4.checked === false && lenghtvalue.value <4 ||lenghtvalue.value === "" ){
        alert("Please select or check at least one box");
    }else{    let itemler = []
        if(lenghtvalue.value<4){
            lenghtvalue.setAttribute("style","background-color:red ; border:none");
            setTimeout(function(){
                lenghtvalue.setAttribute("style","background-color:none ; border:none");
                

            },1000)
            
        }else{

        
        
        if(checkbox1.checked===true){
            itemler.push(lowercase);
        }
        if(checkbox2.checked===true){
            itemler.push(uppercase);
        }
        if(checkbox3.checked===true){
            itemler.push(numbers);
        }
        if(checkbox4.checked===true){
            itemler.push(symbols);
        }
        value1=itemler.toString().replaceAll(",","").trim();
        let newarr= Array.from(value1)
        
        let ez = new String();
        
    
        for(i ; i<=deger-1;i++){
          ez += newarr[Math.floor(Math.random()*newarr.length)]
            
        }
        password.value=ez;
        let count = 0;
        showpassword.addEventListener("click",function(){
            if(count%2==0){
                password.setAttribute("type","text");
                showpassword.value="Hide"
                count++;
            }else{
                password.setAttribute("type","password");
                showpassword.value="Show"
                count++
        
            }
    
    
        })

    }

  
}}
function copy(){
  if(password.type==="text"){
      password.select();
  password.setSelectionRange(0, 99999); 

  
  document.execCommand("copy");

  alert("Copied the text");
  }else{
      password.setAttribute("type","text");
      password.select();
      password.setSelectionRange(0, 99999); 
    
      
      document.execCommand("copy");

      password.setAttribute("type","password");
      alert("Copied the text");

    
  }
    
  
}








