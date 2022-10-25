let searchButton = document.getElementById("search-button");
let searchInput = document.getElementById("search-input");
let menus = document.querySelectorAll(".menus button");
let menuBar = document.querySelectorAll(".menu button");

let news = [];
let url;
const getNews=async()=>{
  try{
    let header = new Headers({
      "x-api-key": "867414a301c248e983d699938ff890e7",
    });
    let response = await fetch(url, { headers: header });
    let data = await response.json();
    if(response.status == 200){
      news = data.articles;
      // console.log(news);
      render();
    }else
      throw new Error(data.message);
  }catch(error){
    console.log("잡힌 에러는", error.message);
    errorRender(error.message);
  }
}

const getLastestNews = async () => {
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=867414a301c248e983d699938ff890e7`
  );
  getNews();
};

menus.forEach(menu=>menu.addEventListener("click",(event)=>getNewByTopic(event)));
const getNewByTopic = async(event) => {
  let topic = event.target.textContent.toLowerCase();
  url = new URL(
    `https://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=867414a301c248e983d699938ff890e7`
  ); 
  getNews();
}

menuBar.forEach(menu=>menu.addEventListener("click",(event)=>getNewByTopic(event)));
  



const getNewsByKeyword = async()=>{
  let keyword = document.getElementById("search-input").value;
  url = new URL(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=867414a301c248e983d699938ff890e7`) 
  getNews();
}

searchInput.addEventListener("keypress", (event) =>{
  if (event.key === "Enter") {
    getNewsByKeyword();
    searchInput.value = "";
  }
});

const render=()=>{
  let newsHTML = "";
  newsHTML = news.map((item) =>{
    return `<a href="${item.url}" id="news-link"><div class="row news">
    <div class="col-lg-4 img-size">
      <img
        class="news-img-size"
        src="${item.urlToImage}" 
        onerror="this.src='https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png';"
      />
    </div>
    <div class="col-lg-8 contentBox">
      <h2 class="news-title">${item.title}</h2>
      <p class="news-contents">${item.content == null? "내용없음" : item.content}</p>
      <p class="news-update">${moment().startOf('minute').fromNow()}</p>
      <p class="news-time">${item.publishedAt}</p>
    </div>
  </div></a>`
  }).join('');
  // console.log(newsHTML)
  document.getElementById("news-board").innerHTML = newsHTML;
}

const errorRender = (message)=> {
  let errorHTML = `<div>${message}</div>`;
  document.getElementById("new-board").innerHTML = errorHTML;
}

searchButton.addEventListener("click",getNewsByKeyword);
getLastestNews();

/******************************************************************************************/
let menu = document.getElementById("menu-bar");
let closeMenu = document.querySelector('.menu-icon');
let searchBox = document.getElementById("searchBox");

const openMenu=()=>{
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

closeMenu.addEventListener("mouseout",()=>{
  menu.style.display = "none";
});

const openSearch=()=>{
  if (searchBox.style.display == "none") {
    searchBox.style.display = "block";
  } else {
    searchBox.style.display = "none";
  }
}


