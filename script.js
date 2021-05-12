function validate() {
    const form = document.getElementById('form');
    const email = document.getElementById('email').value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const button = document.getElementById('button')

    if (email.match(pattern)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
    } else {
        form.classList.add('invalid')
        form.classList.remove('valid')
    }
    if (email == "") {
        form.classList.remove('invalid')
        form.classList.remove('valid')
    }
    if (email.match(pattern)){
        button.style.visibility = "visible";
    }else{
        button.style.visibility = "hidden";
    }
}

function change(){
    const form = document.getElementById('form');
    const btnarea = document.getElementById('btnarea');
    const button = document.getElementById('button');

    form.style.visibility = "hidden";
    btnarea.style.visibility = "visible";
    btnarea.style.zIndex = "10";
    button.style.visibility = "hidden";

    const sidewalk = document.getElementById('sidewalk')
    const grass = document.getElementById('grass');

    sidewalk.style.visibility = "visible";
    grass.style.visibility = "visible";

    document.body.style.backgroundImage = "url(img/bckgimg.png)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    
}

function stepGrass(){
    const sidewalk = document.getElementById('sidewalk')
    const grass = document.getElementById('grass');

    sidewalk.style.visibility = "hidden";
    grass.style.visibility = "hidden"

    const alert = document.getElementById('alert');

    alert.style.visibility = "visible";

    const btnarea = document.getElementById("btnarea");

    btnarea.style.visibility = "hidden";
}

