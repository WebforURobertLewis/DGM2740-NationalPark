function openMenu() {
    document.getElementById("mainNavMenu").classList.toggle("classOpen");
}
const container = document.getElementById("burger")

container.onclick = openMenu;

