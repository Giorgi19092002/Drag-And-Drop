const sortableList = document.querySelector('.sortable-list'),
items = sortableList.querySelectorAll('.item')

items.forEach(item => {
  item.addEventListener('dragstart',() => {
    setTimeout(() => item.classList.add('dragging'),0)
  })
  item.addEventListener('dragend',() => {
    item.classList.remove('dragging')
  })
})

const initSortableList = (e) => {
  const draggingItem = document.querySelector('.dragging')
  const siblings = [...sortableList.querySelectorAll('.item:not(.dragging)')]

  let nextSibling = siblings.find(sibling => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2
  })

  sortableList.insertBefore(draggingItem,nextSibling)
}

sortableList.addEventListener('dragover',initSortableList)