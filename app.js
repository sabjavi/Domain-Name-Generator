let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = ["com", "net", "us"];

let domainNames = [];
let i = 0;
pronoun.forEach((elementPronoun, indexPronoun) => {
  adj.forEach((elementAdj, indexAdj) => {
    noun.forEach((elementNoun, indexNoun) => {
      domain.forEach((elementDomain, indexDomain) => {
        domainNames[i] =
          elementPronoun + elementAdj + elementNoun +"."+ elementDomain;

        i++;
      });
    });
  });
});

console.log(domainNames);
