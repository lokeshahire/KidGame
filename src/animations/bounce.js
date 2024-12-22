const Bounce = {
  apply: (element) => {
    if (!element) return;

    element.classList.add("bounce");

    element.addEventListener(
      "animationend",
      () => {
        element.classList.remove("bounce");
      },
      { once: true }
    );
  },
};

export default Bounce;
