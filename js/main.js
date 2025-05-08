// Исходные данные
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Артём', 'Настя', 'Владимир', 'Мария', 'Игорь', 'Светлана', 'Алексей', 'Даша', 'Михаил', 'Оля'];

const DESCRIPTIONS = [
  'Отличный день',
  'Хорошее утро',
  'День идет неплохо'
];

// Возвращаем случайное число
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Возвращаем случайный элемент из массива
function getRandomArrayItem(array) {
  return array[getRandomInt(0, array.length - 1)];
}

// id комментариев
let globalCommentId = 1;

// Генерирует случайно 1 или 2 предложения
function generateComment() {
  const sentences = [];
  sentences.push(getRandomArrayItem(MESSAGES));
  if (Math.random() > 0.5) {
    sentences.push(getRandomArrayItem(MESSAGES));
  }
  return {
    id: globalCommentId++,
    avatar: `img/avatar-${getRandomInt(1,6)}.svg`,
    message: sentences.join(' '),
    name: getRandomArrayItem(NAMES)
  };
}

// Генерирует комментарии
function generateComments() {
  const count = getRandomInt(0, 30);
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(generateComment());
  }
  return comments;
}

// Генерирует фотографию
function generatePhoto(i) {
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: getRandomArrayItem(DESCRIPTIONS),
    likes: getRandomInt(15, 200),
    comments: generateComments(),
  };
}

// Генерирует 25 фотографий
function generatePhotos() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push(generatePhoto(i));
  }
  return photos;
}

// Вызываем генерацию фотографий
const photos = generatePhotos();
console.log(photos);
