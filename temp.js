const contacts = [
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "firstName": "George",
    "lastName": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "firstName": "Janet",
    "lastName": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "firstName": "Emma",
    "lastName": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "firstName": "Eve",
    "lastName": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "firstName": "Charles",
    "lastName": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "firstName": "Tracey",
    "lastName": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  },
  {
    "id": 7,
    "firstName": "Pradesh",
    "lastName": "Kumar",
    "avatar": "https://pradesh-kumar.github.io/img/profile.jpeg",
    "email": "abc@xyz.com"
  }
]


const res = contacts.map(item => {
  item.id = item.id.toString();
  item.name= item.firstName + " " + item.lastName;
  delete item.firstName; delete item.lastName;
  return item;
});