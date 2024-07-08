import {backgrounds} from "../constants/index.js";
export function findBackgroundKey({age, gender, caste}) {
    const genderKey = gender.charAt(0).toLowerCase(); // 'm' for male, 'f' for female
    if(age<30 && caste==="SC/ST") return `back_1_${genderKey}`
    else if(age>30 && caste==="SC/ST") return `back_2_${genderKey}`
    else if(age<30 && caste!="SC/ST") return `back_3_${genderKey}`
    else if(age>30 && caste!="SC/ST") return `back_4_${genderKey}`
    return null;
  }