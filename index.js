
function upDate(pic) {
    document.getElementById('frame').innerHTML = pic.alt;
    document.querySelector('#frame').style.backgroundImage = `url('${pic.src}')`;
}

function unDo() {
	document.querySelector('#frame').style.backgroundImage = "url('')";
    document.getElementById('frame').innerHTML = "Hover over an image below to display here.";
}