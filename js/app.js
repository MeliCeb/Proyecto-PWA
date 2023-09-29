const container = document.querySelector(".container");
const coffees = [
  {
    name: "Americano",
    image: "https://majestycoffee.com/cdn/shop/articles/americano_misto.jpg?v=1684064972"
  },
  {
    name: "Cappuccino",
    image: "https://t4.ftcdn.net/jpg/01/94/82/87/360_F_194828703_vuNjz8Otb66VfI4rQyg9tBUPuGAugsUR.jpg"
  },
  {
    name: "Latte",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg"
  },
  {
    name: "Espresso",
    image: "https://i.dailymail.co.uk/1s/2020/01/22/12/23723766-0-image-a-18_1579697765141.jpg"
  },
  {
    name: "Macchiato",
    image: "https://126578650.cdn6.editmysite.com/uploads/1/2/6/5/126578650/s513258147308036544_p4_i1_w2048.jpeg"
  },
  {
    name: "Irish",
    image: "https://savoredsips.com/wp-content/uploads/2020/11/irish-coffee-w1-735x490.jpg"
  },
  {
    name: "Cortado",
    image: "https://blackturtlecoffee.com/cdn/shop/articles/10-Of-The-Most-AMAZING-Cortado-Recipes-On-The-Web.jpg?v=1672851054"
  },
  {
    name: "Turco",
    image: "https://cdn.foodandwineespanol.com/2022/08/cafe-turco-destacada-.jpg"
  },
  {
    name: "Flat White",
    image: "https://static.toiimg.com/thumb/86699095.cms?width=1200&height=736"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

//en manifest.json
//es solo un archivo JSON con algunas propiedades obligatorias y otras opcionales.

// name (nombre): Cuando el navegador inicie la pantalla de bienvenida, será el nombre que se muestre en la pantalla.

// short_name (nombre corto): Será el nombre que se muestre debajo del acceso directo de la aplicación en la pantalla de inicio.

// start_url (url de inicio): Será la página que se muestre al usuario una vez abierta tu aplicación.

// display: Le dice al navegador cómo mostrar la aplicación. Hay varios modos como minimal-ui, fullscreen, browser, etc. Aquí, utilizamos el modo standalone para ocultar todo lo relacionado con el navegador.

// background_color (color de fondo): Cuando el navegador inicie la pantalla de bienvenida, será el fondo pantalla.

// theme_color (color de tema): Será el color de fondo de la barra de estado cuando abramos la aplicación.

// orientation (orientación): Le dice al navegador la orientación que debe tener al mostrar la aplicación.

// icons (iconos): Cuando el navegador inicie la pantalla de bienvenida, será el icono que se muestre en la pantalla. Aquí utilicé todos los tamaños para tener compatibilidad con el icono preferido de cualquier dispositivo. Pero puedes usar uno o dos. Tú decides.