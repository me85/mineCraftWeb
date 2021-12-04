import { groundArea, grassArea, cloudArea, treeArea, woodArea, rockArea } from "./world.js";

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
// console.log(material.rock);
// console.log(material.invetory.dirtInvetory);
const tools = {
  axe: 1,
  pickAxe: 2,
  shovel: 3,
};

function drawSky(gameBoard) {
  let Tile = function (x, y) {
    this.x = x;
    this.y = y;
    //   this.size = 441;
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
    // my edit
    skyElement.dataset.x = Tile.x;
    skyElement.dataset.y = Tile.y;
    skyElement.dataset.type = material.sky;
    skyElement.classList.add("sky");
    skyElement.addEventListener("click", () => {
      if (material.invetory.emptyInvetory == 5) {
        skyElement.classList.remove("sky");
        skyElement.classList.add("ground");

        material.invetory.emptyInvetory = 0;
        console.log(material.invetory.emptyInvetory);
      } else if (material.invetory.emptyInvetory == 4) {
        skyElement.classList.remove("sky");
        skyElement.classList.add("rock");

        material.invetory.emptyInvetory = 0;
        console.log(material.invetory.emptyInvetory);
      } else if (material.invetory.emptyInvetory == 3) {
        skyElement.classList.remove("sky");
        skyElement.classList.add("tree");

        material.invetory.emptyInvetory = null;

        console.log(material.invetory.emptyInvetory);
      } else if (material.invetory.emptyInvetory == 2) {
        skyElement.classList.remove("sky");
        skyElement.classList.add("wood");

        material.invetory.emptyInvetory = null;

        console.log(material.invetory.emptyInvetory);
      } else if (material.invetory.emptyInvetory == 1) {
        skyElement.classList.remove("sky");
        skyElement.classList.add("grass");

        material.invetory.emptyInvetory = null;

        console.log(material.invetory.emptyInvetory);
      }
    });

    gameBoard.appendChild(skyElement);
  });
}

let shovelIsClicked = false;

var shovelElement = document.querySelector(".shovel");

shovelElement.addEventListener("click", (clickHandler) => {
  console.log("clisho");
  return (shovelIsClicked = true);
});

const gameBoard = document.getElementById("game-board");

function drawDirt(gameBoard) {
  gameBoard = document.getElementById("game-board");
  groundArea.forEach((segment) => {
    const groundElement = document.createElement("div");
    groundElement.style.gridRowStart = segment.x;
    groundElement.style.gridRowStart = segment.y;
    // my edit
    groundElement.dataset.x = segment.x;
    groundElement.dataset.y = segment.y;
    groundElement.dataset.type = material.dirt;
    groundElement.classList.add("ground");

    groundElement.addEventListener("click", () => {
      // console.log("hi");
      if (shovelIsClicked) {
        groundElement.classList.remove("ground");
        var invetoryEl = document.querySelector(".inventory");
        // invetoryEl.classList.replace("inventory", "ground");

        invetoryEl.classList.add("ground");
        // material.invetory.dirtInvetory

        invetoryEl.addEventListener("click", (func) => {
          material.invetory.emptyInvetory = 5;
          invetoryEl.classList.remove("ground");

          // console.log(material.invetory.emptyInvetory);
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
    // my edit
    grassElement.dataset.x = segment.x;
    grassElement.dataset.y = segment.y;
    grassElement.dataset.type = material.grass;
    console.log(grassElement.dataset.type);
    grassElement.classList.add("grass");

    grassElement.addEventListener("click", () => {
      // console.log("hi");
      if (shovelIsClicked) {
        grassElement.classList.remove("grass");
        var invetoryEl = document.querySelector(".inventory");
        // invetoryEl.classList.replace("inventory", "ground");

        invetoryEl.classList.add("grass");
        // material.invetory.dirtInvetory

        invetoryEl.addEventListener("click", (func) => {
          material.invetory.emptyInvetory = 1;
          invetoryEl.classList.remove("grass");

          // console.log(material.invetory.emptyInvetory);
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
    // my edit
    treeElement.dataset.x = segment.x;
    treeElement.dataset.y = segment.y;
    treeElement.dataset.type = material.tree;
    treeElement.classList.add("tree");

    treeElement.addEventListener("click", () => {
      // console.log("hi");
      if (axelIsClicked) {
        treeElement.classList.remove("tree");
        var invetoryEl = document.querySelector(".inventory");
        // invetoryEl.classList.replace("inventory", "ground");

        invetoryEl.classList.add("tree");

        invetoryEl.addEventListener("click", (func) => {
          material.invetory.emptyInvetory = 3;
          // invetoryEl.classList.remove("tree");
          invetoryEl.classList = "";
          invetoryEl.classList.add("inventory");

          // console.log(material.invetory.emptyInvetory);
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
    // my edit
    woodElement.dataset.x = segment.x;
    woodElement.dataset.y = segment.y;
    woodElement.dataset.type = material.tree;
    woodElement.classList.add("wood");

    woodElement.addEventListener("click", () => {
      // console.log("hi");
      if (axelIsClicked) {
        woodElement.classList.remove("wood");
        var invetoryEl = document.querySelector(".inventory");
        // invetoryEl.classList.replace("inventory", "ground");

        invetoryEl.classList.add("wood");

        invetoryEl.addEventListener("click", (func) => {
          material.invetory.emptyInvetory = 2;
          // invetoryEl.classList.remove("tree");
          invetoryEl.classList = "";
          invetoryEl.classList.add("inventory");

          // console.log(material.invetory.emptyInvetory);
        });
        axelIsClicked = false;
      } else {
        console.log(" axe doesnt click");
      }
    });

    gameBoard.appendChild(woodElement);
  });
}

function drawSingleCloudItem(gameBoard) {
  gameBoard = document.getElementById("game-board");
  const cloudElement = document.createElement("div");
  cloudElement.dataset.type = material.cloud;
  cloudElement.classList.add("cloud");
  gameBoard.appendChild(cloudElement);
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
    // my edit
    rockElement.dataset.x = segment.x;
    rockElement.dataset.y = segment.y;
    rockElement.dataset.type = material.rock;
    rockElement.classList.add("rock");
    rockElement.addEventListener("click", () => {
      // console.log("hi");
      if (pickaxelIsClicked) {
        rockElement.classList.remove("rock");
        var invetoryEl = document.querySelector(".inventory");
        // invetoryEl.classList.replace("inventory", "ground");

        invetoryEl.classList.add("rock");
        // material.invetory.dirtInvetory

        invetoryEl.addEventListener("click", (func) => {
          material.invetory.emptyInvetory = 4;
          invetoryEl.classList.remove("rock");

          // console.log(material.invetory.emptyInvetory);
        });
        pickaxelIsClicked = false;
      } else {
        console.log(" pick axe doesnt click");
      }
    });

    gameBoard.appendChild(rockElement);
  });
}

// let skyEL = document.querySelector(".sky");

// skyEL.addEventListener("click", () => {
//   console.log("x", skyEL.dataset.x);
//   console.log("y", skyEL.dataset.y);
//   if (material.invetory.emptyInvetory == 5) {
//     // e.target

//     skyEL.classList.remove("sky");
//     skyEL.classList.add("ground");
//     // material.invetory.emptyInvetory == 0;
//     console.log("5 is dirt");
//   } else if (material.invetory.emptyInvetory == 4) {
//     console.log("4 is rock");
//   } else if (material.invetory.emptyInvetory == 3) {
//     console.log("3 is tree");
//   } else if (material.invetory.emptyInvetory == 2) {
//     console.log("2 is wood");
//   } else if (material.invetory.emptyInvetory == 1) {
//     console.log("1 is grass");
//   }
// });

drawDirt();
drawGrass();
drawSingleCloudItem();
drawTree();
drawWood();
drawRock();
drawSky();
