function component() {
    let button = document.getElementById('button');
    this.handleClick = function() {

    };
    button.addEventListener('click', () => {
        // no more that = this
        this.handleClick();
    });
}
