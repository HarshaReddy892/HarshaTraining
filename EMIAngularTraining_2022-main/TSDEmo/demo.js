// function Demo1()
// {
//     setTimeout(()=>{
//         console.log("Demo Function Executed");
//     },5000)
// }
// function Demo2()
// {
//     console.log("Demo2 function executed!!");
// }
// function Demo1(callback)
// {
//     setTimeout(()=>{
//                console.log("Demo Function Executed");
//                callback();
//              },5000)
// }
// solution to PRomise Error=> config ts.config=> tsc --init
// change lib=>es2016
//install=>npm install @types/node
function Demo2(callback) {
    console.log("Demo2");
    callback();
}
function Demo3(callback) {
    setTimeout(function () {
        console.log("Demo3 Function");
        callback();
    }, 5000);
}
function Demo4() {
    console.log("Demo4");
}
// Demo1(()=>{
//     Demo2(()=>{
//         Demo3(()=>{
//             Demo4()
//         })
//     })
// })
function squareValues(a) {
    return new Promise(function (resolve, reject) {
        resolve(Math.pow(a, 2));
    });
}
squareValues(2).then(function (a) {
    squareValues(2).then(function (b) {
        squareValues(4).then(function (c) {
            squareValues(5).then(function (d) {
                var m = a + b + c + d;
                console.log(m);
            })["catch"](function (error) {
                console.log("Error");
            });
        });
    });
});