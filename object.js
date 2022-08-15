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
console.log(calisan.soyad);
console.log(calisan.numara);
console.log(calisan.adresi);
console.log(calisan.adresi.sokak);
console.log(calisan.adresi.cadde);