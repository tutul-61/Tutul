

/* odd number code
let i=0;
let arr=[];
for(i=0;i<=100;i++){
    arr[i]=i;
    if(arr[i]%2!=0){
        console.log(arr[i])
    }
}*/

/*
sort in assendig order
let $numbers = [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10]
let sort_value=$numbers.sort((a,b)=>{
    return a-b;

});
console.log(sort_value)
*/

/*
array-reduce function
*/
/*let $numbers= [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10]
let sum=$numbers.reduce(add, 0); 
function add(accumulator, a) {
  return accumulator + a;
}
console.log(sum); 
*/
/*let $numbers= [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10]
let $arr=$numbers.filter((item,index)=>{
    return $numbers.indexOf(item)===index;
});
console.log($arr);
*/
/*let $numbers2 = [3, 4, -1, -5, 3, 10, -7, 10, 1, 9, 7, -9, 0]
let $negative_value=$numbers2.filter((item)=>{
    return item<0;

});
console.log($negative_value);
*/
/*let $numbers= [3, 4, 50, 5, 3, 10, 4, 6, 7, 8, 0, 8, 10, 1, 9, 32, 67, 9, 10]
let $divisable=$numbers.filter((item)=>{
    return item%10==0;
});
console.log($divisable);
*/


let list=[
    {"name": "I Phone 13 Pro", "price": 899, "brand": "iphone", "rating": {"average": "4.2", "user_count": 200}, "discount": "20%"},
    {"name": "I Phone 7", "price": 399, "brand": "iphone", "rating": {"average": "3.9", "user_count": 600}, "discount": "0%"},
    {"name": "I Phone sr", "price": 599, "brand": "iphone", "rating": {"average": "4.24", "user_count": 450}, "discount": "20%"},
    {"name": "I Phone 12", "price": 599, "brand": "iphone", "rating": {"average": "4.3", "user_count": 167}, "discount": "14%"},
    {"name": "Samsung Note 10", "price": 699, "brand": "samsung", "rating": {"average": "3.2", "user_count": 154}, "discount": "0%"},
    {"name": "Samsung Note 11", "price": 799, "brand": "samsung", "rating": {"average": "4.7", "user_count": 312}, "discount": "5%"},
    {"name": "A52s", "price": 499, "brand": "samsung", "rating": {"average": "4.6", "user_count": 180}, "discount": "6%"},
    {"name": "A52s 5G", "price": 599, "brand": "samsung", "rating": {"average": "4.4", "user_count": 61}, "discount": "0%"},
    {"name": "I Phone 14", "price": 800, "brand": "iphone", "rating": {"average": "4.8", "user_count": 20}, "discount": "0%"},
    {"name": "I Phone 14 pro max", "price": 1200, "brand": "iphone", "rating": {"average": "5", "user_count": 1}, "discount": "50%"},
    {"name": "Xiaomi Poco M5", "price": 267, "brand": "xiaomi", "rating": {"average": "2.3", "user_count": 5}, "discount": "10%"},
    {"name": "Xiaomi A1", "price": 199, "brand": "xiaomi", "rating": {"average": "2.1", "user_count": 9}, "discount": "23%"},
    {"name": "Vivo Y75s", "price": 256, "brand": "vivo", "rating": {"average": "4.1", "user_count": 43}, "discount": "16%"},
    {"name": "Vivo iQOO 9T", "price": 476, "brand": "vivo", "rating": {"average": "4.5", "user_count": 134}, "discount": "20%"}
  ]
  
 /* let value=list.sort((a,b)=>{
    return b.price-a.price;
  });
  console.log(value);
 */
/*let rate=list.sort((a,b)=>{
    return b.rating.average-a.rating.average;
})
console.log(rate);
*/
/*let list2=list.map(product => {
    return {...product, ...{discounted_price: (((100-parseInt(product.discount))*(product.price))/100).toFixed(2)}};
})

let heigest_discount=list2.sort((x,y)=>{
    return y.discounted_price-x.discounted_price;
})
console.log(heigest_discount);
*/