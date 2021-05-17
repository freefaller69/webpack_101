import { wizard } from './wizard';
import { barbarian } from './barbarian';

function getClasses() {
  const bsclg = () => console.log("get classes has been called");
  console.log(bsclg());
  console.log(wizard);
  console.log(barbarian);
}

export default getClasses;