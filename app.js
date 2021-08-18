//create object or class for the player and enemy
let user //variables are declared globally so the everything can find these variables
let enemy
class Player {
    constructor(hp, charge, dps, specdps){
    this.hp =  hp,
    this.charge = charge,
    this.dps = dps,
    this.specdps =  specdps
    }
//player *button* functions  
}

// class Enemy {
//     constructor(hp, charge, dps){
//         this.hp = hp,
//         this.charge = charge
//         this.dps = dps
//     }
// }
user = new Player (1000, 0, 10, 20)
enemy = new Player (500, 1, 5, 50)




const attack=(user, enemy)=>{//a way to lower the enemy hitpoints
    console.log("We are inside attack")
    console.log(user)
    console.log(enemy)
    let attackRoll = (Math.floor(Math.random() * 21))
      if(attackRoll > 1 && attackRoll < 20){
          console.log("It's a hit")
          console.log(enemy.hp -= user.dps)
          //want to subtract the player dps from the enemy hp
      }
      else if (attackRoll == 0 || attackRoll == 1){
          console.log("You missed!")
          //nothing happens
      }
      else{
            console.log("You crited!")
            console.log(enemy.hp -= (2 * user.dps))
          //double dps and subtract it from the enemy hp
      }
    }
    attack(user, enemy)

    //this is special attack
    const specAttack=(user, enemy)=>{//a way to lower the enemy hitpoints
        console.log("We are in special attack")
        console.log(user)
        console.log(enemy)
        let attackRoll = (Math.floor(Math.random() * 21))
          if(attackRoll > 1 && attackRoll <= 20){
              console.log("It's a hit")
              console.log(enemy.hp -= user.specdps)
              //want to subtract the player dps from the enemy hp
          }
          else{
              console.log("You missed!")
              //nothing happens
          }
        }
    specAttack(user, enemy)

//healing
const heal=(user, enemy)=>{
    console.log("We are healing")
    console.log(user)
    console.log(enemy)
    let healingRoll = (Math.floor(Math.random() * 21))
    if(healingRoll > 5 && healingRoll < 20){
        console.log("Healing")
        console.log(user.hp + 50)
    }
    else if(healingRoll < 5){
        console.log("Small Healing")
        console.log(user.hp + 10)
    }
    else{
        console.log("Max Healing")
        console.log(user.hp + 100)
    }

}
heal(user, enemy)

//enemy *automatic or run the functions within a loop* perhaps randomly picking a function to run
//is there a way you can set a function that is in a class 
//


//how the battle goes down:
//player selects a move
//run function based on that move (function)
//calc damage and subtract or add hp if needed (conditional)
//check to see if both enemy and player's hp is >0 (conditional)
//restart with the new values(loop/function)


//create the functions for each button:


//when a button is clicked it will run a function, then allow the enemy to fun a function, then allow you to pick a function again until you or the enemy hitpoints reach 0

//a way to gain back some hitpoints

const chargeUp=()=>{//add a "stock" to fulfil a condition for the ultimate attack
    let count
}
const defense=()=>{
//a way to stop your hitpoints from lowering
}
const runAway=()=>{
//end the game
}


//special attack function
//ultimate attack function


//make enemy functions within a while loop

//maybe put the battle and the hitpoints within a loop


//want to be able to grab values from both the player object and the enemy object
//for damage calc
//problem is where would be the best place to but the attack button

