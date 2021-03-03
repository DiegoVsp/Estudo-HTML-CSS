const data = Array.from({ length: 100 }).map((_, index) => `Item ${index + 1}`)


// =============================================
let perPage = 10

const state = {
  page: 1,
  perPage,
  totalPage: Math.ceil(data.length / perPage),
  maxVisibleButtons: 5
}

const html = {
  get(element) {
    return document.querySelector(element)
  }
}

// Math.ceil arredonda pra cima
console.log(state.totalPage)

const controls = {
  next() {
    state.page++
    const lastPage = state.page > state.totalPage

    if (lastPage) {
      state.page--
    }
  },
  prev() {
    state.page--
    const firstPage = state.page < 1
    if (firstPage) {
      state.page++
    }
  },
  goTO(page) {
    if (page < 1) {
      page = 1
    }

    state.page = +page

    if (page > state.totalPage) {
      state.page = state.totalPage
    }
  },
  createListeners() {
    html.get('.first').addEventListener('click', () => {
      controls.goTO(1)
      update()
    })

    html.get('.last').addEventListener('click', () => {
      controls.goTO(state.totalPage)
      update()
    })
    html.get('.next').addEventListener('click', () => {
      controls.next()
      update()
    })
    html.get('.prev').addEventListener('click', () => {
      controls.prev()
      update()
    })
  }
}
const list = {
  create(item) {
    console.log(item)
    const div = document.createElement('div')
    div.classList.add('item')
    div.innerHTML = item

    html.get('.list').appendChild(div)
  },
  update() {
    html.get('.list').innerHTML = ''

    let page = state.page - 1
    let start = page * state.perPage
    let end = start + state.perPage
    const paginatedItem = data.slice(start, end)

    paginatedItem.forEach(list.create)
  }
}
const buttons = {
  element: html.get('.controls .numbers'),
  create(number) {
    const button = document.createElement('div')

    button.innerHTML = number;

    if(state.page == number){
      button.classList.add('active')
    }
    button.addEventListener('click', (event) => {
      const page = event.target.innerText

      controls.goTO(page)
      update()
    })
    buttons.element.appendChild(button)
  },
  update() {
    buttons.element.innerHTML = ""
    const { maxLeft, maxRight } = buttons.calculateMaxVisible()

    for (let page = maxLeft; page <= maxRight; page++) {
      buttons.create(page)
    }
  },
  calculateMaxVisible() {
    const { maxVisibleButtons } = state
    let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2))
    let maxRight = (state.page + Math.floor(maxVisibleButtons / 2))

    if (maxLeft < 1) {
      maxLeft = 1
      maxRight = maxVisibleButtons
    }
    if (maxRight > state.totalPage) {
      maxLeft = state.totalPage - (maxVisibleButtons - 1)
      maxRight = state.totalPage

      if (maxLeft < 1) {
        maxLeft = 1
      }
    }
    return { maxLeft, maxRight }
  }
}

function update() {
  list.update()
  buttons.update()
}

function init() {
  update()
  controls.createListeners()
}

// console.log(state.page)
// controls.next()
// console.log(state.page)
// controls.prev()
// console.log(state.page)

// controls.goTO(22)
// console.log(state.page)
init()
// populateList()