document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "fries",
      img: "src/images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "src/images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "src/images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "src/images/pizza.png",
    },
    {
      name: "milkshake",
      img: "src/images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "src/images/hotdog.png",
    },
    {
      name: "fries",
      img: "src/images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "src/images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "src/images/ice-cream.png",
    },
    {
      name: "pizza",
      img: "src/images/pizza.png",
    },
    {
      name: "milkshake",
      img: "src/images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "src/images/hotdog.png",
    },
  ];

  //Randomizes the array of cards
  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultsDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenIds = [];
  let cardsMatched = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "src/images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
      alert("You have to select another card!");
      cards[optionOneId].setAttribute("src", "src/images/blank.png");
      cards[optionTwoId].setAttribute("src", "src/images/blank.png");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "src/images/matched.png");
      cards[optionTwoId].setAttribute("src", "src/images/matched.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsMatched.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "src/images/blank.png");
      cards[optionTwoId].setAttribute("src", "src/images/blank.png");
    }

    cardsChosen = [];
    cardsChosenIds = [];

    resultsDisplay.textContent = cardsMatched.length;
    if (cardsMatched.length === cardArray.length / 2) {
      resultsDisplay.textContent = "Congratulations, you won!";
    }
  }

  createBoard();
});
