let calisan = {
        ad:"Mehmet Can",
        soyad:"Dinç",
        numara:5558882598,
        diller:["C","JavaScript"]
}

console.log(calisan.soyad);
console.log(calisan.numara);
console.log(calisan.diller);

/*obje içinde obje*/
let calisan2 = {
        ad:"Mehmet Can",
        soyad:"Dinç",
        numara:5558882598,
        diller:["C","JavaScript"],
        adresi: {
            cadde:"Yüzbaşılar",
            sokak:"Yüzbaşılar Sk."
        }
}
console.log(calisan2.soyad);
console.log(calisan2.numara);
console.log(calisan2.adresi);
console.log(calisan2.adresi.sokak);
console.log(calisan2.adresi.cadde);