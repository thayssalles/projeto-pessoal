let meta = 2000
let agua = 0

console.log("Lembrete de beber água")
console.log("Sua meta é beber 2000 ml por dia")

function beberAgua(valor) {
    agua = agua + valor

    console.log("Você bebeu " + valor + " ml")
    console.log("Você já bebeu " + agua + " ml")
}

function verAgua() {
    console.log("Quantidade de água bebida: " + agua + " ml")

    if (agua >= meta) {
        console.log("Parabéns! Você bateu sua meta!")
    } else {
        console.log("Você ainda precisa beber mais água")
    }
}

beberAgua(500)
beberAgua(500)
beberAgua(300)

verAgua()

