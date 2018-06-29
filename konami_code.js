const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let counter = 0;

  document.body.addEventListener('keydown', function(event) {

    if (event.key === codes[counter]){
      counter++;
      if (counter === 10) {
        alert("Yay!");
        counter = 0;
      }}
    else {
      counter = 0;
    }

  })

}

init();
