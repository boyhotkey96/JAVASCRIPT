const vocabularyLists = [
  {
    id: 1,
    title: "Day 1",
    words: [
      { file: "" },
      { edit: "" },
      { view: "" },
      { go: "" },
      { window: "" },
      { help: "" },
      { holiday: "" },
      { beautiful: "" },
      { places: "" },
      { kingdom: "" },
      { country: "" },
      { rest: "" },
      { eat: "" },
      { play: "" },
      { ideal: "" },
      { idea: "" },
      { profile: "" },
      { center: "" },
      { left: "" },
      { right: "" },
      { note: "" },
      { task: "" },
      { list: "" },
      { computer: "" },
      { phone: "" },
      { keyboard: "" },
      { key: "" },
      { information: "" },
      { number: "" },
      { weather: "" },
    ],
  },
  {
    id: 2,
    title: "Day 2",
    words: [
      { water: "" },
      { mountain: "" },
      { picnic: "" },
      { setting: "" },
      { option: "" },
      { change: "" },
      { folder: "" },
      { software: "" },
      { accept: "" },
      { use: "" },
      { enable: "" },
      { disable: "" },
      { update: "" },
      { send: "" },
      { location: "" },
      { access: "" },
      { connect: "" },
      { search: "" },
      { default: "" },
      { style: "" },
      { join: "" },
      { system: "" },
      { general: "" },
      { control: "" },
      { now: "" },
      { free: "" },
      { version: "" },
      { highlight: "" },
      { apply: "" },
      { application: "" },
    ],
  },
  {
    id: 3,
    title: "Day 3",
    words: [
      { hello: "xin chao" },
      { format: "" },
      { tool: "" },
      { insert: "" },
      { new: "" },
      { page: "" },
      { reset: "" },
      { show: "" },
      { hide: "" },
      { service: "" },
      { all: "" },
      { create: "" },
      { close: "" },
      { open: "" },
      { support: "" },
      { inside: "" },
      { outside: "" },
      { data: "" },
      { basic: "" },
      { event: "" },
      { device: "" },
      { auto: "" },
      { manager: "" },
      { select: "" },
      { trend: "" },
      { replace: "" },
      { post: "" },
      { hand: "" },
      { handle: "" },
      { share: "" },
      { next: "" },
    ],
  },
  {
    id: 4,
    title: "Day 4",
    words: [
      { remote: "" },
      { provide: "" },
      { customer: "" },
      { add: "" },
      { developer: "" },
      { customize: "" },
      { download: "" },
      { height: "" },
      { weight: "" },
      { tall: "" },
      { short: "" },
      { report: "" },
      { message: "" },
      { contact: "" },
      { program: "" },
      { install: "" },
      { error: "" },
      { delete: "" },
      { login: "" },
      { "sign up": "" },
      { fast: "" },
      { slow: "" },
      { body: "" },
      { eye: "" },
      { face: "" },
      { finger: "" },
      { hair: "" },
      { head: "" },
      { heart: "" },
      { ankle: "" },
    ],
  },
  {
    id: 5,
    title: "Day 5",
    words: [
      { daily: "" },
      { public: "" },
      { mouse: "" },
      { brower: "" },
      { book: "" },
      { ebook: "" },
      { email: "" },
      { headphone: "" },
      { password: "" },
      { call: "" },
      { art: "" },
      { artist: "" },
      { author: "" },
      { happy: "" },
      { lonely: "" },
      { lovely: "" },
      { design: "" },
      { collection: "" },
      { model: "" },
      { hotline: "" },
      { miss: "" },
      { receive: "" },
      { cancel: "" },
      { friend: "" },
      { friendly: "" },
      { normal: "" },
      { show: "" },
      { singer: "" },
      { music: "" },
      { movie: "" },
    ],
  },
  {
    id: 6,
    title: "Day 6",
    words: [
      { second: "" },
      { minute: "" },
      { hair: "" },
      { day: "" },
      { week: "" },
      { month: "" },
      { year: "" },
      { weekend: "" },
      { sunset: "" },
      { sunrise: "" },
      { dawn: "" },
      { dusk: "" },
      { employee: "" },
      { company: "" },
      { student: "" },
      { special: "" },
      { famous: "" },
      { person: "" },
      { simple: "" },
      { easy: "" },
      { "easy on me": "" },
      { police: "" },
      { policy: "" },
      { question: "" },
      { apple: "" },
      { ongre: "" },
      { bangana: "" },
      { mango: "" },
      { watermelon: "" },
      { pineapply: "" },
    ],
  },
  {
    id: 7,
    title: "Day 7",
    words: [
      { address: "" },
      { flat: "" },
      { floor: "" },
      { city: "" },
      { tower: "" },
      { lane: "" },
      { avenue: "" },
      { hometown: "" },
      { pretty: "" },
      { quiet: "" },
      { model: "" },
      { crowded: "" },
      { around: "" },
      { content: "" },
      { speed: "" },
      { title: "" },
      { project: "" },
      { library: "" },
      { trip: "" },
      { province: "" },
      { "imperial city": "" },
      { "ancient town": "" },
      { island: "" },
      { seaside: "" },
      { "got married": "" },
      { prince: "" },
      { type: "" },
      { seeds: "" },
      { order: "" },
      { kind: "" },
    ],
  },
  {
    id: 8,
    title: "Day 8",
    words: [
      { exchange: "" },
      { greed: "" },
      { interesting: "" },
      { surprised: "" },
      { magic: "" },
      { character: "" },
      { cave: "" },
      { exlore: "" },
      { take: "" },
      { "build sancastles": "" },
      { sunbathe: "" },
      { food: "" },
      { hungry: "" },
      { ice: "" },
      { lunch: "" },
      { menu: "" },
      { restaurant: "" },
      { drink: "" },
      { sweet: "" },
      { tea: "" },
      { everywhere: "" },
      { nowhere: "" },
      { daddress: "" },
      { map: "" },
      { world: "" },
      { nation: "" },
      { star: "s" },
      { international: "" },
      { support: "" },
      { browser: "" },
    ],
  },
];

const elmVocabularyList = document.querySelector("ul.vocabulary-list");

function filterWords(array) {
  const newArray = [];

  // Loop array init
  array.reduce((result, item) => {
    // Loop array words
    item.words.map((vocabulary) => {
      result = Object.keys(vocabulary)[0];
      newArray.push(result); // push all word in newArray
    });
  }, "");

  // Sort newArray: a -> z
  // newArray.sort();

  // Sort newArray: a -> z (a: minLength -> maxLength, b: minLength -> maxLength, ...)
  /* newArray.sort((a, b) => {
    if (a.slice(0, 1) === b.slice(0, 1)) {
      return a.length - b.length
    } else {
      return a - b
    }
  }) */

  // Sort newArray length: min lenght -> max length
  newArray.sort((a, b) => {
    return a.length - b.length;
  });

  // Loop newArray -> render html
  newArray.map((word) => {
    const liElm = document.createElement("li");
    liElm.classList.add('vocabulary-text')
    // Object.assign(liElm.style, {
    //   display: 'block',
    //   padding: '10px',
    // })

    // liElm.style.cssText = `
    //   font-size: 20px;
    // `

    
    liElm.textContent = word;

    elmVocabularyList.appendChild(liElm);
  });
}

filterWords(vocabularyLists);
