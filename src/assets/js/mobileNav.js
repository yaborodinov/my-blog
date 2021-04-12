const burger = document.querySelector("#sidebarToggle")
const sidebar = document.querySelector("#sidebar")
const page = document.getElementById("page")
const body = document.body;

burger.addEventListener("click", () => {
    document.body.classList.toggle("show-sidebar")
    if(body.classList.contains("show-sidebar")) {
        showSidebar()
    } else {
        closeSidebar();
    }
})

function showSidebar() {
    let mask = document.createElement('div');
    mask.classList.add("page__mask");
    mask.addEventListener("click", closeSidebar);
    page.appendChild(mask);

    body.classList.add("show-sidebar")
}

function closeSidebar() {
    body.classList.remove("show-sidebar");
    document.querySelector(".page__mask").remove()
   
}