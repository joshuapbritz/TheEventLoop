const BLOCK = document.getElementById('height_block');
const TITLE = BLOCK.getElementsByClassName('title')[0];
const CONTENT = BLOCK.getElementsByClassName('content')[0];
let is_open = false;

TITLE.onclick = () => {
    // // TRY 1
    // if (!is_open) {
    //     CONTENT.style.height = 'auto';
    //     is_open = true;
    // } else {
    //     CONTENT.style.height = '0';
    //     is_open = false;
    // }

    // // TRY 2
    // if (!is_open) {
    //     CONTENT.style.height = 'auto';
    //     const HEIGHT_WHEN_OPEN = CONTENT.clientHeight;
    //     CONTENT.style.height = '0';
    //     CONTENT.style.height = HEIGHT_WHEN_OPEN + 'px';
    //     is_open = true;
    // } else {
    //     CONTENT.style.height = '0';
    //     is_open = false;
    // }

    // TRY 3
    if (!is_open) {
        const RETURN_HEIGHT = CONTENT.clientHeight;
        CONTENT.style.height = 'auto';
        const HEIGHT_WHEN_OPEN = CONTENT.clientHeight;
        CONTENT.style.height = RETURN_HEIGHT + 'px';
        setTimeout(() => {
            CONTENT.style.height = HEIGHT_WHEN_OPEN + 'px';
            BLOCK.classList.add('open');
        }, 0);
        is_open = true;
    } else {
        CONTENT.style.height = '0';
        BLOCK.classList.remove('open');
        is_open = false;
    }
};
