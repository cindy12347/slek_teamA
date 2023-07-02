import introJs from 'intro.js';

var intro = introJs().setOptions({
    hidePrev: false,
    hideNext: true,
    exitOnOverlayClick: false,
    exitOnEsc: false,
    steps: [
      {
        element: document.querySelector("#question"),
        intro: "This whole area does something."
      },
    ]
  }).oncomplete(() => document.cookie = "intro-complete=true");
  
 intro.start();
  
  
  
  if (document.cookie.split(";").indexOf("intro-complete=true") < 0)
    window.setTimeout(start, 1000);
  