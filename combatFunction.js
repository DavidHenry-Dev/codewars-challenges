function combat(health, damage) {
    const leftoverHP = health - damage
    return leftoverHP < 0 ? 0 : leftoverHP
    }