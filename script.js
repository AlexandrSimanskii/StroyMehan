//  achievement section animation

const qualityElements = Array.from(
  document.querySelectorAll(".achievement-items__title")
);
const achievementSection = document.querySelector(".achievement");
const achievementList = document.querySelector(".achievement-list");

function checkAndIncreaseQuantity() {
  const top = window.scrollY;
  const topElem = achievementSection.offsetTop;
  const startPoint =
    achievementSection.offsetTop -
    window.innerHeight +
    achievementSection.offsetHeight / 2;

  if (top >= startPoint && !checkAndIncreaseQuantity.hasIncreasedQuality) {
    qualityElements.every((item) => {
      increaseQuality(item);
      animateAchievementSection();
      checkAndIncreaseQuantity.hasIncreasedQuality = true;
      return true;
    });
  } else if (top < 300 && checkAndIncreaseQuantity.hasIncreasedQuality) {
    checkAndIncreaseQuantity.hasIncreasedQuality = false;
  }
}

function increaseQuality(elem) {
  const finish = parseInt(elem.dataset.quantity);
  let num = parseInt(elem.textContent);

  function increase() {
    if (finish > num) {
      elem.textContent = ++num;
      setTimeout(increase, 1800 / finish);
    }
  }

  increase();
}

function animateAchievementSection() {
  achievementList.classList.add("achievement-list--animate");
}

window.addEventListener("load", checkAndIncreaseQuantity);
window.addEventListener("scroll", checkAndIncreaseQuantity, { passive: true });

checkAndIncreaseQuantity.hasIncreasedQuality = false;

// End  achievement section animation

// Header animation

const headerListItem = [...document.querySelectorAll(".header-list__item")];
headerListItem.forEach((item) => {
  item.addEventListener("click", () => {
    headerListItem.forEach((otherItem) => {
      otherItem.classList.remove("header-list__item--active");
    });
    item.classList.add("header-list__item--active");
  });
});

//End Header animation
