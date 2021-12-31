{
  const changeClass = (item, classToBeChanged, variant) => {
    item.classList[variant](classToBeChanged);
  };

  const showResult = (result, scoreElement) => {
    scoreElement.innerText = result.toFixed(3);
  };

  const countResult = (amount, course, scoreElement) => {
    result = amount * course;
    showResult(result, scoreElement);
    changeClass(scoreElement, "form__score--color", "add");
  };

  const onClickCount = (e, scoreElement) => {
    e.preventDefault();
    const amountElement = document.querySelector(".form__amount");
    const courseElement = document.querySelector(".form__course");
    const amount = amountElement.value;
    const course = courseElement.value;
    countResult(amount, course, scoreElement);
  };

  const onClickClear = (e, scoreElement) => {
    e.preventDefault();
    scoreElement.innerText = "0.000";
    changeClass(scoreElement, "form__score--color", "remove");
  };

  const init = () => {
    const scoreElement = document.querySelector(".js-score");

    const buttonCountElement = document.querySelector(".js-countButton");
    const buttonClearElement = document.querySelector(".js-clearButton");
    buttonCountElement.addEventListener("click", e =>
      onClickCount(e, scoreElement)
    );
    buttonClearElement.addEventListener("click", e =>
      onClickClear(e, scoreElement)
    );
  };
  init();

  //advanced option:

  const dollarCourseClickHandler = async e => {
    e.preventDefault();
    const courseParagraph = document.querySelector(".addition__paragraph");
    const response = await fetch(
      "https://api.nbp.pl/api/exchangerates/rates/a/usd/",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    const dollarCourse = data.rates[0].mid;

    courseParagraph.innerText = `Aktualny kurs Dolara to: ${dollarCourse.toFixed(
      3
    )}`;
  };
  const USDfetch = () => {
    const courseButton = document.querySelector(".addition__button");
    courseButton.addEventListener("click", dollarCourseClickHandler);
  };
  USDfetch();
}
