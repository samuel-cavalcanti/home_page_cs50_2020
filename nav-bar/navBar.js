class NavBar extends HTMLElement {

    constructor() {
        super();
        this.select = '';




    }

    connectedCallback() {

        this.addInnerHTML();

        this.addListeners();
        // this.attachShadow({ mode: 'open' }).innerHTML = httpRequest.responseText



    }


    addInnerHTML() {
        let httpRequest = new XMLHttpRequest();
        httpRequest.open('GET', "nav-bar/nav-bar.html", false);
        httpRequest.send();

        this.innerHTML = httpRequest.responseText;

    }

    addListeners() {

        const anchors = this.querySelectorAll('.nav-link');
        const aboutMe = this.querySelector('.navbar-brand');

        for (const anchor of anchors) {
            anchor.addEventListener('click', this.onclick.bind(this, anchor));
        }


        aboutMe.addEventListener('click', this.onclick.bind(this, aboutMe))

        console.log(anchors);
    }


    onclick(anchor) {
        const href = anchor.href
        this.select = href.split('#')[1]
        console.log(this.select,this.select.length);
        this.dispatchEvent(new CustomEvent('select', { detail: this.select }));

    }


}

customElements.define('nav-bar', NavBar);
