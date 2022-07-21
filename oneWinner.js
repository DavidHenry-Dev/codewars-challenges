function declareWinner(fighter1, fighter2, firstAttacker) {
    const warrior1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    const warrior2 = Math.ceil(fighter2.health / fighter1.damagePerAttack) 
    
    return warrior1 > warrior2 ? fighter1.name :
           warrior2 > warrior1 ? fighter2.name : firstAttacker
    
  }