const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "https://majestycoffee.com/cdn/shop/articles/americano_misto.jpg?v=1684064972",
  "https://t4.ftcdn.net/jpg/01/94/82/87/360_F_194828703_vuNjz8Otb66VfI4rQyg9tBUPuGAugsUR.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg",
  "https://i.dailymail.co.uk/1s/2020/01/22/12/23723766-0-image-a-18_1579697765141.jpg",
  "https://126578650.cdn6.editmysite.com/uploads/1/2/6/5/126578650/s513258147308036544_p4_i1_w2048.jpeg",
  "https://savoredsips.com/wp-content/uploads/2020/11/irish-coffee-w1-735x490.jpg",
  "https://blackturtlecoffee.com/cdn/shop/articles/10-Of-The-Most-AMAZING-Cortado-Recipes-On-The-Web.jpg?v=1672851054",
  "https://cdn.foodandwineespanol.com/2022/08/cafe-turco-destacada-.jpg",
  "https://static.toiimg.com/thumb/86699095.cms?width=1200&height=736"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});