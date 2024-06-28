window.addEventListener("load", function () {
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours().toString().padStart(2, "0");
    let min = dateToday.getMinutes().toString().padStart(2, "0");
    let sec = dateToday.getSeconds().toString().padStart(2, "0");

    hours.innerText = hr;
    minutes.innerText = min;
    seconds.innerText = sec;

    horario(hr, min, sec);
  }, 1000);

  let horario = (hr) => {
    let corpo = document.getElementsByTagName("body")[0];
    if (hr >= 0 && hr <= 5) {
      corpo.style.visibility = "visible";
      corpo.classList.remove("tarde");
      corpo.classList.add("noite");
    } else if (hr >= 6 && hr <= 12) {
      corpo.style.visibility = "visible";
      corpo.classList.remove("noite");
      corpo.classList.add("dia");
      console.log("dia");
    } else if (hr >= 13 && hr <= 19) {
      corpo.style.visibility = "visible";
      corpo.classList.remove("dia");
      corpo.classList.remove("noite");
      corpo.classList.add("tarde");
    } else {
      corpo.style.visibility = "visible";
      corpo.classList.remove("tarde");
      corpo.classList.remove("dia");
      corpo.classList.add("noite");
    }
  };
});
