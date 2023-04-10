let isBlack = false;

function light() {
  const color1 = isBlack ? "#1f242d" : "beige";
  const color2 = isBlack ? "#0ef" : "black";
    document.querySelectorAll("section").forEach(el => {
    el.style.backgroundColor=color1;
    el.style.color=color2;
    });
    document.querySelectorAll("div").forEach(el => {
        el.style.backgroundColor=color1;
        el.style.color=color2;
    });

    document.querySelector("button").style.backgroundColor=color1;
    document.querySelector("button").style.color=color2;

  isBlack = !isBlack;
}

// function setOpacity(className) {




    // document.querySelectorAll("section").forEach(el => {
    //     el.style.backgroundColor="beige";
    //     el.style.color="black";
    // });
    // document.querySelectorAll("div").forEach(el => {
    //     el.style.backgroundColor="beige";
    //     el.style.color="black";
    // });