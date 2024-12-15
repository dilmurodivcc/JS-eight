


function m1() {
  const input = document.getElementById("inputValue").value;
  const array = input.trim().split(" ").map(Number);
  for (let i = 0; i < array.length; i++) {
    if (!array.slice(i + 1).includes(array[i]) && !array.slice(0, i).includes(array[i])) {
      return (document.getElementById(
        "output"
      ).innerHTML = `Takrorlanmas element: ${array[i]} <br> index = ${i}`);
    }
  }
  return (document.getElementById(
    "output"
  ).innerHTML = `Takrorlanmas element yoq.`);
}





function m2(){
  const input = document.getElementById("inputValue2").value;
  const input2 = document.getElementById("inputValue2-2").value;
  const array = input.trim().split(" ").map(Number);
  const array2 = input2.trim().split(" ").map(Number);
  const concatArr = array.concat(array2);
  const filter = concatArr.filter((item) => item % 2 === 0);
  const result = filter.reduce((a, b) => a + b, 0);
  document.getElementById("output2").innerHTML = `Javob: ${result}`;
}

function m3() {
  const input = document.getElementById("inputValue3").value;
  const array = input.trim().split(" ").map(Number);
  let aLot = array[0];
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    const count = array.lastIndexOf(el) - array.indexOf(el) + 1;
    if (count > max) {
      aLot = el;
      max = count;
    }
    i = array.lastIndexOf(el);
  }
  document.getElementById("output3").innerHTML = `Javob: ${aLot}`;
}

function m4() {
  const input = document.getElementById("inputValue4").value;
  const array = input.trim().split(" ").map(Number);
  const input2 = document.getElementById("inputValue4-4").value;
  const array2 = input2.trim().split(" ").map(Number);
  const filterArr = [...new Set(array.filter((item) => array2.includes(item)))];
  return (document.getElementById(
    "output4"
  ).innerHTML = `Takrorlangan elementlar o'chirildi: <br>  [ ${filterArr} ]`);
}

function m5() {
  const input = document.getElementById("inputValue5").value;
  const array = input.trim().split(" ").map(Number);
  let musbat = 0;
  let manfiy = 0;
  let nol = 0;
  array.forEach((num) => {
    if (num > 0) {
      musbat++;
    } else if (num < 0) {
      manfiy++;
    } else {
      nol++;
    }
  });
  const len = array.length;
  const musbatP = ((musbat / len) * 100).toFixed();
  const manfiyP = ((manfiy / len) * 100).toFixed();
  const nolP = ((nol / len) * 100).toFixed();
  document.getElementById("output5").innerHTML = `
    Musbat: ${musbatP}%<br> Manfiy: ${manfiyP}%<br> Nol: ${nolP}%`;
}

function m6() {
  const input = document.getElementById("inputValue6").value;
  const array = input.trim().split(" ");
  let longest = array[0];
  array.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  document.getElementById("output6").innerHTML = `Uzun ism: ${longest}`;
}

function m7() {
  const input = document.getElementById("inputValue7").value;
  const k = +document.getElementById("inputValue7-7").value;
  const array = input.trim().split(" ").map(Number);
  const sliced = array.splice(0, k);
  let result = array.concat(sliced).join(", ");
  document.getElementById(
    "output7"
  ).innerHTML = `Olib tashlandi: [ ${result} ]`;
}



function m8() {
  const input = document.getElementById("inputValue8").value;
  const k = +document.getElementById("inputValue8-8").value;
  const arr = input.trim().split(" ").map(Number);
  const kk = arr[k];
  arr[k] = arr[arr.length - 1];
  arr[arr.length - 1] = kk;
  console.log(arr);
  document.getElementById("output8").innerHTML = `Almashtirilgan array: [ ${arr} ]`;
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
  loop: true,
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
  touchEventsTarget: "container",
  touchRatio: 1,
});
