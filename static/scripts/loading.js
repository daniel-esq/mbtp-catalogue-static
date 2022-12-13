function loaded() {
    document.getElementById('loading').hidden = "loaded";
}

function waiting() {
    document.getElementById('loading').hidden = false;
}

function expandAllDetails() {
    document.querySelectorAll('details').forEach(e => e.open = true);
}
