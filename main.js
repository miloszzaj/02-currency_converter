{
  const changeClass = (item, classToBeChanged, variant) => {
    item.classList[variant](classToBeChanged);
  };

  const showResult = (result, scoreElement) => {
    scoreElement.innerText = result.toFixed(3);
  };

  const countResult = (currency, course, scoreElement) => {
    result = currency * course;
    showResult(result, scoreElement);
    changeClass(scoreElement, "form__score--color", "add");
  };

  const onClickCount = (e, scoreElement) => {
    e.preventDefault();
    const currencyElement = document.querySelector(".form__currency");
    const courseElement = document.querySelector(".form__course");
    const currency = currencyElement.value;
    const course = courseElement.value;
    countResult(currency, course, scoreElement);
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

  const courseButton = document.querySelector(".addition__button");

  const euroCourseClickHandler = async e => {
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
    const euroCourse = data.rates[0].mid;

    courseParagraph.innerText = `Aktualny kurs Dolara to: ${euroCourse.toFixed(
      3
    )}`;
  };

  courseButton.addEventListener("click", euroCourseClickHandler);
}
