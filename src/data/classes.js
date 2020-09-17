/* eslint-disable no-useless-escape */
const formFields = [
  {key: 'title', placeholder: 'Title', regExp: '^$|\s+'},
  {key: 'instructor', placeholder: 'Instructor', regExp: '^$|\s+'},
  {key: 'duration', placeholder: 'Cooking time', regExp: '^$|\d+$'},
  {key: 'description', placeholder: 'Description', regExp: '^$|\s+'},
]

const classTemplate = {
  id: 1,
  title: "",
  instructor: "",
  description: "",
  duration: '',
  featureImage: 'https://icon-library.net/images/add-image-icon/add-image-icon-14.jpg',
  classType: 'on-demand'
}

const classList = [
  {
    id: 1,
    title: "Cooking Pasta with Giada De Laurentiis",
    instructor: "Giada De Laurentiis",
    description: "Learn to cook this great pasta from your fave chef",
    duration: 25,
    featureImage: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/7/0/FNK_Pasta-Ponza_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383814646967.jpeg',
    classType: 'on-demand'
  },
  {
    id: 2,
    title: "Cooking Lasagne with Giada",
    instructor: "Giada De Laurentiis",
    description: "Learn to cook the best meal on the planet with a legendary Food Network Star",
    duration: 45,
    featureImage: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/1/31/0/italiancooking_lasagna.jpg.rend.hgtvcom.826.620.suffix/1382982573090.jpeg',
    classType: 'on-demand'
  },
  {
    id: 3,
    title: "Grilling Burgers with Bobby",
    instructor: "Bobby Flay",
    description: "Grille burgers with this professional grillmaster, Bobby Flay. You won't regret it!",
    duration: 35,
    featureImage: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/4/15/0/FNM060109BobbysBurgers004_burger_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382538951232.jpeg',
    classType: 'on-demand'
  },
  {
    id: 4,
    title: "Comfort Foods with Ree",
    description: "Can't go wrong with Ree",
    instructor: "Ree Drummond",
    duration: 35,
    featureImage: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/8/19/0/WU0809_Twice-Baked-Potato-Casserole_s4x3.jpg.rend.hgtvcom.966.773.suffix/1429279262392.jpeg',
    classType: 'live'
  },
  
]

export {classList, classTemplate, formFields}
