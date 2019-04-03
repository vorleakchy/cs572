// ES6
String.prototype.filterWords = function(badWords) {
  const DELIMITER = ' ';
  let words = this.split(DELIMITER);

  words = words.map(word =>  {
    badWord = badWords.find(bad => word.indexOf(bad) >= 0);
    return badWord ? word.replace(badWord, '***') : word;
  });

  return words.join(DELIMITER);
};

console.log("This house is nice!".filterWords(['house', 'nice']));


// Promise
String.prototype.filterWords2 = function(badWords) {
  return new Promise((resolve, reject) => {
    const result = this.filterWords(badWords);

    resolve(result);
    reject('Error');
  })
};

"This house is nice!".filterWords2(['house', 'nice'])
  .then(result => console.log(result))
  .catch(error => console.log(error));


// Async & Await
async function filterWords3(text, badWords) {
  try {
    const result = await text.filterWords(badWords);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

filterWords3("This house is nice!", ['house', 'nice']);


// Observable
const { Observable } = rxjs;

const obs$ = Observable.create(function(observer) {
    const result = "This house is nice!".filterWords(['house', 'nice']);
    observer.next(result);
});

const subscription = obs$.subscribe(
    function (result) { console.log(result); },
    function (err)    { console.error(err); },
    function ()       { console.info(`Done`); }
);