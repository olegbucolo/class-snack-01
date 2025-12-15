class Zucchine{
    zucchina1 = {
        varieta: "var1",
        peso: "weight1",
        lunghezza: "length1"
    }

    zucchina2 = {
        varieta: "var2",
        peso: "weight2",
        lunghezza: "length2"
    }

    zucchina3 = {
        varieta: "var3",
        peso: "weight3",
        lunghezza: "length3"
    }

    zucchina4 = {
        varieta: "var4",
        peso: "weight4",
        lunghezza: "length4"
    }

    zucchina5 = {
        varieta: "var5",
        peso: "weight5",
        lunghezza: "length5"
    }

    zucchina6 = {
        varieta: "var6",
        peso: "weight6",
        lunghezza: "length6"
    }

    zucchina7 = {
        varieta: "var7",
        peso: "weight7",
        lunghezza: "length7"
    }

    zucchina8 = {
        varieta: "var8",
        peso: "weight8",
        lunghezza: "length8"
    }

    zucchina9 = {
        varieta: "var9",
        peso: "weight9",
        lunghezza: "length9"
    }

    zucchina10 = {
        varieta: "var10",
        peso: "weight10",
        lunghezza: "length10"
    }
}

const zucchine = new Zucchine();
for(let zucchina in zucchine){

    console.log('Nome zucchina', zucchina)
    console.log(`varieta'`, zucchine[zucchina].varieta)
    console.log(`Peso`, zucchine[zucchina].peso)
    console.log(`Lunghezza `, zucchine[zucchina].lunghezza)
    console.log('______________')

}
