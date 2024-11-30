let modalImages = {
    modal1: [
        "https://th.bing.com/th/id/OIP.8khg8h4mfDE7X2Y1l1PAxwAAAA?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.pMbbR4yghEce8r2rV5aIRQAAAA?rs=1&pid=ImgDetMain"
    ],
    modal2: [
        "https://th.bing.com/th/id/OIP.XbzuN7S5UX8Ov8La8I29nQAAAA?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.dlorL-r3bASnR370XHZ1ZgHaLL?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.dlorL-r3bASnR370XHZ1ZgHaLL?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.dlorL-r3bASnR370XHZ1ZgHaLL?rs=1&pid=ImgDetMain"
    ],
    modal3: [
        "https://th.bing.com/th/id/OIP.ePjgbxrQeOXoqi0JsYgUcQHaLH?dpr=1.3&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.YI0TjcMS2Tb7xCDpz_jUNgHaKw?dpr=1.3&pid=ImgDetMain"
    ]
};

let currentIndex = {
    modal1: 0,
    modal2: 0,
    modal3: 0
};

// Open a specific modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    showImage(modalId);
}

// Close a specific modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Show the current image in the modal
function showImage(modalId) {
    const modalGallery = document.getElementById(modalId).querySelector('.modal-gallery');
    const images = modalImages[modalId];
    const imageElements = modalGallery.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
        imageElements[i].style.display = (i === currentIndex[modalId]) ? 'block' : 'none';
    }
}

// Navigate through images in the modal
function navigateImages(modalId, direction) {
    const imagesCount = modalImages[modalId].length;
    currentIndex[modalId] = (currentIndex[modalId] + direction + imagesCount) % imagesCount;
    showImage(modalId);
}

// Close the modal if the user clicks outside the content
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
