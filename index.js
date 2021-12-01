const select = document.getElementById("lang");
const nextQuote = document.getElementById("next");

const random = async (lang) => {
  const quoteDiv = document.getElementById("quote");

  const url = await fetch(
    `https://uselessfacts.jsph.pl/random.json?language=${lang}`
  );
  const res = await url.json();

  //   console.log(res);

  quoteDiv.innerText = res.text;
};

select.onchange = () => {
  // console.log(select.value);
  random(select.value);
};

nextQuote.onclick = () => {
  random(select.value);
};

random(select.value);
