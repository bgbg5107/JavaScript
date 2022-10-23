let news = [];
const getLastestNews = async () => {
  let url = new URL(
    `https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=business`
  );
  let header = new Headers({
    "x-api-key": "Jb7jvFyJWGGQ3B9qABPJNZ8Y3Ty8_-vP3SVL2Bi7gt4",
  });
  let response = await fetch(url, { headers: header });
  let data = await response.json();
  news = data.articles;
  console.log(news);
};
getLastestNews();

function openMenu() {
  let menu = document.getElementById("menu-bar");
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
