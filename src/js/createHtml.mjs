import { getPodcasts } from "./api.mjs";

const podCastContainer = document.querySelector('#podList');

export async function createHtml() {
    const podCasts = await getPodcasts(); 

    podCasts.programs.forEach((podcast) => {
        const innerArticle = createInnerArticle(); 

        createImg(podcast, innerArticle); 
        const textDiv = createTextDiv(innerArticle); 

        createHeader(podcast, textDiv); 
        createDescription(podcast, textDiv); 
        createLink(podcast, textDiv); 
    });
}

function createInnerArticle() {
    const innerArticle = document.createElement('article');
    innerArticle.setAttribute('class', 'article');
    podCastContainer.appendChild(innerArticle);
    return innerArticle;
}


function createTextDiv(innerArticle) {
    const textDiv = document.createElement('div');
    textDiv.setAttribute('class', 'text-div');
    innerArticle.appendChild(textDiv); 
    return textDiv;
}


function createImg(podcast, innerArticle) {
    const imgPlacement = document.createElement('img');
    imgPlacement.setAttribute('src', podcast.socialimage);
    imgPlacement.setAttribute('width', '100');
    imgPlacement.setAttribute('height', '100');
    innerArticle.appendChild(imgPlacement);
}

function createHeader(podcast, textDiv) {
    const headerPlacement = document.createElement('h2');
    const programName = document.createTextNode(podcast.name); 
    headerPlacement.appendChild(programName);
    textDiv.appendChild(headerPlacement);
}


function createDescription(podcast, textDiv) {
    const descPlacement = document.createElement('p');
    const desc = document.createTextNode(podcast.description); 
    descPlacement.appendChild(desc);
    textDiv.appendChild(descPlacement);
}

function createLink(podcast, textDiv) {
    const linkPlacement = document.createElement('a');
    const linkText = document.createTextNode('Lyssna här');
    linkPlacement.setAttribute('href', podcast.programurl); 
    linkPlacement.appendChild(linkText);
    textDiv.appendChild(linkPlacement); 
}

export default createHtml;