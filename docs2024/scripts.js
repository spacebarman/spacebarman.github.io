const links = [
    {"include":"links-main",  "expires": "2025-03-18 00:00:00", name:"single",    text:"New Single: Premonición", link:"https://open.spotify.com/track/5RLCIQ08XtC9VHpTdobFlh?si=91da2ebef84c4332", icon:""},
    {"include":"links-main",  "expires": "2025-02-05 00:00:00", name:"event",    text:"Vota for Spacebarman @ ThinkingMU", link:"https://registrothinkingmusicfestival.com/#:~:text=Spacebarman,Spacebarman", icon:""},
    {"include":"links-main",  "expires": "2025-01-12 00:00:00", name:"event",    text:"Spacebarman en MadCool Talent", link:"https://madcooltalent.com/gallery/986917/210162/730568507", icon:""},
    {"include":"links-main",  "expires": "2024-12-25 00:00:00", name:"single",    text:"New Single: La Sed", link:"https://open.spotify.com/track/74av74FhDBjOe5CeUTx970?si=66ff1f9b3e5d4d3b", icon:""},
    {"include":"links-main",  "expires": "2024-06-21 08:30:00", name:"event",    text:"Concierto: Los Leales + Spacebarman", link:"https://dice.fm/event/l8abbp-los-leales-arg-spacebarman-21st-jun-sala-taro-barcelona-tickets", icon:""},
    {"include":"links-social",  "expires": "no", name:"spotify",    text:"", link:"https://open.spotify.com/album/1NBr6aZbhbvWyyQJ3THhzP?si=a4uTPQ5oQjGoQdS2TyFzHw", icon:"logo-spotify-small.png"},
    {"include":"links-social",  "expires": "no", name:"instagram", text:"", link:"https://www.instagram.com/spacebarman", icon:"logo-instagram-small.png"},
    {"include":"links-social",  "expires": "no", name:"youtube",    text:"", link:"https://youtube.com/spacebarmanvideo", icon:"logo-youtube-small.png"},
    {"include":"links-main",  "expires": "no", name:"bandcamp",   text:"", link:"https://spacebarman.bandcamp.com/album/el-ansia", icon:"logo-bandcamp.png"},
    {"include":"links-main",  "expires": "no", name:"soundcloud", text:"", link:"https://soundcloud.com/spacebarman/sets/el-ansia", icon:"logo-soundcloud.png"},
    {"include":"links-main",  "expires": "no", name:"merch", text:"Merch", link:"https://www.stickermule.com/u/nevergetridofnoise", icon:""},
    {"include":"none", "expires": "no", name:"deezer", text:"", link:"https://www.deezer.com/en/artist/4246882", icon:"logo-deezer.png"},
    {"include":"none", "expires": "no", name:"amazon", text:"", link:"https://music.amazon.com/artists/B009VU5FNW/spacebarman", icon:"logo-amazon.png"},
    {"include":"none", "expires": "no", name:"applumusic", text:"", link:"https://music.apple.com/us/artist/spacebarman/525428256", icon:"logo-applemusic.png"},
    {"include":"links-main",  "expires": "no", name:"bio", text:"Bio", link:"bio/", icon:""},
    {"include":"links-main",  "expires": "no", name:"facebook", text:"Facebook", link:"https://www.facebook.com/spacebarman", icon:""},
    {"include":"links-main",  "expires": "no", name:"subscribe", text:"Subscribe to our mailing list", link:"https://spacebarman.us21.list-manage.com/subscribe?u=eebe2ae40abe6e1bfafe680d8&id=8652641ff4", icon:""}
];

window.onload = function() {
    for(var i=0; i<links.length; i++) {
        var container = document.querySelector('#' + links[i].include);
        var localTime = Date.now();
        console.log(container)
        if(links[i].expires !== "no" && container) {
            var expires = Date.parse(links[i].expires);
            console.log("expires: " + (expires - localTime));
            if(expires > localTime)
                addLink(links[i], container);
        } else if(container) {
            addLink(links[i], container);
        }
    }

};

function addLink(link, container) {
    if(link.include == container.id) {
        var linksContainer = container;
        var linkDiv = document.createElement('div');
        linkDiv.setAttribute('class', 'link-item');
        if(link.text != "")  {
            if(link.icon != "")
                linkDiv.innerHTML = "<span class='link-item-text-smaller'>" + link.text + "</span>" ;
            else
                linkDiv.innerHTML = "<span class='link-item-text'>" + link.text + "</span>" ;
        }
        if(link.icon != "") {
            linkDiv.innerHTML += '<img src="images/' + link.icon + '" alt="' + link.name + ' logo" class="service-logo">';
        }
        var linkElement = document.createElement('a');
        linkElement.setAttribute("service-link", link.name)
        linkElement.setAttribute('href', link.link);
        linkElement.setAttribute('target', '_blank');
        linkElement.setAttribute('class', 'link-item-link');

        linkElement.appendChild(linkDiv);
        linksContainer.appendChild(linkElement);
    }
}