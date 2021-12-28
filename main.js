{
  const scoreElement = document.querySelector(".js-score");

  const showResult = result => {
    scoreElement.innerText = result.toFixed(3);
  };
  const countResult = (currency, course, result) => {
    result = currency * course;
    showResult(result);
    scoreElement.classList.add("form__score--color");
  };

  const onClickCount = e => {
    e.preventDefault();
    const currencyElement = document.querySelector(".form__currency");
    const courseElement = document.querySelector(".form__course");
    const currency = currencyElement.value;
    const course = courseElement.value;
    const result = countResult(currency, course);
    countResult(currency, course, result);
  };

  const onClickClear = e => {
    e.preventDefault();
    scoreElement.innerText = "0.000";
    scoreElement.classList.remove("form__score--color");
  };
  const init = () => {
    const buttonCountElement = document.querySelector(".js-countButton");
    const buttonClearElement = document.querySelector(".js-clearButton");
    buttonCountElement.addEventListener("click", onClickCount);
    buttonClearElement.addEventListener("click", onClickClear);
  };
  init();

  //advanced option:

  const CourseButton = document.querySelector(".addition__button");
  const euroCourseClickHandler = async () => {
    const CourseParagraph = document.querySelector(".addition__paragraph");
    const response = await fetch(
      "https://api.nbp.pl/api/exchangerates/rates/a/usd/",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    const euroCourse = data.rates[0].mid;

    CourseParagraph.innerText = `Aktualny kurs Dolara to: ${euroCourse.toFixed(
      3
    )}`;
  };

  CourseButton.addEventListener("click", euroCourseClickHandler);
}
