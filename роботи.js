                                                                 // РОБОТИ з курса LEMON SCHOOL

/// 1. Створити працюючу конструкцію: ////////////////////////////////////////////

// var foo = 0;
// output = 'output:';
// switch (foo)
// {
//   case 0:
//     output += 'BMW ';
//     console.log(output);
//     break;
//   case 1:
//     output += 'Lexus ';
//     console.log(output);
//     break;
//   case 2:
//     output += 'Suzuki ';
//     console.log(output);
//     break;
//   case 3:
//     output += 'Renault';
//     console.log(output);
//     break;
//   case 4:
//     output += 'Mazda';
//     console.log(output);
//     break;
//   case 5:
//     output += 'Opel';
//     console.log(output);
//     break;
//  }

/// 2. Написати цикл, який перебере масив start і помістить всі унікальні значення в масив final: /////////////////////////////

// const arr = [1,1,1,2,3,3,3,3,4,4,1,1,5]
// const finalArr = []
// let noBase
// let base 
// let messange
// let Counter_outside
// let Counter_inside

// for (let i = 0; i < arr.length; i++){
//    Counter_outside = arr[i]
//    noBase = false
//    base = true

//     if (finalArr.length == 0){
//         finalArr.push(Counter_outside)
//     }
    
// for (let x = 0; x < finalArr.length; x++){
//      Counter_inside = finalArr [x]   

//     if(Counter_outside != Counter_inside && base){
//     noBase = true
//     messange = Counter_outside
//     }
//     if(Counter_outside == Counter_inside){
//     noBase = false
//     base = false
//     }
// }

//     if(noBase){
//     finalArr.push(messange)
//     }

// }

// console.log(finalArr)

/// 3. Створити функцію з невизначеною кількістю параметрів. Реалізувати обробник вхідних параметрів: /////////////////////////////

// const arr = [55,76,9,1,2,3,16,27,90,5,6,7,8,9]
// const [rest] = arr
// function func (rest){
//     for (let element of rest){
//         element +=1
//         console.log(element)
//     }
// }
// func(arr)

/// 4. Як привласнити відразу декілька сss стилів елементу? /////////////////////////////////////////////////////////////////

// const imgElement = document.createElement('img');     
// imgElement.src = 'https://gdb.rferl.org/24293B5E-DC8F-4AA0-9845-CA844C0ECD49_w1080_h608.jpg';      
// imgElement.alt = 'picture';   
// imgElement.style.cssText = "width: 1000px; height: 500px; border-radius: 1000px;";
// const body = document.querySelector("body");
// console.log(body);     
// body.style.cssText = "background-color: black;";     
// main.prepend(imgElement);    

/// 5. Як можна в існуючий блок (div) з наявним у ньому списком (ul) вставити картинку і текст, не видаливши при цьому список? /////////////////////////////

// const htmlElement = document.createElement('img');     
// htmlElement.style.width = '300px';                     
// htmlElement.src = 'https://i.pinimg.com/736x/76/34/ff/7634ff95d7ef5c05cbb44d90445ec47a.jpg';      
// htmlElement.alt = 'picture';                                                   
// const text = document.createElement('div');          
// text.innerHTML = "Underwear as a creation of the female soul";                     
// main.before(text);                              
// main.prepend(htmlElement);    

// 6. Доробити проект: розташувати кнопки по-іншому та замінити їх назви :////////////////////////////////////////////////////////////////

//stop - видаляє картинку
//pause/play - зупиняє та запускає слайдер замість Click Me
//< > - переключає індекс в масиві та ставить на паузу


// const images = ['6.jpg', '14296-svadebnoe-nyzhnee-bele-dlya-nevesty-5.jpg', 'img__97.jpg', 'komplekt-belya-na-svadbu.jpg']; 
// const imgSrc = folder => src => folder + src; 
// const way = imgSrc('./image/');

// let i = 0; 
// let q = images.length - 1; let stop = true; 

// const MainDivConstanta = document.createElement('div'); 
// document.body.appendChild(MainDivConstanta); 
// MainDivConstanta.id = 'ClassDivMain'; 
// ClassDivMain.className = 'main'; 
// ClassDivMain.style.cssText = 'display: flex; flex-direction: column; align-items: center'; 
// const sliderDivConstanta = document.createElement('div'); 
// sliderDivConstanta.id = 'sliderDivid'; 
// ClassDivMain.appendChild(sliderDivConstanta); 
// document.getElementById('sliderDivid').style.cssText = 'display: none;'; 
// const LeftPointerConstanta = document.createElement('button'); 
// LeftPointerConstanta.id = 'LeftPointerConstantaid'; 
// sliderDivid.prepend(LeftPointerConstanta); 
// document.getElementById('LeftPointerConstantaid').textContent = '🡄'; 
// document.getElementById('LeftPointerConstantaid').onclick = function() { 

//     stop = true; 
//     constImg.src = way(images[q]); 
//     if(q == 0) q = images.length; 
//     q--; 

// sliderDivid.append(RightPointerConstanta); }; 
// const RightPointerConstanta = document.createElement('button'); 
// RightPointerConstanta.id = 'RightPointerConstantaid'; 
// sliderDivid.append(RightPointerConstanta); 
// document.getElementById('RightPointerConstantaid').textContent = '🡆'; 
// document.getElementById('RightPointerConstantaid').onclick = function() { 
// stop = true; 

// if(i == images.length) i = 0; 

// constImg.src = way(images[i]); 
// document.getElementById('sliderDivid').append(constImg); 

// i++; 

// sliderDivid.append(RightPointerConstanta); }; 
// const constImg = document.createElement('img'); 
// constImg.id = 'imgId'; 
// constImg.style.cssText = 'width: 500px; height: 600px'; 
// const StartButtonConstanta = document.createElement('button'); 
// StartButtonConstanta.id = 'startButtonid'; 
// ClassDivMain.appendChild(StartButtonConstanta); 
// StartButtonConstanta.style.cssText = 'margin: 20px; padding: 20px'; 
// document.getElementById('startButtonid').textContent = 'Play/Pause'; 
// document.getElementById('startButtonid').onclick = function() { 

//     if(stop == true){ 
//     stop = false; 
//     slider(); 

// document.getElementById('sliderDivid').style.cssText = 'display: flex;'; }

//     else{ 
//     stop = true; } }; 

// const StopButtonConstanta = document.createElement('button'); 
// StopButtonConstanta.id = 'stopButtonid'; 
// ClassDivMain.appendChild(StopButtonConstanta); 
// StopButtonConstanta.style.cssText = 'margin: 20px; padding: 20px'; 
// document.getElementById('stopButtonid').textContent = 'Delete'; 
// document.getElementById('stopButtonid').onclick = function() { 
// stop = true; 
// document.getElementById('sliderDivid').style.cssText = 'display: none'; }; 

// const slider = () => { 

//     if(i == images.length) 
//     i = 0; 
//     stop = false; 

// setTimeout(() => { 
//     if(!stop){ 

// constImg.src = way(images[i]); 
// document.getElementById('sliderDivid').append(constImg); 
// sliderDivid.append(RightPointerConstanta); 
// sliderDivid.prepend(LeftPointerConstanta); 
// document.getElementById('LeftPointerConstantaid').textContent = '🡄'; 
// document.getElementById('RightPointerConstantaid').textContent = '🡆'; 

// i++; slider(); 

// } }, 800); 
// };

// 7. зробити запит на url і додати кожному з масиву any (key): ////////////////////////////////////////////////////////////////

// const requestURL = "https://jsonplaceholder.typicode.com/users";

// function sendRequest(method, url){
// return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url)
//     xhr.responseType = 'json'
//     xhr.onload = () => {
//             if(xhr.status >= 400){
//                 reject(xhr.response)
//          } else {
//         resolve(xhr.response)
//             }
//         }
//         xhr.onerror = () => reject(xhr.response)
//         xhr.send()
// })
// }

// async function addKeyToArray(array){
//     await array.map(element => element.key =  'any')
//     return array
// }

// sendRequest('GET', requestURL)
// .then(async data => await addKeyToArray(data))
// .then(data => console.log(data))
// .catch(err => console.log(err))

// 8. Курсова робота: зробити функцію, яка буде вираховувати вартість машин спираючись на рік її виготовлення: //////////////////////////////////////////////

// class Auto {
//   constructor(obj) {
//       this.wheels = 4;
//       this.transmission = obj.transmission;
//       this.wd = obj.wd;
//       this.yearOFissue = obj.yearOFissue;
//       this.countPrise();
//   }
//   countPrise(prise){

//   if(this.yearOFissue > 2007){
//       for(let i = this.yearOFissue; i > 2007; i--){
      
//           prise += (prise / 100) * 5;
      
//           if(i == 2007 + 1) return `${Math.floor(prise)},00$`;  
//       }
//   }
      
//   else if(this.yearOFissue < 2007){
//       for(let i = this.yearOFissue; i < 2007; i++){
      
//           prise -= (prise / 100) * 5;
                              
      
//           if(i == 2007 - 1) return `${Math.floor(prise)},00$`;
//       }
//   }
                  
//   else if(this.yearOFissue == 2007){
//      return `${prise},00$`;  
//      }
//      }
//   }

// //////////////

// class BMW extends Auto {
//   constructor(obj) {
//       super(obj);
//       this.brand = "BMW";
//   }

// }

// class Audi extends Auto {
//   constructor(obj) {
//       super(obj);        
//       this.brand = "Audi";
//   }

// }


// class X6 extends BMW {
//   constructor(obj) {
//       super(obj);
//       this.model = "X6";
//       this.mileage = "120 thousand km.";
//       this.price = "80 999,00$";
//       this.price = this.countPrise(+'80 999,00$'.substr(0, 6).replace(/ /g,''));
//       this.color = "white";

//   }
// }

// class M3 extends BMW {
//   constructor(obj) {
//       super(obj);
//       this.model = "M3";
//       this.mileage = "90 thousand km.";
//       this.price = "50 800,00$";
//       this.price = this.countPrise(+'50 800,00$'.substr(0, 6).replace(/ /g,''));
//       this.color = "black";
//   }

// }
// class Q7 extends Audi {
//   constructor(obj) {
//       super(obj);
//       this.model = "Q7";
//       this.mileage = "170 thousand km.";
//       this.price = "62 619,00$";
//       this.price = this.countPrise(+'62 619,00$'.substr(0, 6).replace(/ /g,''));
//       this.color = "gray";
//   }

// }
// class TT extends Audi {
//   constructor(obj) {
//       super(obj);
//       this.model = "TT";
//       this.mileage = "104 thousand km.";
//       this.price = "20 630,00$";
//       this.price = this.countPrise(+'20 630,00$'.substr(0, 6).replace(/ /g,''));
//       this.color = "blue";

//   }
 
// }

// ////////////

// const shop = [new X6({transmission: 'auto', wd: 'xwd', yearOFissue: 1999}), 
//               new M3({transmission: 'auto', wd: 'rear', yearOFissue: 2005}), 
//               new Q7({transmission: 'auto', wd: '4x4', yearOFissue: 2019}), 
//               new TT({transmission: 'mechanic',wd: 'front', yearOFissue: 2022})];

// console.log(shop);






