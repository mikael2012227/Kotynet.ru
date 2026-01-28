const cards = {
  1: {
    img: "https://static.wikia.nocookie.net/kotinet/images/2/22/%D0%9B%D0%9E%D0%A2%D0%9A%D0%9E%D0%92.jpg/revision/latest?cb=20250706104828&path-prefix=ru",
    name: "Лотков",
    role: "Ученик",
    desc: "Не любит учиться и носит в школу резиновую уточку",
  },
  2: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIs_l_8C_C41SiydbxA5Ibwim6RcWxjK5SJQ&s",
    name: "Кусев",
    role: "Ученик",
    desc: "Друг Лоткова и носит в школу резиновую лягушку",
  },
  3: {
    img: "https://static.wikia.nocookie.net/kotinet/images/3/3c/%D0%9C%D0%93%D0%95%D1%82%D1%8B%D0%B3%D1%8B%D0%B4%D1%8B%D0%BA%D0%BE%D0%B2.jpg/revision/latest/scale-to-width/360?cb=20250620123046&path-prefix=ru",
    name: "Тыгыдыков",
    role: "Ученик",
    desc: "Учится в одном классе с Лотковым и Кусевым, носит в школу резиновую мышку",
  },
  4: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4uVTSzmjib4HWxgXc4KdDpXhO62qI_mJSOg&s",
    name: "Геннадий Петрович",
    role: "Учитель, классный руководитель",
    desc: "Учит своих учеников, не любит когда на его урок приходят не подготовленными",
  },
  5: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ymoU5xqeUTbKDwMMOSF-MRMDQcznneu_KA&s",
    name: "Котина Ивановна",
    role: "Учитель математики",
    desc: "учитель математики, очень любит мячики, когда ей приносят их на урок она всегда ставит пятерки",
  },
  6: {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWWmV_nyCzxLJuWfqybvMWHpbMlXsohOVm2Q&s",
    name: "Валерий Полосатиков",
    role: "Учитель Биологии",
    desc: "Учитель биологии, его любимая фраза Бя толком ничему не учит учеников, пишет в тетрадке слово Бя",
  },
};

function onClickCard(cardNumber) {
  console.log(cards[cardNumber]);
  const title = document.getElementById("pers__container__menu__text__title")
  title.innerText = `${cards[cardNumber].name} - ${cards[cardNumber].role}`
  const desc= document.getElementById("desc") 
  desc.innerText = cards[cardNumber].desc
  const img = document.getElementById("img")
  img.src=cards[cardNumber].img
  img.style.width = "200px"
  img.style.height = "200px"
}
