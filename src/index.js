import getClasses from './getClasses';

console.log('repo is working');
getClasses();

const obj = {
  a: 'alpha',
  b: 'bravo'
}

const newObj = {
  ...obj,
  c: 'charlie'
}

console.log(newObj);