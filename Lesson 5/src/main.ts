// Type Alias // Tip Ornekleri
type One = string;
type Two = string | number;
type Three = "hello";

// Convert to more or less specific
let a: One = "Hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world"; // Bu sekilde olan oklarin oldugu kisimlar tsx dosylari olarak reactta kullanilmaz

function addOrConcat(
  a: number,
  b: number,
  c: "add" | "concat"
): number | string {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
}

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem - but a string is returned // dikkatli ol TS problem  oldugunu dusunmuyor fakat string dondurulecek fonksiyondan
let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string calismiyor fakat ikinci uyguladigimz calsiiyor 10 as unknown sonra as string olarak yapariz double casting ile
// 10 as string;
10 as unknown as string;

// The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
