import { groundArea, grassArea, cloudArea, treeArea, woodArea, rockArea } from "./world.js";

const material = {
  dirt: 0,
  grass: 1,
  wood: 2,
  tree: 3,
  rock: 4,
  cloud: 5,
  invetory: [],
};

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
    gameBoard.appendChild(grassElement);
  });
}

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
    gameBoard.appendChild(rockElement);
  });
}

drawDirt();
drawGrass();
drawSingleCloudItem();
drawTree();
drawWood();
drawRock();
