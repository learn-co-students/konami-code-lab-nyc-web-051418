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

const keysTracker = []; 

function init() {
  document.body.addEventListener('keydown',event => {
    keysTracker.push(event.key)
    if (keysTracker.length >= codes.length) {
      l = keysTracker.length;
      keysList = keysTracker.slice(l-codes.length,l);
      // JS does not have a default method to compare arrays.
      // A work-around is to stringify each array and compare.
      if (JSON.stringify(keysList)===JSON.stringify(codes)) {
        alert("Working!!!")
      }
    }
  })
}
