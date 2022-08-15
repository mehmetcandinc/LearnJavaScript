/*basit düzeydeki function mantığı*/

function myFun() {
  console.log("Selam");
}

myFun();
myFun();

/*parametreli function örneği*/

function myFun2(ad: string) {
  console.log("Selam" + ad);
}

myFun2("Mehmet");
myFun2("Can");

/*function'da return kavramı; fonksiyonun çağrıldığı yere içerden bir tane değer döndürmeyi sağlıyor. */
type deneme = (a: number, b: number, c: number) => void;

let myFun3: deneme = function (a, b, c) {
  return a + b + c;
};

let arrowFunc: deneme = (a, b, c) => {
  return 0;
};
let toplam1 = arrowFunc(10, 20, 40);
let toplam = myFun3(10, 20, 30);
console.log(toplam);
