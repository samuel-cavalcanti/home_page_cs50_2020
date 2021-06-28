class AndroidTrack extends HTMLElement {
    
    connectedCallback() {

        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', "android-track/android-track.html", false);
        httpRequest.send();
        this.attachShadow({ mode: 'open' }).innerHTML = httpRequest.responseText;


    }

}

customElements.define('android-track', AndroidTrack);
    