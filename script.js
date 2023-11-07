const qualityElements = [
  ...document.querySelectorAll(".achievement-items__title"),
];

qualityElements.forEach((item) => {
  increaseQuality(item);
});

function increaseQuality(elem) {
  let num = parseInt(elem.textContent, 10);
  elem.textContent = 0;

  function increase() {
    if (parseInt(elem.textContent, 10) < num) {
      elem.textContent = parseInt(elem.textContent, 10) + 1;
      setTimeout(increase, 2000/num);
    }
  }

  increase();
}
