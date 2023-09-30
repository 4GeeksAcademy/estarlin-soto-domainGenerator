/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const domainGenerator = (arr1, arr2, arr3) => {
    let domains = [".com", ".net", ".us"];

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        for (let x = 0; x < arr3.length; x++) {
          let domainHack = `${arr1[i]}${arr2[j]}${arr3[x]}`;

          console.log(
            `${domainHack.slice(0, -2)}.${domainHack[domainHack.length - 2]}${
              domainHack[domainHack.length - 1]
            }`
          );
          console.log(`${arr1[i]}${arr2[j]}${arr3[x]}${domains[0]}`);
          console.log(`${arr1[i]}${arr2[j]}${arr3[x]}${domains[1]}`);
          console.log(`${arr1[i]}${arr2[j]}${arr3[x]}${domains[2]}`);
        }
      }
    }
  };

  domainGenerator(pronoun, adj, noun);
};
