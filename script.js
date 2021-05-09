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
    document.body.style.background="green";
    const form = document.getElementById('form');
    const btnarea = document.getElementById('btnarea');
    const btnarea2 = document.getElementById('btnarea2');
    const button = document.getElementById('button');

    form.style.visibility = "hidden";
    btnarea.style.visibility = "visible";
    btnarea2.style.visibility = "visible";
    btnarea2.style.zIndex = "15";
    btnarea.style.zIndex = "10";
    button.style.zIndex = "5";
}

function stepGrass(){
    document.body.style.background="red";
}

function stepArea2(){
    document.body.style.background = "green";
}

