async function fun1() {
    return 123;
    // throw 'some error';
}

// console.log(fun1());

// fun1().then((data) => {
//     console.log(data);
// }).catch((err)=> {
//     console.log(err);
// });

async function caller() {
    try {
        let result = await fun1();
        console.log(result);
    } catch (e) {
        console.log(e);
    }
}

caller();

// async function caller() {
//     try {
//         let data = await fun1();
//         console.log("Data: ", data);
//     } catch (error) {
//         console.log("Error: ", error);
//     }
// }

// caller();
