import { groundArea, grassArea, treeArea, woodArea, rockArea } from "./world.js";

const material = {
  dirt: 0,
  grass: 1,
  wood: 2,
  tree: 3,
  rock: 4,
  cloud: 5,
  sky: 6,
  invetory: {
    emptyInvetory: null,
    grassInvetory: 1,
    woodInvetory: 2,
    treeInvetory: 3,
    rockInvetory: 4,
    dirtInvetory: 5,
  },
};
const tools = {
  axe: 1,
  pickAxe: 2,
  shovel: 3,
};

function drawSky(gameBoard) {
  let Tile = function (x, y) {
    this.x = x;
    this.y = y;
  };
  let tiles = [];
  let NUM_COLS = 21;
  let NUM_ROWS = 21;
  for (let i = 1; i <= NUM_COLS; i++) {
    for (let j = 1; j <= NUM_ROWS; j++) {
      let X = i;
      let Y = j;
      tiles.push(new Tile(X, Y));
    }
  }
  tiles.forEach((Tile) => {
    gameBoard = document.getElementById("game-board");
    const skyElement = document.createElement("div");
    skyElement.style.gridRowStart = Tile.x;
    skyElement.style.gridRowStart = Tile.y;
    skyElement.dataset.x = Tile.x;
    skyElement.dataset.y = Tile.y;
    skyElement.dataset.type = material.sky;
    skyElement.classList.add("sky");

    skyElement.addEventListener("click", () => {
      if (material.invetory.emptyInvetory == 5) {
        skyElement.classList.remove("sky");
        skyElement.classList.add("ground");
        material.invetory.emptyInvetory = 0;
      } else if (material.invetory.emptyInvetory == 4) {
        skyElement.classList.remove("sky");
        skyElement.classList.add("rock");
        material.invetory.emptyInvetory = 0;
      } else if (material.invetory.emptyInvetory == 3) {
        skyElement.classList.remove("sky");
        skyElement.classList.add("tree");
        material.invetory.emptyInvetory = null;
      } else if (material.invetory.emptyInvetory == 2) {
        skyElement.classList.remove("sky");
        skyElement.classList.add("wood");
        material.invetory.emptyInvetory = null;
      } else if (material.invetory.emptyInvetory == 1) {
        skyElement.classList.remove("sky");
        skyElement.classList.add("grass");
        material.invetory.emptyInvetory = null;
      }
    });
    gameBoard.appendChild(skyElement);
  });
}

let shovelIsClicked = false;
let shovelElement = document.querySelector(".shovel");
shovelElement.addEventListener("click", (clickHandler) => {
  return (shovelIsClicked = true);
});

const gameBoard = document.getElementById("game-board");

function drawDirt(gameBoard) {
  gameBoard = document.getElementById("game-board");
  groundArea.forEach((segment) => {
    const groundElement = document.createElement("div");
    groundElement.style.gridRowStart = segment.x;
    groundElement.style.gridRowStart = segment.y;
    groundElement.dataset.x = segment.x;
    groundElement.dataset.y = segment.y;
    groundElement.dataset.type = material.dirt;
    groundElement.classList.add("ground");

    groundElement.addEventListener("click", () => {
      if (shovelIsClicked) {
        groundElement.classList.remove("ground");
        var invetoryEl = document.querySelector(".inventory");
        invetoryEl.classList.add("ground");
        invetoryEl.addEventListener("click", (func) => {
          material.invetory.emptyInvetory = 5;
          invetoryEl.classList.remove("ground");
        });
        shovelIsClicked = false;
      } else {
        console.log(" shoval doesnt click");
      }
    });
    gameBoard.appendChild(groundElement);
  });
}

function drawGrass(gameBoard) {
  gameBoard = document.getElementById("game-board");
  grassArea.forEach((segment) => {
    const grassElement = document.createElement("div");
    grassElement.style.gridRowStart = segment.x;
    grassElement.style.gridRowStart = segment.y;
    grassElement.dataset.x = segment.x;
    grassElement.dataset.y = segment.y;
    grassElement.dataset.type = material.grass;
    console.log(grassElement.dataset.type);
    grassElement.classList.add("grass");

    grassElement.addEventListener("click", () => {
      if (shovelIsClicked) {
        grassElement.classList.remove("grass");
        var invetoryEl = document.querySelector(".inventory");
        invetoryEl.classList.add("grass");
        invetoryEl.addEventListener("click", (func) => {
          material.invetory.emptyInvetory = 1;
          invetoryEl.classList.remove("grass");
        });
        shovelIsClicked = false;
      } else {
        console.log(" shoval doesnt click");
      }
    });

    gameBoard.appendChild(grassElement);
  });
}

let axelIsClicked = false;
var axelElement = document.querySelector(".axe");
axelElement.addEventListener("click", (clickHandler) => {
  console.log("cli axe");
  return (axelIsClicked = true);
});

function drawTree(gameBoard) {
  gameBoard = document.getElementById("game-board");
  treeArea.forEach((segment) => {
    const treeElement = document.createElement("div");
    treeElement.style.gridRowStart = segment.x;
    treeElement.style.gridColumnStart = segment.y;
    treeElement.dataset.x = segment.x;
    treeElement.dataset.y = segment.y;
    treeElement.dataset.type = material.tree;
    treeElement.classList.add("tree");

    treeElement.addEventListener("click", () => {
      if (axelIsClicked) {
        treeElement.classList.remove("tree");
        var invetoryEl = document.querySelector(".inventory");
        invetoryEl.classList.add("tree");
        invetoryEl.addEventListener("click", (func) => {
          material.invetory.emptyInvetory = 3;
          invetoryEl.classList = "";
          invetoryEl.classList.add("inventory");
        });
        axelIsClicked = false;
      } else {
        console.log(" axe doesnt click");
      }
    });

    gameBoard.appendChild(treeElement);
  });
}

function drawWood(gameBoard) {
  gameBoard = document.getElementById("game-board");
  woodArea.forEach((segment) => {
    const woodElement = document.createElement("div");
    woodElement.style.gridRowStart = segment.x;
    woodElement.style.gridColumnStart = segment.y;
    woodElement.dataset.x = segment.x;
    woodElement.dataset.y = segment.y;
    woodElement.dataset.type = material.tree;
    woodElement.classList.add("wood");
    woodElement.addEventListener("click", () => {
      if (axelIsClicked) {
        woodElement.classList.remove("wood");
        var invetoryEl = document.querySelector(".inventory");
        invetoryEl.classList.add("wood");
        invetoryEl.addEventListener("click", (func) => {
          material.invetory.emptyInvetory = 2;
          invetoryEl.classList = "";
          invetoryEl.classList.add("inventory");
        });
        axelIsClicked = false;
      } else {
        console.log(" axe doesnt click");
      }
    });
    gameBoard.appendChild(woodElement);
  });
}

let pickaxelIsClicked = false;
var pickAxeElement = document.querySelector(".pickaxe");
pickAxeElement.addEventListener("click", (clickHandler) => {
  console.log("clcik pickaxe");
  return (pickaxelIsClicked = true);
});

function drawRock(gameBoard) {
  gameBoard = document.getElementById("game-board");
  rockArea.forEach((segment) => {
    const rockElement = document.createElement("div");
    rockElement.style.gridRowStart = segment.y;
    rockElement.style.gridRowStart = segment.x;
    rockElement.dataset.x = segment.x;
    rockElement.dataset.y = segment.y;
    rockElement.dataset.type = material.rock;
    rockElement.classList.add("rock");
    rockElement.addEventListener("click", () => {
      if (pickaxelIsClicked) {
        rockElement.classList.remove("rock");
        var invetoryEl = document.querySelector(".inventory");
        invetoryEl.classList.add("rock");
        invetoryEl.addEventListener("click", (func) => {
          material.invetory.emptyInvetory = 4;
          invetoryEl.classList.remove("rock");
        });
        pickaxelIsClicked = false;
      } else {
        console.log(" pick axe doesnt click");
      }
    });

    gameBoard.appendChild(rockElement);
  });
}

let buttonEl = document.querySelector(".button");

buttonEl.addEventListener("click", () => {
  document.location.reload();
});

function main() {
  drawDirt();
  drawGrass();
  drawTree();
  drawWood();
  drawRock();
  drawSky();
}

main();
