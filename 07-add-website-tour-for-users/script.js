/*     MODAL     */
$(document).ready(function () {
    $('.modal').modal();
}
)
/*     SEARCH     */
var page = 1, about = "random";
getpics();

function getpics() {
    fetch(`https://api.pexels.com/v1/search?page=${page}&per_page=12&query=${about}`, {
        headers: { Authorization: '563492ad6f917000010000014d9a7b26101c4cf99de63d3b6b0de209' }
    }).then(response => response.json())
        .then(result => {
            for (var i = 0; i < result.photos.length; i++) {
                document.getElementById("container").innerHTML += `
            <div class="col s12 m6 l4 picture-card">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" alt="`+ result.photos[i].alt + `" src="` + result.photos[i].src.landscape + `">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4 truncate ">`+ result.photos[i].alt + `</span>
                    </div>
                    <div class="card-reveal">
                    <i class="material-icons right card-title">close</i>
                        <span class="card-title grey-text text-darken-4">`+ result.photos[i].alt + `</span>
                        <p><b>Photographer:</b> `+ result.photos[i].photographer + `</p>
                        <p><b>Photographer URL:</b> <a href="`+ result.photos[i].photographer_url + `" target="_blank">` + result.photos[i].photographer_url + `</a></p>
                        <p><b>Photo URL:</b> <a href="`+ result.photos[i].url + `" target="_blank">` + result.photos[i].url + `</a></p>
                        <a href="`+ result.photos[i].src.landscape + `" class="btn waves-effect waves-white red darken-1 download" download="` + result.photos[i].src.landscape + `" target="_blank">Download</a>
                    </div>
                </div>
            </div>`;
            }
            page++;
        })
        .catch(err => console.log(err))
}

function search() {
    var input = document.getElementById("input1");
    if (input.value !== "") {
        about = input.value;
        document.getElementById("container").innerHTML = `<div id="container"></div>`
        getpics();
    }
}

const startWebsiteTour = () => {
    const driver = window.driver.js.driver;
    const driverObj = driver({
        showProgress: true,
        steps: [
            { element: '.picture-card', popover: { title: 'Picture 1', description: 'Click on the picture to download it or learn more about it' } },
            { element: '.btn-load-more', popover: { title: 'Load more', description: 'Click here to load more pictures' } },
            { element: '.page-footer', popover: { title: 'Footer', description: 'You can find more links here' } },
        ]
    });

    driverObj.drive();
}

document.querySelector(".btn-help").addEventListener("click", () => {
    startWebsiteTour()
})
