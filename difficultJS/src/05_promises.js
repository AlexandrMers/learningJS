// Promises ->

// console.log('Request data...');
//
// setTimeout(() => {
//    console.log('Preparing data...');
//
//    const backendData = {
//        server: 'aws',
//        port: 2000,
//        status: 'working'
//    };
//
//    setTimeout(() => {
//        backendData.modified = true;
//        console.log('Data received', backendData);
//    }, 2000)
//
// }, 2000);

// *******************************************************************************************************
// Делаем то же самое с помощью промисов -->
// console.log('Request data...');
// const prms = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Preparing data...');
//
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         };
//
//         resolve(backendData);
//
//     }, 2000);
// });
//
// prms.then(data => {
//     console.log('promise1 resolved ', data);
//
//     return new Promise(resolve => {
//         setTimeout(() => {
//             data.modified = true;
//             resolve(data);
//         }, 2000);
//     });
// })
//     .then(clientData => {
//     console.log('Data received -> ', clientData);
//
// })
//     .catch(err => console.error(err))
//     .finally(() => console.log('finally'));


// *******************************************************************************************************
const sleep = ms => {
    return new Promise(resolve => {
            setTimeout(() => resolve(), ms);
        }
    );
};

// sleep(2000).then(() => console.log('after 2 seconds'));
// sleep(3000).then(() => console.log('after 3 seconds'));

Promise.all([sleep(2000), sleep(4000)]) // Метод all возвращает промис и выполнится тогда, когда завершатся все промисы.
        .then(() => console.log('All promises completed'));

Promise.race([sleep(2000), sleep(4000)])  // Метод race возвращает промис и выполнится тогда, когда выполнится любой первый промис из переданных промисов.
    .then(() => console.log('first promise completed'));