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
  render();
};

const render=()=>{
  let newsHTML = "";
  newsHTML = news.map((news) =>{
    return `<div class="row news">
    <div class="col-lg-4">
      <img
        class="news-img-size"
        src="https://static01.nyt.com/images/2022/10/07/books/00MATTHEWPERRY1/00MATTHEWPERRY1-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
      />
    </div>
    <div class="col-lg-8">
      <h2 class="news-title">Title</h2>
      <p>Contents</p>
      <div>SBS * 2022-10-24</div>
    </div>
  </div>`
  });
  console.log(newsHTML)
  document.getElementById("news-board").innerHTML = newsHTML;
}
getLastestNews();


let menu = document.getElementById("menu-bar");
function openMenu() {
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

let closeMenu = document.querySelector('.menu-icon');
closeMenu.addEventListener("mouseout",()=>{
  menu.style.display = "none";
});

let searchBox = document.getElementById("searchBox")
function openSearch(){
  if (searchBox.style.display == "none") {
    searchBox.style.display = "block";
  } else {
    searchBox.style.display = "none";
  }
}