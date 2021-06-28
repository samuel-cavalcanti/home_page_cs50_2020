class IosTrack extends HTMLElement {
    
    connectedCallback() {

        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', "ios-track/ios-track.html", false);
        httpRequest.send();
        this.attachShadow({ mode: 'open' }).innerHTML = httpRequest.responseText;


    }

}

customElements.define('ios-track', IosTrack);
    