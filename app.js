function m1() {
  const input = document.getElementById("inputValue").value;
  const array = input.trim().split(" ").map(Number);
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let c = 0; c < array.length; c++) {
      if (array[i] === array[c]) {
        count++;
      }
    }
    if (count == 1) {
      return (document.getElementById(
        "output"
      ).innerHTML = `Takrorlanmas element:  ${array[i]} <br> index = ${i}`);
    }
  }
  return (document.getElementById(
    "output"
  ).innerHTML = `Takrorlanmas element yoq.`);
}
function m2() {
  const input = document.getElementById("inputValue2").value;
  const array = input.trim().split(" ").map(Number);
  const result = array.map((num) => num * -1).join(" ");
  document.getElementById("output2").innerHTML = `O'zgargan arr: ${result}`;
}
function m3() {
  const input = document.getElementById("inputValue3").value;
  const array = input.trim().split(" ").map(Number);
  const result = array.map((num) => num ** 2).join(" ");
  document.getElementById(
    "output3"
  ).innerHTML = `Kvadratdga oshirilgan arr:<br> ${result}`;
}




function m4() {
  const input = document.getElementById("inputValue4").value;
  const array = input.trim().split(" ").map(Number);
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let c = 0; c < array.length; c++) {
      if (array[i] === array[c]) {
        count++;
      }
    }
    if (count != 1) {
      array.splice(i, 1);
      i--;
    }
  }
  return (document.getElementById(
    "output4"
  ).innerHTML = `Takrorlangan elementlar o'chirildi: <br>  [ ${array} ]`);
}









function m5() {
  const n = +document.getElementById("n").value;
  const input = document.getElementById("inputValue5").value;
  const array = input.trim().split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % n !== 0) {
      count++;
    }
  }
  return (document.getElementById(
    "output5"
  ).innerHTML = `Arrey da ${n} ga bo'linmiydigan element  ${count} ta.`);
}

function m6() {
  const input = document.getElementById("inputValue6").value;
  const array = input.trim().split(" ").map(Number);
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (el % 2 === 0) {
      document.getElementById(
        "output6"
      ).innerHTML += `  index = ${i}  element = [ ${el} ]<br>`;
    }
  }
}



function m7() {
  const input = document.getElementById("inputValue7").value;
  const array = input.trim().split(" ").map(Number);
  array.sort((a, b) => a - b).pop();
  document.getElementById("output7").innerHTML = `Olib tashlandi: [ ${
    array
  } ]`;
}



function m8() {
  const input = document.getElementById("inputValue8").value;
  const array = input.trim().split(" ").map(Number).reverse().join(", ");
  document.getElementById(
    "output8"
  ).innerHTML = `Teskari tertibda: [ ${array} ]`;
}

// SOME FUNCTION -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const moonIcon = document.querySelector(".moon-icon");
const body = document.body;
if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "dark");
  body.classList.add("dark");
} else {
  body.classList.add(localStorage.getItem("mode"));
}
moonIcon.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }

  if (body.classList.contains("dark")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  } else {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  }
});
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

