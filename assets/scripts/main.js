//
// scroll event listener for top-bar
//

document.addEventListener('DOMContentLoaded', function() {
  const topBar = document.querySelector('.top-bar');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      topBar.classList.add('scrolled');
    } else {
      topBar.classList.remove('scrolled');
    }
  });
});


//
// title cursor effect
//

document.addEventListener('DOMContentLoaded', (event) => {
  const texts = [
    "je Československý kurz",
    "je pre skautov aj neskautov",
    "rozširuje obzory",
    "testuje hranice",
    "ide na dreň",
    "znamená prameň"
  ];

  const typedTextSpan = document.querySelector("#typed-text");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
      typedTextSpan.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextSpan.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      if (textIndex === texts.length - 1) {
        // If it's the last text, don't delete and stop the animation
        return;
      }
      isDeleting = true;
      setTimeout(type, 1500); // Pause before starting to delete
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex++;

      if (textIndex === texts.length - 1) {
        setTimeout(type, 2500); // Longer pause before typing last text
      } else {
        setTimeout(type, 500); // Normal pause before typing next text
      }
    } else {
      setTimeout(type, isDeleting ? 50 : 100); // Typing speed
    }
  }

  type();
});

document.addEventListener('DOMContentLoaded', (event) => {
  const texts = [
    "je Československý kurz",
    "je pre skautov aj neskautov",
    "rozširuje obzory",
    "testuje hranice",
    "ide na dreň"
  ];

  const typedLine1 = document.querySelector("#typed-line1");
  const typedLine2 = document.querySelector("#typed-line2");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isLastPhrase = false;
  let isDeletingFirstLine = false;

  function type() {
    if (isDeletingFirstLine) {
      const firstLineText = "FONS Slovensko";
      typedLine1.textContent = firstLineText.substring(0, charIndex);
      typedLine2.textContent = "";
      typedLine2.classList.remove('cursor', 'large-text');
      typedLine1.classList.add('cursor');

      if (charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeletingFirstLine = false;
        isLastPhrase = true;
        charIndex = 0;
        setTimeout(type, 500);
      }
      return;
    }

    let fullText = isLastPhrase ? "FONS znamená prameň" : texts[textIndex];

    if (isLastPhrase) {
      const words = fullText.split(' ');
      const lastWord = words.pop();
      typedLine1.textContent = words.join(' ').substring(0, charIndex);
      if (charIndex > words.join(' ').length) {
        typedLine2.textContent = lastWord.substring(0, charIndex - words.join(' ').length - 1);
        typedLine2.classList.add('large-text', 'cursor');
        typedLine1.classList.remove('cursor');
      } else {
        typedLine2.textContent = "";
        typedLine2.classList.remove('large-text', 'cursor');
        typedLine1.classList.add('cursor');
      }
    } else {
      typedLine1.textContent = "FONS Slovensko";
      typedLine2.textContent = fullText.substring(0, charIndex);
      typedLine1.classList.remove('cursor');
      typedLine2.classList.add('cursor');
      typedLine2.classList.remove('large-text');
    }

    if (!isDeleting) {
      charIndex++;
      if (charIndex > fullText.length) {
        if (isLastPhrase) {
          // Animation complete, don't delete the last phrase
          return;
        }
        isDeleting = true;
        // Longer delay before deleting the last phrase on the second line
        setTimeout(type, textIndex === texts.length - 1 ? 3000 : 1500);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        isDeleting = false;
        textIndex++;
        charIndex = 0;
        if (textIndex >= texts.length) {
          isDeletingFirstLine = true;
          charIndex = "FONS Slovensko".length;
        }
        setTimeout(type, 500);
        return;
      }
    }

    let delay;
    if (isLastPhrase) {
      delay = !isDeleting ? 150 : 50; // Slower typing for last phrase
    } else {
      delay = !isDeleting ? 100 : 50; // Original speeds for other phrases
    }
    setTimeout(type, delay);
  }

  type();
});



//
// QA admonition box
//

document.addEventListener('DOMContentLoaded', function() {
  const qaAdmonitions = document.querySelectorAll('[data-qa-admonition]');

  qaAdmonitions.forEach(admonition => {
    const question = admonition.querySelector('.question');

    question.addEventListener('click', () => {
      admonition.classList.toggle('active');
    });
  });
});


//
// Tim instructor item grid
//

document.addEventListener('DOMContentLoaded', (event) => {
  const instructorItems = document.querySelectorAll('.instructor-item');

  instructorItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('flipped');
    });
  });
});
