/*
Implement the Promise.reject() function as promiseReject.
Examples
try {
  promiseReject('Mayday!');
} catch (err) {
  console.log(err); // Mayday!
}
*/

export default function promiseReject(reason) {
    //Note: Check the promise syntax, it is taking a function as a parameter.
    //new Promise(()=>{});
    return new Promise((_, reject) => reject(reason));
    /*
    return new Promise(function (resolve, reject) {
        reject(reason);
    })
    */
}