function sumarUnoPromesa(numero) {
  console.log(numero);
  var promesa = new Promise(function (resolve, reject) {
    if (numero >= 7) {
      reject("numero muy grande");
      return;
    }

    setTimeout(function () {
      resolve(numero + 1);
    }, 1000);
  });
  return promesa;
}

sumarUnoPromesa(5)
  .then((nuevoValor) => {
   
    return sumarUnoPromesa(nuevoValor);
  })
  .then((nuevoValor) => sumarUnoPromesa(nuevoValor))
  .then(sumarUnoPromesa)
  .catch((err) => {
    console.log(err);
  });

// sumarUnoPromesa(5).then(function (nuevoValor) {
//   console.log(nuevoValor);
//   sumarUnoPromesa(nuevoValor).then(function (nuevoValor) {
//     console.log(nuevoValor);
//     sumarUnoPromesa(nuevoValor).then(function (nuevoValor) {
//       console.log(nuevoValor);
//     });
//   });
// });
