class GamesTrack extends HTMLElement {
    
    connectedCallback() {

        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', "games-track/games-track.html", false);
        httpRequest.send();
        this.attachShadow({ mode: 'open' }).innerHTML = httpRequest.responseText;


    }

}

customElements.define('games-track', GamesTrack);
    