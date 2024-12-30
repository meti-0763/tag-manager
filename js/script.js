tags = [];

let inp = document.querySelector("#inp")
let ul = document.querySelector("#ulparent")

inp.addEventListener("keypress",(e)=>{
    
    let jn = inp.value.split(",")
    if(e.key=="Enter"&& tags.length+jn.length<=10){
         
               tags =  tags.concat(jn)
           
    
       inp.value=""  
       document.querySelector("#Counter").innerText=10-tags.length
       elemG()
    }

})

function rm(el){

    console.log(el.innerText);

   tags = tags.filter(elm => elm!== el.innerText)

   console.log(tags);
   
    el.remove()
    

}


function elemG() {
    ul.innerHTML=""
    tags.forEach(elem => {

        let element = `<li onclick="rm(this)">${elem}<i class="uil uil-comments"></i></li>`
       
        ul.insertAdjacentHTML("afterbegin",element)
     
    });
    
}

document.querySelector("#rm_all").addEventListener("click",(e)=>{
    tags=[]
    elemG()
    document.querySelector("#Counter").innerText=10-tags.length

})












console.log();
























