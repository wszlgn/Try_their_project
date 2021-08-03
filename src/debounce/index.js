export const debounce = (fn, wait) => { 
    let timeout = null;
    return function() {
        if (timeout !== null) clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
}
let hit = document.querySelector('.tar-bar-item');

function show() {
    return this.$route.path.indexOf(this.path) !== -1;
}
hit.addEventListener('click', debounce(show, 1000), false);