import {
  createElement,
  createHeader,
  createTopButton,
} from '../../script/layout'
const page = document.querySelector('.page')
const header = createHeader()
page.append(header)
const title = createElement('h1', 'title', 'Коммьюніті')
page.append(title)
const topButton = createTopButton()
page.append(topButton)
const POST_LIST = [
  {
    img: { src: '/img/main_img.png' },
    postTitle: `Що таке база знань?`,
    info: `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. `,
    bottomButton: `Перейти до ком'юніті у Телеграм`,
  },
]
const createPost = () => {
  const postList = createElement('main', 'post__list')
  POST_LIST.forEach((postData) => {
    const post = createElement('div', 'post__list')
    const postImg = createElement('img')
    Object.entries(postData.img).forEach(([key, value]) => {
      postImg[key] = value
    })
    const postHeader = createElement(
      'div',
      'post__header title',
      postData.postTitle,
    )

    //==
    const infoParagraf = createElement(
      'p',
      'post__info',
      postData.info,
    )
    const bottomButton = createElement(
      'button',
      'button bottomButton',
      postData.bottomButton,
    )
    post.append(
      postImg,
      postHeader,
      infoParagraf,
      bottomButton,
    )
    //===
    postList.append(post)
  })
  return postList
}
//===
const post = createPost()
page.append(post)
