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

function Demo2(callback)
{
    console.log("Demo2");
    callback();
}

function Demo3(callback)
{
    setTimeout(()=>{
        console.log("Demo3 Function")
        callback();
    },5000)
 
}

function Demo4()
{
    console.log("Demo4");
}

// Demo1(()=>{
//     Demo2(()=>{
//         Demo3(()=>{
//             Demo4()
//         })
//     })
// })

function squareValues(a:number)
{
    return new Promise<number>((resolve,reject)=>{
        resolve (a**2);
    })
}

squareValues(2).then((a)=>{
    squareValues(2).then((b)=>{
        squareValues(4).then((c)=>
        {
            squareValues(5).then((d)=>{
                var m=a+b+c+d;
                console.log(m);
            }).catch(error=>{
                console.log("Error")
            });
            
        })
    })
})

// asyc and await

async function addValue(z)
{
    let a = await squareValues(2);
    let b=await squareValues(3);
    let c=await squareValues(4);
      let d=a+b+c+z;
    console.log("Async and Await " +d);
}

addValue(12);
squareValues(20).then((sum)=>{
    console.log("sum "+sum);
})