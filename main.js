//Buy some milk chocolate
//Add some mint flavoring
//Combine the chocolate and mint
//Bake the mixture
//Break the hardened sheet into 6 pieces
//🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!


const buyChocolate = () => {
    const bought = {
        item: "milk chocolate" } 
    return bought
}

const addFlavoring = (object) => {
    object.newFlavor="mint"
    return object
    }
    

const makeBarkMixture = (object) => {
    if (object.newFlavor === "mint") {
        object.mixed = true 
    } else {
        object.mixed = false
    }
    return object
}

const bakeCandy = (object) => {
    if (object.mixed === "true") {
        object.baked = "true"
     } else {
            object.baked = false 
    }
    return object
}

const breakBark = (object) => {
    if (object.baked === true) {
       return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    }

}

const start = buyChocolate()
const flavor = addFlavoring(start)
const mix = makeBarkMixture(flavor)
const candy = bakeCandy(mix)
const bark = breakBark(candy)
console.log(candy)

           