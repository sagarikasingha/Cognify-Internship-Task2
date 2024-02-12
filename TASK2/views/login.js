document.querySelector('button').onclick = function () {
    // alert("Working"); //message boz or alert box
    var pass = document.querySelector('#password').value;
    var reg_pass=/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@#\-]).{4,8}$/

    if(!reg_pass.test(pass)){
        document.getElementById('para').innerHTML='Invalid Password';
        document.getElementById('para').className = 'alert alert-danger text-center';
    }
}