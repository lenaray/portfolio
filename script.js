function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    menu.classList.toggle("icon");
}

function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function toggleProjectDetails(tile) {
    const details = tile.querySelector('.project-details')
    const allDetails = document.querySelector('.project-details')
    allDetails.forEach(detail => {
        if (detail !== details) {
            detail.style.display = 'none';
        }
    });
    details.style.display = details.stytle.display === 'block' ? 'none' : 'block';
}