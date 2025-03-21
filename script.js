function changeGradiantColor() {
    const color = document.getElementById('Color').value;
    document.querySelectorAll('h3').forEach(title => {
        title.style.backgroundImage = `linear-gradient(to right, ${color}, white)`;;
    });
}
document.getElementById('Magic').addEventListener('click', changeGradiantColor);

// API Key: 7335167e392d42969a6be2dcc25f2e7e

const API_URL = 'https://newsapi.org/v2/top-headlines?category=technology&apiKey=7335167e392d42969a6be2dcc25f2e7e';
const HTMLResponse = document.querySelector('#API');

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const articlesHTML = data.articles.map(article => {
            return `<li>
                <div class="row">
                    <div class="col-3">
                        <a href="${article.url}">
                            <img src="${article.urlToImage}" height="130">
                        </a>
                    </div>
                    <div class="col-9">
                        <p>${article.description}</p>
                    </div>
                </div>
                <div class="row">
                    <a href="${article.url}">${article.title}</a>
                </div>
            </li>`;
        }).join('');

        HTMLResponse.innerHTML = `<ul>${articlesHTML}</ul>`;
    })

const techNewsHeader = document.querySelector('#News h2');
techNewsHeader.style.cursor = 'pointer';
techNewsHeader.addEventListener('click', () => {
    const apiSection = document.querySelector('#API');
    apiSection.classList.toggle('show');
});