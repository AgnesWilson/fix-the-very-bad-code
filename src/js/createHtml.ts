import { getPodcasts } from './getPodcasts.ts';
import log from './helpers.ts';

const podCastContainer = document.querySelector('#podList') as HTMLElement;

interface IPodcast {
  name: string;
  description: string;
  programurl: string;
  socialimage: string;
}

export async function createHtml() {
  const podCasts = await getPodcasts();
  log(podCasts);

  podCasts.programs.forEach((podcast :IPodcast): void => {
    const innerArticle = createInnerArticle();

    createImg(podcast, innerArticle);
    const textDiv = createTextDiv(innerArticle);

    createHeader(podcast, textDiv);
    createDescription(podcast, textDiv);
    createLink(podcast, textDiv);
  });
}

function createInnerArticle(): HTMLElement {
  const innerArticle = document.createElement('article');
  innerArticle.setAttribute('class', 'article');
  podCastContainer.appendChild(innerArticle);
  return innerArticle;
}


function createTextDiv(innerArticle: HTMLElement): HTMLElement {
  const textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'text-div');
  innerArticle.appendChild(textDiv);
  return textDiv;
}


function createImg(podcast: IPodcast, innerArticle: HTMLElement): void {
  const imgPlacement = document.createElement('img');
  imgPlacement.setAttribute('src', podcast.socialimage);
  imgPlacement.setAttribute('width', '100');
  imgPlacement.setAttribute('height', '100');
  imgPlacement.setAttribute('alt', `Bild för podcast: ${podcast.name}`);
  innerArticle.appendChild(imgPlacement);
}

function createHeader(podcast: IPodcast, textDiv: HTMLElement): void {
  const headerPlacement = document.createElement('h2');
  const programName = document.createTextNode(podcast.name);
  headerPlacement.appendChild(programName);
  textDiv.appendChild(headerPlacement);
}


function createDescription(podcast: IPodcast, textDiv: HTMLElement): void {
  const descPlacement = document.createElement('p');
  const desc = document.createTextNode(podcast.description);
  descPlacement.appendChild(desc);
  textDiv.appendChild(descPlacement);
}

function createLink(podcast: IPodcast, textDiv: HTMLElement): void {
  const linkPlacement = document.createElement('a');
  const linkText = document.createTextNode('Lyssna här');
  linkPlacement.setAttribute('href', podcast.programurl);
  linkPlacement.appendChild(linkText);
  textDiv.appendChild(linkPlacement);
}

export default createHtml;
