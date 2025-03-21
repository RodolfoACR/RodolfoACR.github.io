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
            return `<li class="container-fluid">
                <div class="row align-items-center" style=" margin: 10px;">
                    <div class="col-md-3 col-12 text-center">
                        <a href="${article.url}" target="_blank">
                            <img src="${article.urlToImage}" class="img-fluid rounded" style="max-height: 130px; width: auto;">
                        </a>
                    </div>
                    <div class="col-md-9 col-12">
                        <p>${article.description}</p>
                        <a href="${article.url}" class="fw-bold text-primary" target="_blank">${article.title}</a>
                    </div>
                </div>
            </li>`;
        }).join('');

        HTMLResponse.innerHTML = `<ul class="list-unstyled">${articlesHTML}</ul>`;
    })
    .catch(error => {
        HTMLResponse.innerHTML = `<p>Error fetching news: ${error.message}</p>`;
    });

const techNewsHeader = document.querySelector('#News h2');
techNewsHeader.style.cursor = 'pointer';
techNewsHeader.addEventListener('click', () => {
    const apiSection = document.querySelector('#API');
    apiSection.classList.toggle('show');
});
