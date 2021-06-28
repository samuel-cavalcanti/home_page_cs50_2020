class WebTrack extends HTMLElement {
    
    connectedCallback() {

        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', "web-track/web-track.html", false);
        httpRequest.send();
        this.attachShadow({ mode: 'open' }).innerHTML = httpRequest.responseText;


    }

}

customElements.define('web-track', WebTrack);
    