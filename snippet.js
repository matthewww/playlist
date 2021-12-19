var urls = [];
var els = document.querySelectorAll("a[href^='/p/']");
els.forEach((p)=> {urls.push(p.href)})

-----------------

fetch('https://www.instagram.com/bfreebfree/')
.then(res => res.read())
    .then((out) => {
        console.log('Output: ', out.assets);
}).catch(err => console.error(err));

-----------------
// https://www.instagram.com/p/CXmqjUMF_tk/

var el = document.querySelector("a[href^='/reels/']");

var artist = el.firstChild.firstChild.firstChild;
var track = el.firstChild.firstChild.firstChild.nextSibling.nextSibling;

console.log(artist);
console.log(track);


-----------------
https://developer.spotify.com/console/post-playlists/
https://developer.spotify.com/console/post-playlist-tracks/
