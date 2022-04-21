login=window.localStorage;
let welcome=()=> {
    let user=document.getElementById('InputUser').value
    let password=document.getElementById('InputPassword').value
    fetch('../json/login.json')
    .then(welcome=(res)=> {
        return res.json()
    })

    .then(welcome=(data)=> {
        if (user=="" || password==""){
            alert("Debe ingresar los datos")
        }else{
            for(i=0;i<data.length;i++){
                if(data[i].user==user && data[i].password==password){
                    alert("Bienvenido Señor(a) "+data[i].user)
                    login.setItem('InputUser',data[i].nombre+" "+data[i].apellido)
                    window.location='../index.html'
                    break;
                }
            }
            if(data[i].user!=user && data[i].password!=password){
                alert("Usuario o contraseña incorrecta")
            }
        }
    })    
}