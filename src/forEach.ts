/*elemanların üzerinde tek tek gezin için sayilar2.forEach(function(sayi){})
böylelikle for döngüsü kullanmamış olduk*/
import { array as dizi, numbers } from "./array";
// let sayilar2 = [44, 56, 2, 7, 9, 5];
console.log("Elemanlar. . .");


// console.log(sayilar2[2])

/* for (let index = 0; index <= sayilar2.length; index++) {
        const element = sayilar2[index];
        console.log("🚀 ~ file: forEach.ts ~ line 10 ~ element", element)
        
}
 */
dizi.forEach(function (sayi, index) {
//   console.log("index: " + index);
  console.log("array Eleman: " + sayi);
});
numbers.forEach(function (sayi, index) {
//   console.log("index: " + index);
  console.log("Number Eleman: " + sayi);
});
