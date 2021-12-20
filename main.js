let currencyElement = document.querySelector(".form__currency");
const courseElement = document.querySelector(".form__course");
const buttonCountElement = document.querySelector(".form__button--count");
const buttonClearElement = document.querySelector(".form__button--clear");

const scoreElement = document.querySelector(".form__score");

const CourseButton = document.querySelector(".addition__button");
const CourseParagraph = document.querySelector(".addition__paragraph");

buttonCountElement.addEventListener("click", e => {
  e.preventDefault();
  let currency = currencyElement.value;
  let course = courseElement.value;

  scoreElement.innerText = (currency * course).toFixed(3);
  scoreElement.classList.add("form__score--color");
});

buttonClearElement.addEventListener("click", e => {
  e.preventDefault();
  scoreElement.innerText = "0.000";
  scoreElement.classList.remove("form__score--color");
});

// const fn1 = () => {
//   fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=${authKeyCurrency}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       return data.data;
//     })

//     .then(
//       data =>
//         (testP.innerHTML = `<ul><li>AED = ${data["AED"]}</li> <li>USD = ${data["PLN"]}</li></ul>`)
//     )
//     .then(data => {
//       var result = Object.keys(data).map(key => [key, data[key]]);
//       console.log("result", result);
//       // for (let [key, value] of Object.entries(data)) {
//       //   testP.innerText = `${key}: ${value}`;
//       // }
//     })
//     .then(data => {
//       fooArray = Object.entries(data);
//       //   console.log(data);
//       fooArray.forEach(([key, value]) => {
//         testP.innerText = `${key}: ${value}`;
//         test3.innerText = `${key}: ${value}`;
//       });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// testBtn.addEventListener("click", fn1);

// const fn2 = () => {
//   fetch("http://api.nbp.pl/api/exchangerates/rates/A/EUR/", {
//     headers: {
//       Accept: "application/json",
//     },
//   })
//     .then(res => res.json())
//     .then(
//       data => (test3.innerHTML = `<ul><li>EUR = ${data.rates[0].mid}</li> `)
//     );
// };

const euroCourseClickHandler = async () => {
  const response = await fetch(
    "http://api.nbp.pl/api/exchangerates/rates/A/EUR/",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const data = await response.json();
  const euroCourse = data.rates[0].mid;

  CourseParagraph.innerText = `Aktualny kurs Euro to: ${euroCourse.toFixed(3)}`;
};

CourseButton.addEventListener("click", euroCourseClickHandler);
