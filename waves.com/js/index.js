function start() {
    let  on2 = document.getElementById("on2");
    let treee = document.getElementById("treee");
    let lowert = document.getElementById("lowert")
    let losert = document.getElementById("losert");
    let comer = document.getElementById("comer")
    let lopi = document.getElementById("lopi")
    

    
    setTimeout(() => { 
        lopi.style.display="none"
    }, 3000);

    setTimeout(() => {
        on2.style.display="none"
        treee.style.display="block"
    }, 6000);


    losert.addEventListener('click',()=>{ 
        lowert.style.display="none"
    });

    
    comer.addEventListener('click',()=>{ 
        lowert.style.display="block"
    });
}
start()