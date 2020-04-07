// *****************variables************************
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

// ************addeventlisteners*******************

eventListenners();

function eventListenners(){
    // InICIO DE LA APP Y DESHABILITAR SUBMIT
    document.addEventListener('DOMContentLoaded', inicioApp);

    // campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    // boton de enviar en el submit
    formularioEnviar.addEventListener('submit',enviarEmail);

    // btn de reset
    resetBtn.addEventListener('click',resetFormulario);
}


// **********************funciones****************

function inicioApp(){
    // Deshabilitar el envio
    btnEnviar.disabled = true;
}
    // validar que el campo tenga algo escrito

function validarCampo(){
    
    // se valida la longitud del texto y que no este vacio
    validarLongitud(this);

    // validar unicamente el email
    if(this.type == "email"){
        validarEmail(this);
    }



    let errores = document.querySelectorAll('.error') ;
    if(email.value != "" && asunto.value != "" && mensaje.value != ""){
        if(errores.length === 0){
            btnEnviar.disabled = false; 
        }
        
    }

}

// resetear elk formulario

function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault();
}




    // cuando se envia el correo

function enviarEmail(e){
//   Spinner gif al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    // gif que envia el email
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = "block";


    // ocultar spinner y mostrr gif enviado

    setTimeout(function(){
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild( enviado );
        setTimeout(function(){
            enviado.remove();
             formularioEnviar.reset(); 



        },3000)
    },3000);


    e.preventDefault();

}



// verifica longitud del texto en los campos
function validarLongitud(campo){
    
    if(campo.value.length > 0){
        campo.style.borderBottomColor = "green";
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = "red";
        campo.classList.add('error');
    }

}    

function validarEmail(campo){
    const mensaje = campo.value;
    // indexOf si no la encuentra da -1
    if(mensaje.indexOf('@') != -1 ){
        campo.style.borderBottomColor = "green";
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = "red";
        campo.classList.add('error');
    }
}