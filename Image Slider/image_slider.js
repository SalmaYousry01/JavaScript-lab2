// const itemClassName = "carousel-card";
let items = document.querySelectorAll(".carousel-card");
let totalItems = items.length; //length of object of objects
let activeSlide = 0; //initial value
let moving = false; // initialized flag
let totalWidth = ""; // leih el 3 dol string? leih msh b zero
let singleAmountToMoveHorizontally = "";
let positionX = "";
let storeOldIndex = "";
let differenceToMove = "";
let amountOfTimesToLoopLeft = 0;
let amountOfTimesToLoopRight = 0;
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const dots = document.querySelectorAll(".dot");


function moveCardsHorizontally(amountToMove) {
  for (let key in items) {
    if (items.hasOwnProperty(key)) {
      value = items[key];
      console.log(`items[${key}]= ${value}, items.length = ${items.length}`);
      items[key].style.transform = `translate( ${amountToMove}px)`;
    }
  }
}
function getNewPosition(direction) {
  //msh mfhoma awi
  totalWidth = items[0].parentElement.parentElement.parentElement.clientWidth;
  singleAmountToMoveHorizontally = items[0].offsetWidth;
  console.log(
    `singleAmountToMoveHorizontally = totalWidth: ${totalWidth} / totalItems: ${totalItems}= ${singleAmountToMoveHorizontally}`
  );
  if (direction === "right") {
    console.log("parameter moves right");
    positionX = Math.floor(singleAmountToMoveHorizontally * (activeSlide + 1));
    console.log(
      `positionX= singleAmountToMoveHorizontally: ${singleAmountToMoveHorizontally} * activeSlide: ${activeSlide + 1
      } = ${positionX}`
    );
  } else if (direction === "left") {
    console.log("parameter moves left");
    positionX = Math.floor(positionX - singleAmountToMoveHorizontally);
    console.log(
      `positionX=  positionX: ${positionX}-singleAmountToMoveHorizontally: ${singleAmountToMoveHorizontally}
      } = ${positionX}`
    );
  }
  return positionX;
}
function disableInteraction() {
  moving = true;
  setTimeout(function () {
    moving = false;
  }, 500);
}

function toggleActiveClass(oldIndex, newIndex) {
  //to remove active from old index and assign it to new index
  console.log(`Toggle Active Class - Old Index: ${oldIndex}, New Index: ${newIndex}`);
  items[oldIndex].classList.remove("active");
  dots[oldIndex].classList.remove("active");

  items[newIndex].classList.add("active");
  dots[newIndex].classList.add("active");


}

function moveCardsDotsHorizontally(dir) {
  // lel dots enaha tt7arak
  moveCardsHorizontally(-getNewPosition(dir));
  storeOldIndex = activeSlide;
  console.log(`storeOldIndex= ${storeOldIndex}`);
  if (dir === "left") {
    activeSlide = activeSlide - 1;
    console.log(`activeSlide - 1 = ${activeSlide}`);
  } else {
    activeSlide = activeSlide + 1;
    console.log(`activeSlide + 1 = ${activeSlide}`);
  }
  toggleActiveClass(storeOldIndex, activeSlide);
}
function determineDifference(initial, final) {
  // hashof far2 el dots ad eih 3ashan at7arak 3la asas-hom
  differenceToMove = Math.floor(final - initial);
  console.log(
    `differenceToMove = final:${final} - initial:${initial} = ${differenceToMove}`
  );
  return differenceToMove;
}

// Set event listeners
nextBtn.onclick = function () {
  // Check if carousel is moving, if not, allow interaction
  if (!moving) {
    console.log("next button clicked");
    // temporarily disable interactivity
    disableInteraction();
    if (activeSlide === totalItems - 1) {
      console.log(
        `active slide is activeSlide:${activeSlide} = totalItems:${totalItems} cant go more to the right`
      );
    } else {
      moveCardsDotsHorizontally("right");
    }
  }
};
prevBtn.onclick = function () {
  if (!moving) {
    console.log("prev button clicked");
    // temporarily disable interactivity
    disableInteraction();
    if (activeSlide === 0) {
      console.log("active slide is 1 cant go more to the left");
    } else {
      moveCardsDotsHorizontally("left");
    }
  }
};

// document.querySelectorAll(".dot").forEach((item, index) => {
//   item.addEventListener("click", (e) => {
//     console.log("clicked in dot");
//     console.log(`index:${index} and item:${item}`);

//     if (index > activeSlide) {
//       console.log(`index:${index} > activeSlide:${activeSlide} move right`);
//       amountOfTimesToLoopRight = Math.floor(
//         determineDifference(index, activeSlide) * -1
//       );

//       console.log(`amountofTimesToLoopRight=${amountOfTimesToLoopRight}`);
//       for (var i = 0; i < amountOfTimesToLoopRight; i++) {
//         moveCardsDotsHorizontally("right");
//       }
//     } else {
//       console.log(`index:${index} < activeSlide:${activeSlide} move left`);
//       amountOfTimesToLoopLeft = determineDifference(index, activeSlide);
//       console.log(`amountOfTimesToLoopLeft = ${amountOfTimesToLoopLeft}`);
//       for (var j = 0; j < amountOfTimesToLoopLeft; j++) {
//         moveCardsDotsHorizontally("left");
//       }
//     }
//   });
// });
document.querySelectorAll(".dot").forEach((item, index) => {
  item.addEventListener("click", (e) => {
    console.log("clicked in dot");
    console.log(`index:${index} and item:${item}`);

    if (index >= 0 && index < items.length) {
      if (index > activeSlide) {
        console.log(`index:${index} > activeSlide:${activeSlide} move right`);
        amountOfTimesToLoopRight = Math.floor(
          determineDifference(index, activeSlide) * -1
        );

        console.log(`amountofTimesToLoopRight=${amountOfTimesToLoopRight}`);
        for (var i = 0; i < amountOfTimesToLoopRight; i++) {
          moveCardsDotsHorizontally("right");
        }
      } else {
        console.log(`index:${index} < activeSlide:${activeSlide} move left`);
        amountOfTimesToLoopLeft = determineDifference(index, activeSlide);
        console.log(`amountOfTimesToLoopLeft = ${amountOfTimesToLoopLeft}`);
        for (var j = 0; j < amountOfTimesToLoopLeft; j++) {
          moveCardsDotsHorizontally("left");
        }
      }
    } else {
      console.error("Invalid dot index");
    }
  });
});

