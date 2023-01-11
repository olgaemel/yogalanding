// const getData = (url) =>
// new Promise((resolve, reject) =>
// fetch(url)
// .then(response => response(json))
// .then(json => resolve(json))
// .catch(error => reject(error))
// )

// getData ('https://jsonplaceholder.typicode.com/posts')
// .then(data => console.log(data))
// .catch(error => console.log(error));


const getData = (url) =>
new Promise((response, reject) =>
fetch(url)
.then (response => response(json))
.then (json => resolve(json))
.catch(error => reject(error))
)

getData('https://jsonplaceholder.typicode.com/posts')
.then(data => console.log(data))
.catch(error => console.log(error));



