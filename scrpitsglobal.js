
console.log('SI JALA')

var navmain=document.getElementById("botonmain")
if(navmain){
    console.log("x")
    if(localStorage.getItem("email") && localStorage.getItem("pass")){
        console.log('d')
        navmain.innerHTML='mis listas'
        navmain.href='lists_watching.html'
    }
}

