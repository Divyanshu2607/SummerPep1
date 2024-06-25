module.export=function add(...args){
 let sum=0;
 args.forEach((el)=>{
    sum+=el;
 });
 return sum;
}

module.export= function multiply(...args){
    let sum=0;
    args.forEach((el)=>{
       sum+=el;
    });
    return sum;
   }
console.log("this is it");
// module.exports={
//     add,
//     multiply,
// };

//  a js exports many things
//  a js file exports only one thing

// exports.function add(...args){
//     let sum=0;
//     args.forEach((el)=>{
//        sum+=el;
//     });
//     return sum;
//    }
   
//    function multiply(...args){
//        let sum=0;
//        args.forEach((el)=>{
//           sum+=el;
//        });
//        return sum;
//       }