function viewGridImg(datos) {
  let viewGrid = document.getElementById("imagContainer");
  datos.map((element) => {
    const image = document.createElement("img");
    image.src = element.url;
    viewGrid.appendChild(image);
  });
}
function imagenes() {
  fetch("./img.json")
    .then((res) => res.json())
    .then((datos) => {
      viewGridImg(datos);
    });
}

imagenes();
