export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)
  if (className) {
    elem.className = className
  }
  if (text) {
    elem.innerHTML = text
  }
  return elem
}
const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/arrow-back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/IMG_4.png',
  },
]
export const createHeader = () => {
  const header = createElement('header', 'header')
  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')
    const img = createElement('img')
    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })
    button.append(img)
    header.append(button)
  })
  return header
}
const TOP_BUTTON_LIST = [
  { text: 'База знань', viewed: true },
  { text: 'Інформація', viewed: false },
]
export const createTopButton = () => {
  const div = createElement('div', 'button_list')
  TOP_BUTTON_LIST.forEach((params) => {
    const top = createElement(
      'div',
      params.viewed ? 'button post--viewed' : 'button post',
    )
    top.innerText = params.text
    div.insertAdjacentElement('beforeend', top)
  })
  return div
}
