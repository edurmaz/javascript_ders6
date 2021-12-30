const inventors = [
    ["Albert Einstein", 1879],
    ["Isaac Newton", 1643],
    ["Galileo Galilei", 1564],
    ["Marie Curie"], // 1867
    ["Johannes Kepler", 1571],
    ["Nicolaus Copernicus", 1473],
    ["Max Planck", 1858],
    ["Katherine Blodgett"], // 1898
    ["Ada Lovelace", 1815],
    ["Sarah E. Goode", 1855],
    ["Lise Meitner", 1878],
    ["Hanna Hammarström", 1729],
  ]; // 1829

const data = ["car","car","truck","truck","bike","walk","car","van","bike","walk","car","van","car","truck","pogostick",];

console.log(data.length)  // .length array içindeki dataların uzunluğunu gösterir. 
console.log(data[15])    // son öğesi undefined olur. bunun nedeni index nosu 0 dan başlıyor
console.log(data[data.length-1])  // bir arrayın son öğesini bulmak istiyorsak uygulanacak yöntem budur.
console.log(data[Math.floor( data.length/2)])  // ortanca öğesini bulmak için /2 yapılır. 


console.log(inventors)
console.log(inventors[0][0]) // arrayın iç kısmını görmek için iç içe index numarasını yazarak konsolda görebiliyoruz
console.log(inventors[1][1]) 

inventors[1]="farabi" // böyle yaparsak sadece array içine 1 nolu indexe string değer atamış oluyoruz.
console.log(inventors)

inventors[1]=["farabi",1643] // böyle yazarsak arrayın 1 nolu indexine eklemiş oluyoruz.
console.log(inventors)

inventors[3][1] = 1867
console.log(inventors)

inventors[inventors.length-1][1] = 1829;
console.log(inventors)

let stringVal = "build with Visual Studio Code, anywhere, anytime, entirely in your browser";

let newArray =stringVal.split(" ");  // stringi array'a çevirir.
console.log(newArray)

let newString = newArray.join(); // join array'i stringe çevirir. Düzensiz stringleri düzeltmek için kullanabiliriz.
console.log(newString)

newString = newArray.join("");
console.log(newString)

// Örnek:



function upper(strParam) {
    // let firstLetter =strParam.split("")[0].toUpperCase();
    // let lastLetter = strParam.split("")[strParam.lengt]
    let newArray = strParam.split("");
    newArray[0]=strParam[0].toUpperCase();
    newArray[newArray.length]="."
    let newString = newArray.join("");
    return newString;
}
console.log(upper(stringVal))

//.concat() arrayları birleştirmek için kullanıyoruz.

const firstList = [1,2,3];  
const secondList = [4,5,6];
const thirdList = firstList.concat(secondList)  // burda içerik güncelleme olmuyor concatla arrayları birleştiriyoruz.
console.log(thirdList)

// Bazı methotlar arrayın kendisini güncelliyor bazı methotlarda yeni bir array oluşturmamızı sağlıyor.

// .push() arrayın kendisini güncelliyor. Mevcut arrayın sonuna ekleme yapıyor.

secondList.push(7); // ne kadar istiyorsak o kadar ekleme yapabiliyoruz. Bir sınır yok.
console.log(secondList)

//.pop() methotu arrayde bulunan sondaki elemanı siler. Teker teker siler.

secondList.pop()
console.log(secondList)

//.indexof() Bir elementin index numarasını bize veriyor.

let indexNumber =secondList.indexOf(5); // Bir variableye de atayıp çıktıyı görebiliriz yada direk console.log üzerinde de görebiliyoruz.
console.log(indexNumber)

secondList[secondList.indexOf(5)]= 44; // Kısa yol olarak bu şekilde de index numarasını bulup içeriğini değiştirebiliriz.
console.log(secondList)


//.lastIndexOf() array içinde yinelenen dataların son indexte olanını bize gösterir.

let lastIndexNumber = data.lastIndexOf("car");
console.log(lastIndexNumber)

//.includes array içinde aradığımız bir elementin olup olmadığını kontrol ediyoruz. Sadece data görmek için kullanuyoruz.

console.log(data.includes("truck")) // array içinde truck varsa true yoksa false çıktısı verir.

//.slice() yeni bir değişken atamamız gerekiyor mevcut arrayi değiştirmiyor.Bitiş değerini almıyor.


const numbers = [1,2,3,4,5,6,7,8];
let yeniNumbers = numbers.slice(2,3) // .slice() seçtiğimiz index arasınız yazıyor
console.log(yeniNumbers)
yeniNumbers=numbers.splice(2,4)  //.splice() belli indexten başlayıp kaçtane seçeceğimizi yazıyoruz.Eğer devamında ekleme yapmak istiyorsak devamında ekleme yapacağımız değerleri giriyoruz. (2,3(öğeyi çıkart)22,24,25 ekle şeklinde)
console.log(yeniNumbers)

// ...(üç nokta) arrayları birleştirmek için kullanıyoruz. 

let firstItem = [1,2,3];
let secondItem = [4,5,6];
let thirdItem = [firstItem]; // Bunun çıktısı [[1,2,3]] şeklinde oluyor
thirdItem=[...firstItem];  //Bunun çıktısı [1,2,3] şeklinde oluyor.
thirdItem=[...firstItem, ...secondItem]; // Bunun çıktısıda [1,2,3,4,5,6] şeklinde oluyor.
console.log(thirdItem)

// .shift() arrayde ki ilk elemanı siler.
firstItem.shift();
console.log(firstItem)

// .unshift() arrayde ki ilk elemanı siler içerisine yeni değer atar.
firstItem.unshift("yeni değer");
console.log(firstItem)


// .trim() Baştaki ve sondaki boşlukları siler.

let value = "   emre  ";
console.log(value.trim())  

//.sort alfabetik sıraya sokmak için kullanılır.

console.log(data.sort()); 


 /*--------------- örnek-------------------*/
 // Bir fonksiyon parametre olarak array alacak, içersindeki elemanı çıkarıp bize geri verecek.

 let menuList = ["brokoli","çorba","paçanga","lahmacun","patlıcan","köfte","sütlaç"]

 function filterMenu(menu, value) {
     if(menu.includes(value)){
         let indexNum = menu.indexOf(value);
        menu.splice(indexNum,1);
        return menu;
     }else{
         return menu;
     }
 }
 console.log(filterMenu(menuList,"brokoli"))

