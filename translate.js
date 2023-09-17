const click = document.getElementById("Click")

function find_edit(){
    x = document.getElementsByTagName('span')[0]
    x.innerHTML="Rapilbek"
    x=document.getElementsByTagName('span')[1]
    x.innerHTML="Alan"
    x=document.getElementsByTagName('span')[2]
    x.innerHTML="May 28, 2004"
}

click.addEventListener("click",find_edit)