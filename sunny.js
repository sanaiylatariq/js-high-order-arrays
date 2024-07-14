// // // for of loops
// // let arr = [0,1,2,3,4,]

// // for (const sunny of arr) {
// //     console.log(sunny);
// // }
// // let greet = "sanaiyla hello"
// // for (const hello of greet) {
// //     console.log(`hey,${hello} kar rahi hay`);
// // }



// // let arrayobj = [{
// //     name1:"saaiula",
// //     id:3455,
// //     prof:((num1,num2) => num1*num2    
// // )(5,5)}]



// // for (const arob of arrayobj) {
// //     console.log(arob);
// // }
// // let sunny = "hello world"
// // for (const sun of sunny) {
// //     console.log(`from my side ${sun}`);
// // }





// const map = new Map()
// map.set(`IN`, "india")
// map.set(`PAK`, "Pakistan")
// map.set(`FR`,"France")
// map.set('UK',"United Kingdom" )
// map.set('SK',"South Korea" )
// // console.log(map);
// for (const [key,value] of map) {
//     // console.log(key, `:-`, value);
// }







// const map2 = new Map()
// map2.set('PK', "Paksitan")
// map2.set('IN', "India")
// map2.set('FR', "France")
// map2.set('KSA', "Kingdom Of Saudi Arabia")
// // console.log(map2);
// for (const [key,value] of map2) {
//     // console.log(key, `:-`, value);
// }


// // const sunny = new Map()
// // sunny.set('DR', "Dominian Republic")
// // sunny.set('NK', "North Korea")
// // sunny.set('USSR', "Soviet Korea")
// // // console.log(sunny);
// // for (const [key, value] of sunny) {
// //     // console.log(key, `:-`, value);
// // }
// // let myobj = "sqanaiyla" 
// // for (const sunn of myobj) {
// //     // console.log(sunn);
// }
   

// let arra = {naam:"sunny",
//     id:"6546",
//     price:"free"}
    
// // obj ko loop k andr dalny k lye for in loop use kren, array and string dal jty hen by using for of loop
// // object ki keys dkhne hon to forin loop m obj ka nam aur keys within array console m dalo
// for (const key in arra) {
// console.log(arra[key]);


// }



// let obj = {
//     naam:"sanaiyla",
//     id:"876,"
// }
// for (const key in obj) {
// console.log(obj[key]);

// }


// let arraey = [0,1,2,3,4,]
// for (const key of arraey) {
//     console.log(key);
// }


// //  yani array and string ko dalny k lye ap forof loop use krty ho while obj ko dalny k lye forin loop





// // for loop, for of loop, while loop, dowhile loop, for in loop
// for (let index = 0; index < 10; index++) {
//     if (index==5) {
//         console.log(`index 5 value detected`);
//         break
//     }
// console.log(`outer loop values are  ${index}`);    
// }
// /// example of for loop
// let dani = 10

// while (dani<20) {
//     console.log(`dani is lesss than 20 and values are ${dani}`);
// dani++
// }
// // while loop ex done

// do {
//     console.log(`do while loop understood`);
// dani++

// } while (dani===10);
// let array1 = [0,1,2,3,4,]
// for (const keys of array1) {
//     console.log(keys);
// }

// let sun = {
//     naam:"sunny",
//     id:"364",
// }

// for (const key in sun) {
// console.log(sun[key]);
// console.log(`${key} are for the file named ${sun[key]}`);
// }
// // forof and forin loops
// let array2 = ["js","python","java","c++","c",]
// for (const key in array2) {
// console.log(key);

//     }
// for (const key in array2) {
// console.log(array2[key]);



// }
// // for in loop sy b values nikalt ehen ap bs array ka nam with keys in braces likh do, same result as for of loops give



//     for (const hello of array2) {
//         console.log(hello);
//     }


// for in loop mn srf keys print hwen yani 0 to4 but forof loop mn values b print hwen
// const sunny = new Map()
// sunny.set('DR', "Dominian Republic")
// sunny.set('NK', "North Korea")
// sunny.set('USSR', "Soviet Korea")
// console.log(sunny);

// map pr forof and in loop nh lg rhi as map isnt itteratable


// for (const [key,value] in sunny) {
// console.log(key, `:-`, value);
// }



// most common used


// let basicar = ["js", "c++", "java", "c", "ruby"]
// basicar.forEach(
//     function(item){
// // console.log(item);
//     }
// )
// // array ka nam likh k jst ap dot foreach krk andr function daal lo nam naa ho uska first braces m kch  likh k jb curly mn w0 print hoga to saare values show karay ga 
// function one (item){
// // console.log(item);
// }
// basicar.forEach(
//     (val)=>{
//         // console.log(val);
//     }
// )
// let array4 = ["sanaiyla", "kati", "bundo", "bottle"]
// basicar.forEach(one)

// function two(val){
// // console.log(val);
// }
// // array4.forEach(two)
// // ap phly function bna kar usy array and foreach mn pass krskty ho 

// array4.forEach(
//  (item, index, basicar)=>{
// // console.log(index,item,basicar);
//  }   
// )
// // multiple chzen console log krwa skty within foreach loop



// let arobj = [
//     {
//         naam:"javascript",
//         level:"beginner"
//     },

//     {
//         naam:"java",
//         level:"beginner"
//     },
//     {
//         naam:"python",
//         level:"beginner"
//     },

// ]
// for (const key of arobj) {
//     // console.log(key);
// }
// arobj.forEach(
    // (item)=>{
    //     console.log(item.naam);
    //     console.log(item.level);
    



// dot dot lgao access karo using foreach loop on array that contains multiiple objects




let array5 = [
    {
        language:"java",
        leve:"hardwork"
    },

    {
        language:"javascript",
        leve:"hardwork"
    },


    {
        language:"python",
        leve:"hardwork"
    },





]
array5.forEach(
    (val)=>{
console.log(val.language);
console.log(val.leve);
    }
)
// array k andr obj ko acces krlea using for each and separate function bna kar foreach m interject b krdea