//Compartir
const shareBtn = document.getElementById('shareBtn')
shareBtn.addEventListener('click', event => {
    if (navigator.share) {
        //drive
        navigator.share({
            text: 'Tarjeta App Web: ',
            url: 'https://bit.ly/3G9ANPA'
        }).then(() => {
            console.log('Gracias por compartir!');
        })
            .catch((err) => console.error(err));
    } else {

        alert("The current browser does not support the share function. Please, manually share the link")
    }
});



const evento = document.getElementById('send')
const enviarFormulario = () => {

    let numero = document.getElementById('numero').value;
    let Drive = document.getElementById('drive').value;
    let mensaje = document.getElementById('mensaje').value;


    var win = window.open(`https://wa.me/54${numero}?text=Hola soy rafa y esta es mi%20Tarjeta%20Web:%20%0Ahttps://bit.ly/3G9ANPA%0A${Drive}%0A
${mensaje}%0A No te olvides ajendarme ;)`, '_blank');
}
evento.addEventListener('click', enviarFormulario)
// copi
function copy(copyId) {
    let inputElement = document.createElement("input");
    inputElement.type = "text";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);

    document.getElementById("alert").style.display = "block";
    setTimeout(function () {
        document.getElementById("alert").style.display = "none";
    }, 3000);
}


//Modal 
function modal_01() {
    Swal.fire({
        title: 'Scan me',
        text: 'https://bit.ly/3G9ANPA',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1668188188/grafica/qr-code_6_miwxnd.png',
        imageWidth: 300,
        imageHeight: 300,
    })
}
function modal_02() {
    Swal.fire({
        html: 'NO disponible el Qr de pago',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666386781/grafica/qr-code_x9dwaz.png',
        imageWidth: 400,
        imageHeight: 400,

    })
}
function modal_03() {
    Swal.fire({
        title: 'Qr copi cbu',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666384630/grafica/qr-code_1_irp8yo.png',
        imageWidth: 400,
        imageHeight: 400,

    })
}
function modal_04() {
    Swal.fire({
        title: 'Qr copi Alias',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666384808/grafica/alias_xivdgu.png',
        imageWidth: 400,
        imageHeight: 400,

    })
}
function modal_05() {
    Swal.fire({
        html: '<p class="versiculo">Tú, Señor, eres mi escudo y mi fuerza; en ti confía mi corazón, pues recibo tu ayuda. Por eso mi corazón se alegra y te alaba con sus cánticos. Tú, Señor, infundes fuerzas a tu pueblo; tu ungido halla en ti un refugio salvador (Sal 28:7-8).</p>',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666368017/grafica/135311609_386233642969639_1085019464901337411_n_v26zs1.png',
        imageWidth: 400,
        imageHeight: 400,

    })
}

function modal_06() {
    Swal.fire({
        html: '<p>Envía el comprobante por whatsapp</p>',
        imageUrl: 'https://res.cloudinary.com/dcjkcl8po/image/upload/v1666381494/grafica/qr-code_ihghcg.png',
        imageWidth: 400,
        imageHeight: 400,

    })
}
