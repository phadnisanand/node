
function doSomeAsyncOperation() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('some error');
        }, 1000);
    });

    return promise;

}

let prms = doSomeAsyncOperation();

prms.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log("Error: " + error);
});

// function doSomeAsyncOperation() {

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve('Async operation completed.')
//             reject('Some error occurred');
//         }, 1000);
//     });

//     return promise;
// }

// let promise = doSomeAsyncOperation();
// promise.then((data) => {
//     console.log("Data : " + data);
// }).catch((error) => {
//     console.log("Error : " +  error);
// });
