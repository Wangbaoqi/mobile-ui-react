
let BASE_URL = 'http://127.0.0.1:3000';


if(process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://127.0.0.1:3000'
}


export { BASE_URL }