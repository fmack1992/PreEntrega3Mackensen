const items = [];

class Productos {
  constructor(id, nombre, categoria, imagen, precio) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.imagen = imagen;
    this.precio = precio;
  }
}


/* [
  
  {
      "id": "abrigo-01",
      "titulo": "Abrigo 01",
      "imagen": "./img/abrigos/01.jpg",
      "categoria": {
          "nombre": "Abrigos",
          "id": "abrigos"
      },
      "precio": 1000
  },
]
 */







//Instancias de Class Producto
items.push(
  new Productos(
    "Remera01",
    "AC DC - We Salute You",
    "Remeras",
    "../img/Remeras/ac dc.jpg",
    5000
  )
);
items.push(
  new Productos(
    "Remera02",
    "Almafuerte",
    "Remeras",
    "../img/Remeras/almafuerte.jpg",
    5000
  )
);
items.push(
  new Productos(
    "Remera03",
    "Classic Batman",
    "Remeras",
    "../img/Remeras/batman.jpg",
    5000
  )
);
items.push(
  new Productos(
    "Remera04",
    "Blink 182",
    "Remeras",
    "../img/Remeras/blink 182.jpg",
    5000
  )
);
items.push(
  new Productos(
    "Remera05",
    "White Bowie",
    "Remeras",
    "../img/Remeras/bowie.jpg",
    5000
  )
);
items.push(
  new Productos(
    "Remera06",
    "Heisenberg",
    "Remeras",
    "../img/Remeras/breaking bad.jpg",
    5000
  )
);
items.push(
  new Productos(
    "Remera07",
    "Chewabacca",
    "Remeras",
    "../img/Remeras/chewabacca.jpg",
    5000
  )
);
items.push(
  new Productos(
    "Remera08",
    "Listen to Cobain",
    "Remeras",
    "../img/Remeras/cobain.jpg",
    5000
  )
);
items.push(
  new Productos(
    "Buzo01",
    "AC DC - Gray",
    "Buzos",
    "../img/Buzos/ac dc 2.jpg",
    10000
  )
);
items.push(
  new Productos(
    "Buzo02",
    "AC DC - Hells Bells",
    "Buzos",
    "../img/Buzos/ac dc 3.jpg",
    10000
  )
);
items.push(
  new Productos(
    "Buzo03",
    "AC DC - Back in Black",
    "Buzos",
    "../img/Buzos/ac dc.jpg",
    10000
  )
);
items.push(
  new Productos(
    "Buzo04",
    "The Beatles",
    "Buzos",
    "../img/Buzos/beatles.jpg",
    10000
  )
);
items.push(
  new Productos(
    "Buzo05",
    "Guns N Roses",
    "Buzos",
    "../img/Buzos/guns.jpg",
    10000
  )
);
items.push(
  new Productos(
    "Buzo06",
    "La Renga",
    "Buzos",
    "../img/Buzos/la renga.jpg",
    10000
  )
);
items.push(
  new Productos(
    "Buzo07",
    "Led Zeppelin",
    "Buzos",
    "../img/Buzos/led zeppelin.jpg",
    10000
  )
);
items.push(
  new Productos(
    "Buzo08",
    "Iron Maiden",
    "Buzos",
    "../img/Buzos/maiden.jpg",
    10000
  )
);
items.push(
  new Productos(
    "Accesorio01",
    "Billetera Devil",
    "Accesorios",
    "../img/Accesorios y otros/billetera 1.jpg",
    3000
  )
);
items.push(
  new Productos(
    "Accesorio02",
    "Billetera Star",
    "Accesorios",
    "../img/Accesorios y otros/billetera 2.jpg",
    3000
  )
);
items.push(
  new Productos(
    "Accesorio03",
    "Cinto Ojuelas",
    "Accesorios",
    "../img/Accesorios y otros/cinto 1.jpg",
    4000
  )
);
items.push(
  new Productos(
    "Accesorio04",
    "Cinto Tachas",
    "Accesorios",
    "../img/Accesorios y otros/cinto 2.jpg",
    4000
  )
);
items.push(
  new Productos(
    "Accesorio05",
    "Entradas Cosquin Rock",
    "Accesorios",
    "../img/Accesorios y otros/entradas cosquin rock.png",
    18000
  )
);
items.push(
  new Productos(
    "Accesorio06",
    "Entradas Music Festival",
    "Accesorios",
    "../img/Accesorios y otros/entradas music festival.jpg",
    3000
  )
);
items.push(
  new Productos(
    "Accesorio07",
    "Gorra - La Renga",
    "Accesorios",
    "../img/Accesorios y otros/gorra 1.jpg",
    6000
  )
);
items.push(
  new Productos(
    "Accesorio08",
    "Gorra - Pantera",
    "Accesorios",
    "../img/Accesorios y otros/gorra 2.jpg",
    6000
  )
);


//DOM
const contenedorProductos = document.getElementById("contenedor-productos-secciones");
const menuCategoria = document.querySelectorAll(".menu-categoria");
let agregarProducto = document.querySelectorAll(".agregarProducto"); //let porque despues se va a modificar
const numerito = document.querySelector(".numerito");

function cargarProducto(todosItems) {
  contenedorProductos.innerHTML = "";

  todosItems.forEach((item) => {
    const div = document.createElement("div"); //Agrego div contenedor de cada producto.
    div.classList.add("card"); // Le agrego la clase al div creado.
    div.innerHTML = `
        <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}" />
        <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">${item.precio}</p>
            <a href="#" class="btn btn-primary agregarProducto" id="${item.id}">Agregar al carrito</a>
        </div>
      `;

    contenedorProductos.append(div);
  })

  actualizarAgregarProoducto();
}

cargarProducto(items); //como queremos que cargue todos los productos, le pasamos el nombre del array items
console.log(items); //HASTA ACA TODO JOYA, TRAE CATEGORIAS Y TRAE ARRAY ITEMS

//ACA HAY ALGUN PROBLEMA, YA QUE NO ME FILTRA POR CATEGORIA CUANDO APLICO LO SIGUIENTE
menuCategoria.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    menuCategoria.forEach((menu) => menu.classList.remove("menuActive"));
    e.currentTarget.classList.add("menuActive");

    /* La idea es que si hago click cualquier categoria que no sea HOME, me traiga los productos filtrados,
      Si hago click en HOME, que me traiga Todos....si funcionara... */
    if (e.currentTarget.id != "Todos") {
      const itemsCategoria = items.filter(
        (item) => item.categoria == e.currentTarget.id
      );
      cargarProducto(itemsCategoria);
    } else {
      cargarProducto(items);
    }
  });
});

//Cada vez que se cargan productos nuevos, se actualizaran los botones de Agr. Product.
function actualizarAgregarProoducto() {
  agregarProducto = document.querySelectorAll(".agregarProducto");
  
  agregarProducto.forEach(agregar => {
    agregar.addEventListener("click", agregarAlCarrito );
  });
}


let productosEnCarrito;


let productosEnCarritoStorage = localStorage.getItem("productos-en-carrito");

if(productosEnCarritoStorage) {
  productosEnCarrito = JSON.parse(productosEnCarritoStorage);
  actualizarNumeritoCarrito();
} else {
  productosEnCarrito = [];
}


function agregarAlCarrito(e) {

    const idAgregar = e.currentTarget.id;
    const itemAgregado = items.find(item => item.id === idAgregar); 
    
    if(productosEnCarrito.some(item => item.id === idAgregar)) {
      const indexProductosEnCarrito = productosEnCarrito.findIndex(item => item.id === idAgregar);
      productosEnCarrito[indexProductosEnCarrito].cantidad++; //Esto lo hago para que, cuando elegimos el mismo producto dos veces, me aumente la "cantidad".
    } else {
    itemAgregado.cantidad = 1; //A "itemAgregado" le creamos la propiedad cantidad
    productosEnCarrito.push(itemAgregado);//Al hacer click en "Agregar" me va a ir llenando el Array "productosEnCarrito" con los items seleccionados.
    
  }
  actualizarNumeritoCarrito();


  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

 function actualizarNumeritoCarrito () {
  let nuevoNumerito = productosEnCarrito.reduce((acc, item) => acc +item.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}

