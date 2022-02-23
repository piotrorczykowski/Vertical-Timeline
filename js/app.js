//  Check if element is in viewport
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect()
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

//  Show or hide items
const showHideItems = (item, option) => {
    const childrenOfListItem = item.children[0].children

    for(let i=0; i<3; i++)
    {
        childrenOfListItem[i].style.visibility = option
    }
}

const changeItem = () => {
    const listItems = document.querySelectorAll('.timeline-list-item')

    listItems.forEach(item => {
        if(isInViewport(item)) {
            showHideItems(item, 'visible')
        }
        else {
            showHideItems(item, 'hidden')
        }
    });
}

const addEventListeners = () => {
    window.addEventListener('load', changeItem)
    window.addEventListener('resize', changeItem)
    window.addEventListener('scroll', changeItem)
}


//  Start everything
addEventListeners()