/*basit düzeydeki function mantığı*/

    function myFun() {
        console.log("Selam")
    }

    myFun();
    myFun();

    /*parametreli function örneği*/

    function myFun2(ad) {
        console.log("Selam" + ad);
    }

    myFun2("Mehmet");
    myFun2("Can");

    /*function'da return kavramı; fonksiyonun çağrıldığı yere içerden bir tane değer döndürmeyi sağlıyor. */

    function myFun3(a,b,c) {
        return a + b + c;
        
    }
    let toplam = myFun3(10,20,30);
    console.log(toplam);