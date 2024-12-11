const toDrop = document.getElementsByClassName("to-drop");
const subMenu = document.getElementsByClassName("menu-wrapper");
const withDrop = document.getElementsByClassName("with-dropdown");
const dropedMenu = document.getElementsByClassName("droped");


for (let i=0; i < toDrop.length; i++){
    toDrop[i].addEventListener("click", () =>{
        console.log(subMenu[i]);
        subMenu[i].classList.toggle("show-menu");
    });
}
for (let j=0; j < withDrop.length; j++){
    withDrop[j].addEventListener("click", () => {
        console.log(dropedMenu[j]);
        dropedMenu[j].classList.toggle("droping-menu");
    });
}

function showSidebar() {
    const sidebar = document.getElementsByClassName("sidebar");
    sidebar[0].style.display = 'block';
}
function hideSidebar() {
    const sidebar = document.getElementsByClassName("sidebar");
    sidebar[0].style.display = 'none';
}

// let dropMe = document.getElementById