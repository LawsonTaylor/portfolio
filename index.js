
const projects = [
  {
    name: 'Idle Australia',
    url: '',
    imageUrl: '',
    technology: 'MEAN STACK',
    description: 'Construction hire online',
  },
  {
    name: 'SWAPI',
    url: '',
    imageUrl: '',
    technology: 'ANGULAR',
    description: 'Starwars',
  },
  {
    name: 'Simple Snake',
    url: '',
    imageUrl: '',
    technology: 'HTML5 CANVAS',
    description: 'Simple Snake - on html canvas',
  },
  {
    name: 'CHAT ROOM',
    url: '',
    imageUrl: '',
    technology: 'Sockets Chatroom',
    description: 'Typescipt sockets chatroom',
  },
  {
    name: 'Rumours',
    url: '',
    imageUrl: '',
    technology: 'Typescript Blockchain',
    description: '',
  },

];

const body = document.getElementById('projects');


const role = document.getElementById("role");
let index = 0;
let oldindex = 0;
const roles = ['coder', 'hacker', 'problem solver', 'builder', 'student', 'developer'];
const number = roles.length;
let timer = Math.floor((Math.random() * 1600) + 800);

setInterval(() => {
  while(oldindex == index) {
    index = Math.floor((Math.random() * number));
  }
  role.innerHTML = roles[index].toUpperCase();
  oldindex = index;
}, 1400);

