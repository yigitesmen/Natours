const navigationItems = document.getElementsByClassName('navigation__item')
const naviToggle = document.getElementById('navi-toggle')

// Make navigation work
for (const item of navigationItems) {
    item.addEventListener('click', () => {
        naviToggle.checked = false
    })
}