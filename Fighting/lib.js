//model
let log = console.log
let pHitpoints = 500;
let bHitpoints = 9999;
const attackButton = document.getElementById("attackId")

let playerAttack = 420
const bossAttack = 69
//view
function show() {
    ShowDiv.innerHTML = KAKE
}
//controller
function attack() {
let x = Math.ceil(Math.random() * 3);
let z = Math.ceil(Math.random() * 10);
if (z == 3) bHitpoints -= playerAttack * 3;
else bHitpoints -= playerAttack;

if (z >= 9)  playerAttack *= 1,2;

if (x != 3) pHitpoints -= bossAttack;

if (pHitpoints <= 0 || bHitpoints <= 0){

    document.getElementById("attackId").style.display = "none";
}
/*
TODO
heal + heal cooldown 3 runder 
69 + 69 = 138
69 + 69 + 69 = 207

gjøre 1,2 multiplier til charge up move

dynamic health bars
current dmg 
heal amount


*/
log (x, "Player Dodge")
log (z, "Attack Increase")
log (playerAttack, "Attack")
log (pHitpoints, "Player Hitpoints")
log (bHitpoints, "Boss Hitpoints")
}
function rReload() {
    
}

