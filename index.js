class Zucchine {

    *[Symbol.iterator]() {
        for (const key in this) {
            yield this[key];
        }
    }

    zucchina1 = {
        varieta: "var1",
        peso: 1,
        lunghezza: "length1"
    }

    zucchina2 = {
        varieta: "var2",
        peso: 12,
        lunghezza: "length2"
    }

    zucchina3 = {
        varieta: "var3",
        peso: 13,
        lunghezza: "length3"
    }

    zucchina4 = {
        varieta: "var4",
        peso: 14,
        lunghezza: "length4"
    }

    zucchina5 = {
        varieta: "var5",
        peso: 15,
        lunghezza: "length5"
    }

    zucchina6 = {
        varieta: "var6",
        peso: 16,
        lunghezza: "length6"
    }

    zucchina7 = {
        varieta: "var7",
        peso: 17,
        lunghezza: "length7"
    }

    zucchina8 = {
        varieta: "var8",
        peso: 1,
        lunghezza: "length8"
    }

    zucchina9 = {
        varieta: "var9",
        peso: 18,
        lunghezza: "length9"
    }

    zucchina10 = {
        varieta: "var10",
        peso: 19,
        lunghezza: "length10"
    }
}
let pesoTot = 0;
const zucchine = new Zucchine();
for (let zucchina in zucchine) {

    console.log('Nome zucchina', zucchina)
    console.log(`varieta':`, zucchine[zucchina].varieta)
    console.log(`PESO PRECED. = %c` + pesoTot, 'color: lightgreen')

    console.log(`Peso:`, zucchine[zucchina].peso)
    pesoTot += zucchine[zucchina].peso
    console.log(`PESO TOTALE = %c` + pesoTot, 'color: red')
    console.log(`Lunghezza:`, zucchine[zucchina].lunghezza)
    
    console.log('______________')
}
