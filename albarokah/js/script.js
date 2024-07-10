window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.remove("transparent");
    header.classList.add("bg-dark");
  } else {
    header.classList.remove("bg-dark");
    header.classList.add("transparent");
  }
});

const menu = [
  {
    id: 1,
    name: "Asean food",
    image: "img/asean food.jpg",
    price: 100000,
  },
  {
    id: 2,
    name: "Burger",
    image: "img/burger.jpg",
    price: 80000,
  },
  {
    id: 3,
    name: "Coffee",
    image: "img/coffee.jpg",
    price: 30000,
  },
  {
    id: 4,
    name: "Noodles",
    image: "img/noodles.jpg",
    price: 30000,
  },
  {
    id: 5,
    name: "Orange juice",
    image: "img/orange juice.jpg",
    price: 20000,
  },
  {
    id: 6,
    name: "Pancake",
    image: "img/pancake.jpg",
    price: 40000,
  },
  {
    id: 7,
    name: "Pizza",
    image: "img/pizza.jpg",
    price: 70000,
  },
  {
    id: 8,
    name: "Sphagetti",
    image: "img/sphagetti.jpg",
    price: 50000,
  },
  {
    id: 9,
    name: "Fried rice",
    image: "img/fried rice.jpg",
    price: 40000,
  },
  {
    id: 10,
    name: "Fried chicken",
    image: "img/fried chicken.jpg",
    price: 55000,
  },
];

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const menuContainer = document.querySelector(".menu-container");
menu.forEach((item) => {
  menuColumn = document.createElement("div");
  menuColumn.setAttribute("class", "col mb-5");

  menuColumn.innerHTML = `
    <div class="card h-100">
      <img
        class="card-img-top"
        src="${item.image}"
        alt="${item.name}"
      />
      <div class="card-body p-4">
        <div class="text-center">
          <h5 class="fw-bolder">${item.name}</h5>
          Rp ${formatPrice(item.price)}
        </div>
      </div>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <a
            class="btn btn-outline-dark mt-auto detailButton"
            href="#"
            data-id="${item.id}"
            data-bs-toggle="modal"
            data-bs-target="#detailModal"
            >Detail</a
          >
        </div>
      </div>
  </div>
  `;

  menuContainer.appendChild(menuColumn);
});

// mynumber
const wangsaff = '6287863849395'

document.querySelectorAll(".detailButton").forEach((x) => {
  x.addEventListener("click", function () {
    const detailModal = document.querySelector("#detailModal");
    const data = menu.find((x) => x.id == this.dataset.id);
    detailModal.querySelector('.modal-title').innerHTML = data.name
    detailModal.querySelector('img').setAttribute('src', data.image)
    detailModal.querySelector('img').setAttribute('alt', data.name)
    detailModal.querySelector('.modal-price').innerHTML = 'Rp ' + formatPrice(data.price)

    detailModal.querySelector('.order-button').addEventListener('click', function() {
      document.location.href = `https://api.whatsapp.com/send?phone=${wangsaff}&text=Hai%20kak,%0D%0Asaya%20tertarik%20dengan%20${data.name}%20yang%20harganya%20Rp%20${formatPrice(data.price)}`
    })
  });
});


document.querySelector('button[type="submit"]').addEventListener('click', function(e) {
  e.preventDefault()

  const name = document.querySelector('input[id="name"]').value
  const email = document.querySelector('input[id="email"]').value
  const message = document.querySelector('textarea[id="message"]').value

  if(name != '' && email != '' && message != '' ){
    document.location.href = `https://api.whatsapp.com/send?phone=${wangsaff}&text=Nama:%20${name}%0D%0AEmail:%20${email}%0D%0APesan:%20${message}`
  } else {
    alert('Make sure to field each column!')
  }

})
