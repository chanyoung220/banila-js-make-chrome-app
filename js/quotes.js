const quotes = [
  {
    quote: "내일은 우리가 어제로부터 무엇인가 배웠기를 바란다.",
    author: "John Wayne",
  },
  {
    quote:
      "당신이 어떤 일을 해낼 수 있는지 누군가가 물어보면 대답해라. '물론이죠!' 그 다음 어떻게 그 일을 해낼 수 있을지 부지런히 고민하라.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "20대에는 의지, 30대에는 기지, 40대에는 판단이 지배한다.",
    author: "Benjamin Franklin",
  },
  {
    quote: "인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다.",
    author: "Charlie Chaplin",
  },
  {
    quote: "때로는 살아있는 것조차도 용기가 될 때가 있다.",
    author: "Seneca",
  },
  {
    quote: "친구는 모든 것을 나눈다.",
    author: "Plato",
  },
  {
    quote: "당신은 지체할 수도 있지만 시간은 그러하지 않을 것이다.",
    author: "Benjamin Franklin",
  },
  {
    quote: "나는 때를 놓쳤고, 그래서 지금은 시간이 나를 낭비하고 있는 거지.",
    author: "William Shakespeare",
  },
  {
    quote: "시간은 너무 없고 할 일도 너무 없다.",
    author: "Oscar Levant",
  },
  {
    quote: "과거를 기억 못하는 이들은 과거를 반복하기 마련이다.",
    author: "George Santayana",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
