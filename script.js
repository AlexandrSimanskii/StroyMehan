const qualityElements = [
  ...document.querySelectorAll(".achievement-items__title"),
];
const achievementSection = document.querySelector(".achievement");
const achievementList = document.querySelector(".achievement-list");
let hasIncreasedQuality = false;

window.onload = () => {
  checkAndIncreaseQuantity();
};

window.onscroll = () => {
  checkAndIncreaseQuantity();
};

function checkAndIncreaseQuantity() {
  let top = window.scrollY;
  let topElem = achievementSection.offsetTop;

  let startPoint =
    achievementSection.offsetTop -
    window.innerHeight +
    achievementSection.offsetHeight / 2;

  if (top >= startPoint && !hasIncreasedQuality) {
    qualityElements.forEach((item) => {
      increaseQuality(item);
      animateAchievementSection();
      hasIncreasedQuality = true;
    });
  } else if (top < 300 && hasIncreasedQuality) {
    hasIncreasedQuality = false;
  }
}

function increaseQuality(elem) {
  let num = parseInt(elem.textContent);
  let finish = parseInt(elem.dataset.quantity);

  function increase() {
    if (finish > parseInt(elem.textContent)) {
      console.log(elem);
      elem.textContent = parseInt(elem.textContent) + 1;
      setTimeout(increase, 1800 / finish);
    }
  }

  increase();
}

function animateAchievementSection() {
  achievementList.classList.add("achievement-list--animate");
}
