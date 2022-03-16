window.addEventListener('load', function () {
  const faq = document.querySelector('.faq');

  faq.addEventListener('click', function (e) {
    if (e.target.classList.contains('ask')) {
      toogleItem(e.target);
    }
  });

  function toogleItem(ask) {
    const answer = ask.parentNode.querySelector('.answer');
    const heightBefore = answer.offsetHeight;
    answer.classList.toggle('open');
    const heightAfter = answer.offsetHeight;

    if (answer.classList.contains('open')) {
      answer.animate(
        [
          { opacity: 0, transform: 'translateX(-100px)', height: 0 },
          { opacity: 1, transform: 'translateX(0)', height: heightAfter },
        ],
        { duration: 500 }
      );
    } else {
      answer.animate(
        [
          { opacity: 1, transform: 'translateX(0)', height: heightBefore },
          { opacity: 0, transform: 'translateX(100px)', height: 0 },
        ],
        { duration: 500 }
      );
    }
  }
});
