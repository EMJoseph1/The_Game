//create object or class for the player and enemy
let user //variables are declared globally so the everything can find these variables
let enemy

class Player {
    constructor(hp, charge, dps, specdps, ult){
    this.hp =  hp,
    this.charge = charge,
    this.dps = dps,
    this.specdps =  specdps,
    this.ult = ult
    }
//player *button* functions  
}
user = new Player (150, 0, 10, 35, 75)
enemy = new Player (150, 0, 10, 35, 75)

//const startFight=()=>{
//    alert("Get ready for the biggest fight of you life, press ok to begin")
//}
// startFight()



// let enemyHealth = enemy.hp
// let playerHealth = user.hp
//while(enemyHealth > 0 || playerHealth > 0){
//const theFight=()=>{
    


const attackBox = document.querySelector("#attackBox")
const attack=()=>{//a way to lower the enemy hitpoints
    alert("You attempt your attack")
    let attackRoll = (Math.floor(Math.random() * 21))
      if(attackRoll > 1 && attackRoll < 20){
          attackBox.src = "monk3.png"
        enemy.hp -= user.dps + (Math.floor(Math.random() * user.charge))
          alert("You did " + user.dps + " damage. The demon's health is at " + enemy.hp)
          autoMove()
          if(user.hp <= 0){
            alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
        }
          attackBox.src = "background.jpg"
          //want to subtract the player dps from the enemy hp
      }
      else if (attackRoll == 0 || attackRoll == 1){
            alert("You missed!")
            autoMove()
            if(user.hp <= 0){
                alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
            }
            attackBox.src = "background.jpg"
          //nothing happens
      }
      else{
            alert("You crited!")
            enemy.hp -= (2 * user.dps + (Math.floor(Math.random() * user.charge)))
            alert("A crit! You did " + (2 * user.dps) + " damage to the enemy. The demon is at " + enemy.hp + " health points")
            autoMove()
            if(user.hp <= 0){
                alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
            }
            attackBox.src = "background.jpg"
          //double dps and subtract it from the enemy hp
      }
    }
    //attack(user, enemy) =  document.querySelector(".Attack").value
    //attack(user, enemy)

    const chargeUp=()=>{
       user.charge++
       attackBox.src = "monk2.png"
        alert("Your charge has increased to " + user.charge)
        autoMove()
        if(user.hp <= 0){
            alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
        }
        attackBox.src = "background.jpg"
    
    }

    //this is special attack
    const specAttack=()=>{//a way to lower the enemy hitpoints
        alert("You attempt your special attack")
        if(user.charge >= 1){
        let attackRoll = (Math.floor(Math.random() * 11))
          if(attackRoll > 1 && attackRoll <= 10){
            attackBox.src = "image.png"
              enemy.hp -= user.specdps + (Math.floor(Math.random() * user.charge))
              user.charge--
              alert("You did " + user.specdps + " damage. The demon's health is at " + enemy.hp)
              autoMove()
              if(user.hp <= 0){
                alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
            }
              attackBox.src = "background.jpg"
              //want to subtract the player dps from the enemy hp
          }
          else{
            user.charge--
            alert("Player One missed!")
            autoMove()
            if(user.hp <= 0){
                alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
            }
            attackBox.src = "background.jpg"
              //nothing happens
          }
        }
        else{
            alert("You do not have enough charge for a special attack")
            autoMove()
            if(user.hp <= 0){
                alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
            }
            attackBox.src = "background.jpg"
        }
    }

    const ultAttack=()=>{//a way to lower the enemy hitpoints
        alert("You attempt your ultimate move!")
        if(user.charge >= 3){
        let attackRoll = (Math.floor(Math.random() * 21))
          if(attackRoll > 1 && attackRoll <= 20){
            attackBox.src = "image.png"
              alert("You attack with your ultimate")
              user.charge-=3
              enemy.hp -= user.ult + (Math.floor(Math.random() * user.charge))
              alert("You did " + user.ult + " damage. The demon is at " + enemy.hp + " health points")
              autoMove()
              if(user.hp <= 0){
                alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
            }
              attackBox.src = "background.jpg"
              
              //want to subtract the player dps from the enemy hp
          }
          else{
            user.charge -= 3
            alert("You missed!")
            autoMove()
            if(user.hp <= 0){
                alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
            }
            attackBox.src = "background.jpg"
              //nothing happens
          }
        }
        else{
            alert("You do not have enough charge for your ultimate move")
            autoMove()
            if(user.hp <= 0){
                alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
            }
            attackBox.src = "background.jpg"
        }
    }
  
    //specAttack(user, enemy) = document.querySelector(".Special-Attack").value
        //specAttack(user, enemy)
//healing
const heal=()=>{
    let healingRoll = (Math.floor(Math.random() * 21))
    if(healingRoll > 5 && healingRoll < 20){
        alert("Normal Heal")
        user.hp = user.hp + (Math.floor(Math.random() * 50))
        alert("Your health is now " + user.hp) 
        autoMove()
        if(user.hp <= 0){
            alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
        }
        attackBox.src = "background.jpg"
    }
    else if(healingRoll < 5){
        alert("Healing Failed!")
        user.hp = user.hp - (Math.floor(Math.random() * 11))
        alert("Your health is now " + user.hp)
        autoMove()
        if(user.hp <= 0){
            alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
        }
        attackBox.src = "background.jpg"
    }
    else{
        alert("Max Healing")
        user.hp = user.hp + 50
        alert("Your health is now " + user.hp)
        autoMove()
        if(user.hp <= 0){
            alert("YOUR TRASH, YOUR TRASH!! Refresh to try again")
        }
        attackBox.src = "background.jpg"
    }

}




//**************player two functions********* */



const attack2=()=>{//a way to lower the enemy hitpoints
    alert("The demon attempts their attack")
    let attackRoll = (Math.floor(Math.random() * 21))
      if(attackRoll > 1 && attackRoll < 20){
        user.hp -= enemy.dps + (Math.floor(Math.random() * enemy.charge))
          alert("The demon did " + enemy.dps + " damage! Player one is at " + user.hp + " health points!")
          if(enemy.hp <= 0){
            alert("I'M LIKE THAT HOMIE, I'M LIKE THAT! I TRY TO TELL PEOPLE, I TRY TO WARN THEM!..... I'M Like that HOMIE!")
        }
          //want to subtract the player dps from the enemy hp
      }
      else if (attackRoll == 0 || attackRoll == 1){
            alert("The demon missed!")
            if(enemy.hp <= 0){
                alert("I'M LIKE THAT HOMIE, I'M LIKE THAT! I TRY TO TELL PEOPLE, I TRY TO WARN THEM!..... I'M Like that HOMIE!")
            }
          //nothing happens
      }
      else{
            alert("The demon crited!")
            user.hp -= (2 * enemy.dps + (Math.floor(Math.random() * enemy.charge)))
            alert("A crit! The demon did " + (2 * enemy.dps) + " damage to you! You are at " + user.hp + " health points!")
            if(enemy.hp <= 0){
                alert("I'M LIKE THAT HOMIE, I'M LIKE THAT! I TRY TO TELL PEOPLE, I TRY TO WARN THEM!..... I'M Like that HOMIE!")
            }
          //double dps and subtract it from the enemy hp
      }
      if(enemy.hp <= 0){
        alert("I'M LIKE THAT HOMIE, I'M LIKE THAT! I TRY TO TELL PEOPLE, I TRY TO WARN THEM!..... I'M Like that HOMIE!")
    }
    }
    //attack(user, enemy) =  document.querySelector(".Attack").value
    //attack(user, enemy)

    const chargeUp2=()=>{
       enemy.charge++
        alert("The demon charge has increased to " + enemy.charge)
        if(enemy.hp <= 0){
            alert("I'M LIKE THAT HOMIE, I'M LIKE THAT! I TRY TO TELL PEOPLE, I TRY TO WARN THEM!..... I'M Like that HOMIE!")
        }
    
    }

    //this is special attack
    const specAttack2=()=>{//a way to lower the enemy hitpoints
        alert("The demons attempts their special attack")
        if(enemy.charge >= 1){
        let attackRoll = (Math.floor(Math.random() * 11))
          if(attackRoll > 1 && attackRoll <= 10){
              enemy.charge--
              user.hp -= enemy.specdps + (Math.floor(Math.random() * enemy.charge))
              alert("The demon did " + enemy.specdps + " damage. You are at " + user.hp + " hitpoints")
              if(enemy.hp <= 0){
                alert("I'M LIKE THAT HOMIE, I'M LIKE THAT! I TRY TO TELL PEOPLE, I TRY TO WARN THEM!..... I'M Like that HOMIE!")
            }
              //want to subtract the player dps from the enemy hp
          }
          else{
            enemy.charge--
            alert("The demon missed!")
            if(enemy.hp <= 0){
                alert("I'M LIKE THAT HOMIE, I'M LIKE THAT! I TRY TO TELL PEOPLE, I TRY TO WARN THEM!..... I'M Like that HOMIE!")
            }
              //nothing happens
          }
        }
        else{
            alert("I'M LIKE THAT HOMIE, I'M LIKE THAT! I TRY TO TELL PEOPLE, I TRY TO WARN THEM!..... I'M Like that HOMIE!")
        }
        if(enemy.hp <= 0){
            alert("IM CHAMPION, IM CHAMPION!!!! Refresh to play again")
        }
    }

    const ultAttack2=()=>{//a way to lower the enemy hitpoints
        alert("The demons attempts their ultimate  move")
        if(enemy.charge >= 3){
        let attackRoll = (Math.floor(Math.random() * 21))
          if(attackRoll > 1 && attackRoll <= 20){
              alert("The demons attacked with their ultimate!")
              enemy.charge-= 3
              user.hp -= enemy.ult + (Math.floor(Math.random() * enemy.charge))
              alert("The demon did " + enemy.ult + " damage. Your health is at " + user.hp + " health points")
              if(enemy.hp <= 0){
                alert("I'M LIKE THAT HOMIE, I'M LIKE THAT! I TRY TO TELL PEOPLE, I TRY TO WARN THEM!..... I'M Like that HOMIE!")
            }
              //want to subtract the player dps from the enemy hp
          }
          else{
            enemy.charge-= 3
            alert("The demon missed!")
              //nothing happens
          }
        }
        else{
            alert("Player Two does not have enough charge for their ultimate move")
        }
        if(enemy.hp <= 0){
            alert("I'M LIKE THAT HOMIE, I'M LIKE THAT! I TRY TO TELL PEOPLE, I TRY TO WARN THEM!..... I'M Like that HOMIE!")
        }
    }
  
    //specAttack(user, enemy) = document.querySelector(".Special-Attack").value
        //specAttack(user, enemy)
//healing
const heal2=()=>{
    let healingRoll = (Math.floor(Math.random() * 21))
    if(healingRoll > 5 && healingRoll < 20){
        alert("Enemy Normal Healing")
        enemy.hp = (enemy.hp + (Math.floor(Math.random() * 50)))
        alert("Demon's health is now " + enemy.hp)
    }
    else if(healingRoll < 5){
        alert("Enemy Healing Failed")
        enemy.hp = (enemy.hp - (Math.floor(Math.random() * 11)))
        alert("Demon's health is now " + enemy.hp)
    }
    else{
        alert("Enemy Max Healing")
        enemy.hp = enemy.hp + 50
        alert("Demon's health is now " + enemy.hp)
    }
    if(enemy.hp <= 0){
        alert("I'M LIKE THAT HOMIE, I'M LIKE THAT! I TRY TO TELL PEOPLE, I TRY TO WARN THEM!..... I'M Like that HOMIE!")
    }

}



const displayStats=()=>{
    alert("Player Health is at " + user.hp)
    alert("Player Charge is at " + user.charge)
    alert("Enemy Health is at " + enemy.hp)
    alert("Enemy Charge is at " + enemy.charge)
}

const autoMove=()=>{
    if(enemy.charge >= 3){
        console.log("Can use all attacks")
        let random =  (Math.floor(Math.random() * 5))
        //var called random that picks a number between 1 - 5
        //ult will be 5
        if(random == 1){
            attack2()
            console.log(random)
        }
        else if(random == 2){
            specAttack2()
            console.log(random)
        }
        else if(random == 3){
            heal2()
            console.log(random)
        }
        else if(random == 4){
            chargeUp2()
            console.log(random)
        }
        else if(random == 5){
            ultAttack2()
            console.log(random)
        }
    }
    else{
        if(enemy.charge >= 1){ //random from 1 -4 so that it wont pick ult unless first condition is met
        let random = (Math.floor(Math.random() * 4))
        if(random == 1){
            attack2()
            console.log(random)
        }
        else if(random ==2){
            specAttack2()
            console.log(random)
        }
        else if(random == 3){
            heal2()
            console.log(random)
        }
        else if(random == 4){
            chargeUp2()
            console.log(random)
        }
    }
    else{
        let random = (Math.floor(Math.random() * 3))
        if(random == 1){
            attack2()
            console.log(random)
        }
        else if(random == 2){
            heal2()
            console.log(random)
        }
        else if(random == 3){
            chargeUp2()
            console.log(random)
        }
        else{
            chargeUp2()
            console.log(random)
        }
    }
    }
}








//heal(user, enemy) = document.querySelector(".Heal").value
//heal(user)




//chargeUp() = document.querySelector(".chargeUp").value
//chargeUp(user)

// const defense=()=>{//a way to stop your hitpoints from lowering
//     let block = (Math.floor(Math.random() * 2))
//     //if the attack is blocked, set enemy dps to 0
//     if(block == 1){
//         enemy.dps == 0
//         alert("You blocked the enemy attack")
//     }

// }
//defense() = document.querySelector(".Block").value
//defense(enemy)
//}

//theFight()
//}


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



//issues right now.
//enemy is undefined
//buttons dont work
//should a keep the function and/or while loop?
//how is the enemy going to attack

//**************player two functions********* */



