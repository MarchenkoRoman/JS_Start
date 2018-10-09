// TODO: complete this object/class
var helper = new PaginationHelper(['a','b','c','d','e','f','g'], 4);
// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.elements = collection;
    this.elementsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
    return this.elements.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
    return Math.trunc(this.elements.length / this.elementsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    let items = this.elementsPerPage;
    let itemsNumber = this.elements.length;
    if (Math.ceil(itemsNumber / items) <= pageIndex || pageIndex < 0) return -1;
    return ((pageIndex + 1) * items < itemsNumber) ? items : itemsNumber % items;

    }

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
    if(itemIndex < 0 || this.elements.length === 0 || itemIndex > this.elements.length) return -1;
    if (itemIndex === 0 || itemIndex / this.elementsPerPage === 1) return 0;
    return return Math.floor((itemIndex / this.elementsPerPage));
}
console.log(helper.pageItemCount(1));


// // function some(arr, handler) {
// //
// //     for ( let i = 0; i < arr.length; i++) {
// //         if (handler(arr[i])) return true;
// //     }
// //
// //     return false;
// // }
// //
// // let customSome = some([1, 2, 3, 4], elements => typeof elements === 'string');
// // // let customSome = some([1, 2, 3, 4], function (elements) {
// // //     return typeof elements === 'string';
// // // });
// //
// // console.log(customSome);
//
// /*
// function multyply() {
//     let resault = 1;
//     if ( !arguments.length ) return 0;
//     for (let i = 0; i < arguments.length; i++) {
//         resault *= arguments[i];
//     }
//     return resault;
// }
//
// console.log(multyply());
// console.log(multyply(1,2,3,4,5,6));
// console.log(multyply(23,34));
//
// function factorial(n) {
//     if ( n != 1) {
//         return n * factorial(n - 1);
//     } else {
//         return n;
//     }
// }
// console.log (factorial(10));
//
// let newStr = '';
// function reverseString(str) {
//     for ( let i = str.length -1; i < -1; i --) {
//         newStr += str.length[i];
//         console.log(newStr);
//     }
//     return newStr;
// }
// console.log(reverseString('Привет АНдрей'));*/
// //let isma = +prompt('')
// /*
// let n = +prompt('Input some integer number', 0);
// var countBits = function(n) {
//     n = n.toString(2) + '';
//     let res = 0;
//     for (let i = 0; i < n.length; i++) {
//         if (n[i] == 1) res++;
//     };
//     return res;
// };
// console.log(countBits(n));*/
//
// function friend(friends){
//     let arr = [];
//     for (let i = 0; i < friends.length; i++) {
//         if (friends[i].length == 4) arr.push(friends[i]);
//     };
//     return arr;
// };
// console.log(friend(["Ryan", "Kieran", "Mark"]));
