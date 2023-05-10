console.log("hola mundo");

function sumarUno(numero, callback) {}

function sumarUnoPromesa(numero) {
  var promesa = new Promise(function (resolve, reject) {
    if (numero >= 7) {
      callback("numero muy grande");
      return;
    }

    setTimeout(function () {
      callback(null, numero + 1);
    }, 2000);
  });
  return promesa;
}
