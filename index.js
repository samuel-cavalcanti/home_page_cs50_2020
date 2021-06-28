const navBar = document.querySelector('nav-bar');
navBar.addEventListener('select', selectTrack);


let tracks = {
    android: 'Android',
    games: 'Games',
    ios: 'IOS',
    web: 'Web',
    aboutMe: ''
}
let currentTrack = tracks.aboutMe;

let tracksComponent = {};

tracksComponent[tracks.android] = () => new AndroidTrack();
tracksComponent[tracks.games] = () => new GamesTrack();
tracksComponent[tracks.ios] = () => new IosTrack();
tracksComponent[tracks.web] = () => new WebTrack();
tracksComponent[tracks.aboutMe] = () => undefined




function selectTrack() {
    console.log(navBar.select);
    console.log(currentTrack);

    if (navBar.select === currentTrack)
        return;

    removeCurrentTrack(currentTrack);

    addNewTrack(navBar.select);
}

function removeCurrentTrack(currentTrack) {
    const webComponentName = currentTrack.toLowerCase() + '-track';
    const webComponent = document.querySelector(webComponentName);

    if (!webComponent)
        return

    document.body.removeChild(webComponent);

}

function addNewTrack(trackName) {

    let webComponent = tracksComponent[trackName]();

    if (!webComponent)
        return;

    document.body.appendChild(webComponent);

    currentTrack = trackName;

}






