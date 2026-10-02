'use strict';

(() => {
  const style = document.createElement('style');
  style.textContent = `
    :root {
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color-scheme: light dark;
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
    }

    main {
      width: min(90vw, 60rem);
      text-align: center;
    }

    h1 {
      margin: 0 0 0.5rem;
      font-size: clamp(2rem, 8vw, 5rem);
    }

    p {
      margin: 0;
      font-size: clamp(1rem, 3vw, 1.5rem);
    }
  `;

  document.head.append(style);

  const main = document.createElement('main');
  const heading = document.createElement('h1');
  const description = document.createElement('p');

  heading.textContent = 'Valimo Business';
  description.textContent = 'Open Source Software & Web Services';

  main.append(heading, description);
  document.body.append(main);
})();
