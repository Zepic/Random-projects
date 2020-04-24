//model
let log = console.log;
const attackButton = document.getElementById("attackId");
const powerUpButton = document.getElementById("powerUpId");
let playerAttack = 400;
const bossAttack = 100;
let healCooldown = 3;
//view
function show() {
  const showDiv = document.getElementById("showDiv");
}
//controller
function attack() {
  let pHitpoints = document.getElementById("playerHealth");
  let bHitpoints = document.getElementById("bossHealth");
  let x = Math.ceil(Math.random() * 5);
  let z = Math.ceil(Math.random() * 10);
  healCooldown++;
  log(healCooldown)
  if (z == 3) {
    bHitpoints.value -= playerAttack * 3;
    showDiv.innerHTML +=`You crit the boss for ${playerAttack * 3} damage! <br>`
  }
  else {
    bHitpoints.value -= playerAttack;
    showDiv.innerHTML +=`You hit the boss for ${playerAttack} damage! <br>`
  }

  if (x != 5) {
    pHitpoints.value -= bossAttack;
    showDiv.innerHTML += `The boss sliced you for ${bossAttack}<br>`
  } 
  else {
    showDiv.innerHTML += `You narrowly dodged the nurses vicious swipe <br>`
  }

  if (pHitpoints.value <= 0 || bHitpoints.value <= 0) {
    document.getElementById("attackId").style.display = "none";
    document.getElementById("healId").style.display = "none";
    document.getElementById("powerUpId").style.display = "none";
    if (pHitpoints.value <= 0) showDiv.innerHTML += `You died`;
    else if (bHitpoints.value <= 0) showDiv.innerHTML += `The boss is defeated`
  }

}

function heal() {
  const healButton = document.getElementById("healId");
  let pHitpoints = document.getElementById("playerHealth");
  let x = Math.ceil(Math.random() * 5);
  if (pHitpoints.value >= 500 || pHitpoints.value <= 0) return;
  log(healCooldown, "skal være 3")
  if (healCooldown >= 3) {
    healCooldown = 0;
    pHitpoints.value += 100;
    showDiv.innerHTML += `You healed for 100HP <br>`
    log(healCooldown,"skal være 0")
    if (x != 5) {
      pHitpoints.value -= bossAttack;
      showDiv.innerHTML += `The boss hit you for ${bossAttack} damage <br>`
    }
    else {
      showDiv.innerHTML += `You narrowly dodged the nurses vicious swipe <br>`
    }
  }
}

function powerUp() {
  let pHitpoints = document.getElementById("playerHealth");
  let x = Math.ceil(Math.random() * 5);
  playerAttack *= (1.2);
  playerAttack = Math.floor(playerAttack);
  showDiv.innerHTML += `You increased your attack damage by 20% <br>`
  healCooldown++;
  log(healCooldown)
  if (x != 5) {
    pHitpoints.value -= bossAttack;
    showDiv.innerHTML += `The boss hit you for ${bossAttack} damage <br>`
  }
  else showDiv.innerHTML += `You narrowly dodged the nurses vicious swipe <br>`
  
}

// To do - 

