/*klasik for döngüsü*/
    let sayilar = [44,56,2,7,9,5]
        console.log("Elemanlar. . .");
    for(let i=0 ; i<sayilar.length ;i++ ){
        console.log("Eleman: " + sayilar[i]);
    }
/*elemanların üzerinde tek tek gezin için sayilar2.forEach(function(sayi){})
böylelikle for döngüsü kullanmamış olduk*/

    let sayilar2 =[44,56,2,7,9,5]
        console.log("Elemanlar. . .");
        sayilar2.forEach(function(sayi){
                console.log("Eleman: "+sayi);
        })