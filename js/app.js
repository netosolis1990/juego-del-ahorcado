$(document).ready(function() {
    var respuesta = new Array();
    var errores = 1;

    //Creamos los botones con las letras dinamicamente usando codigo ASCII
    for (var i = 65; i < 91; i++) {
        $('#letras').append('<button class="btn  btn-default" id="letra'+String.fromCharCode(i)+'">'+String.fromCharCode(i)+'</button>');
    };

    //Declaramos nuestras frases que hay que descubrir
    secretas = {
        0:"No pienses en las consecuencias y vive el momento",
        1:"Vuela alto pero procura amarrar bien tus alas",
        2:"La verdadera vida tiene lugar en nuestro interior",
        3:"Una palabra suave puede golpear con fuerza",
        4:"No hay rosa sin espinas",
        5:"El optimismo perpetuo multiplica las fuerzas",
        6:"No tengas miedo a la verdad",
        7:"Quien tiene la voluntad tiene la fuerza",
        8:"Si vives en mi corazon",
        9:"El que conoce el arte de vivir consigo mismo ignora el aburrimiento",
        10:"La mayoria nunca tiene razon",
        11:"La originalidad es la vuelta a los origenes",
        12:"Quiero llorar porque me da la gana",
        13:"Las ideas no se matan",
        14:"Donde hay satisfaccion no hay revoluciones",
        15:"Nadie compra una vaca teniendo la leche gratis"
    };

    //Convertimos todo a mayusculas
    for (var i = 0; i < 16; i++) {
      secretas[i] = secretas[i].toUpperCase();
    };

  //Generamos un numero al azar para elegir una frase
  var azar = Math.floor((Math.random() * 15) + 1);
  for (var i = 0; i < secretas[azar].length; i++) {
    if(secretas[azar].charAt(i) != ' ')respuesta[i] = '_ ';
    else respuesta[i] = '\n'
        $('#secreto').append(respuesta[i]);
  };

//Cada vez que cliquen una letra entra qui
$('.btn-default').click(function(event) {
    //Sacamos la tecla que se pulso
    var id= this.id.charAt(5);
    var ban = false;
    $('#secreto').empty();
    //Comparamos si la letra que se eligio esta en la frase y se va agregado
    for (var i = 0; i < secretas[azar].length; i++) {
        if(secretas[azar].charAt(i) == id){
            respuesta[i] = id;
            ban = true;
        }
        $('#secreto').append(respuesta[i]);
    };

    //Si la letra no esta en la frase...aumentamos los errores y cambiamos la imagen
    //Si llegas a 5 errores el juego termina
    if(!ban){
        errores++;
        $('#imagen').attr('src', 'img/a'+errores+'.jpg');
        if(errores == 5){
            alert('Buuuu Perdiste la frase era: '+secretas[azar]);
            location.href="index.html";
        }
    }
    //Si la letra si esta en la frase entonces checamos si completaste la frase 
    else{
        var ban2 = true;
        for (var i = 0; i < respuesta.length; i++) {
            if(respuesta[i] == '_ '){
                ban2 = false;
                break;
            }
        };
        if(ban2){
            alert('WoW Ganaste :)');
            location.href="index.html";

        }
    }
    //Desactivamos la letra que ya se pulso
    $(this).removeClass('btn-default');
    $(this).attr('disabled','disabled');
});
});

