class AboutMe extends HTMLElement {

    connectedCallback() {

        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', "about-me/about-me.html", false);
        httpRequest.send();
        this.attachShadow({mode:'open'}).innerHTML  = httpRequest.responseText;


    }

}

customElements.define('about-me', AboutMe);
