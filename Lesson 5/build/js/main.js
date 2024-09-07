"use strict";
// Convert to more or less specific
let a = "Hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world"; // Bu sekilde olan oklarin oldugu kisimlar tsx dosylari olarak reactta kullanilmaz
function addOrConcat(a, b, c) {
    if (c === "add") {
        return a + b;
    }
    return "" + a + b;
}
let myVal = addOrConcat(2, 2, "concat");
// Be careful! TS sees no problem - but a string is returned // dikkatli ol TS problem  oldugunu dusunmuyor fakat string dondurulecek fonksiyondan
let nextVal = addOrConcat(2, 2, "concat");
// 10 as string calismiyor fakat ikinci uyguladigimz calsiiyor 10 as unknown sonra as string olarak yapariz double casting ile
// 10 as string;
10;
// The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
