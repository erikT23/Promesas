function cargarCards() {
  const rep = fetch("https://reqres.in/api/users?page=1");
  rep
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var mostrar = document.getElementById("carta");
      for (var i = 0; i < data.data.length; i++) {
        var create = `<div class="col-4">

        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Name <span id="nombre">${data.data[i].first_name}</span></h5>
            <p class="card-text">Apellido:<span> ${data.data[i].last_name}</span>
            </p>
            <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Detalles
</button>
          </div>
        </div>
      </div>

  `;
        mostrar.insertAdjacentHTML("beforeend", create);
      }
    })
    .catch((err) => console.log("error", err));
}

function cargarModal() {
  const rep = fetch("https://reqres.in/api/users?page=1");
  rep
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      var mostrar = document.getElementById("modal");
      for (var i = 0; i < data.data.length; i++) {
        var create = `<
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${data.data[i].avatar}" class="img-thumbnail" alt="...">
              <h5 class="card-title">Name <span id="nombre">${data.data[i].first_name}</span></h5>
              <p class="card-text">Apellido:<span> ${data.data[i].last_name}</span>
              </p>
              <p class="card-text">Email:<span> ${data.data[i].email}</span>
              </p>
            </div>
            <div class="modal-footer">
              <button <button onclick="cargarModal()" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
             
            </div>
          </div>
        </div>
      </div>
  
  
    `;
        mostrar.insertAdjacentHTML("beforeend", create);
      }
    })
    .catch((err) => console.log("error", err));
}
