$(document).ready(function () {
  var url = "https://fakestoreapi.com/products";
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      for (var i in json) {
        $("#test").append(`  <div class=" col-lg-3   col-md-6  "  >
                <div class="card mt-3 py-2">
              <h4 class="fs-6 fw-bold">${json[i].title}</h4>
              <a class="cardLink m-auto" href="#"> <img src="${json[i].image}"  width="200px" height="200px" alt="">
              </a>
              <a class="cardLink" href="#"> <h6>shop now</h6></a>
                </div>`);
      }
      console.log(json);
    });
});

export const userArr = [
  {
    id: "1",
    name: "jhon smith",
    email: "jhon@gmail.com",
    pass: "Jhon12345",
  },
  {
    id: "2",
    name: "emily stewart",
    email: "emily@gmail.com",
    pass: "Emily12345",
  },
  {
    id: "3",
    name: "rosa will",
    email: "rosa@gmail.com",
    pass: "Rosa12345",
  },
  {
    id: "4",
    name: "sara jim",
    email: "sara@gmail.com",
    pass: "Sara12345",
  },
  {
    id: "5",
    name: "roma rony",
    email: "roma@gmail.com",
    pass: "Roma12345",
  },
];

console.log(userArr);
for (var i in userArr) {
  localStorage.setItem("user" + userArr[i].id, JSON.stringify(userArr[i]));
}

function check() {
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  var newUser = JSON.parse(localStorage.getItem("newUser"));
  console.log(newUser);
  if (currentUser) {
    var li = document.getElementById("account");
    var add = `<a class="nav-link text-white  fw-bold navText" id="data"style="font-size:12px;"  href="#" >Hello, ${currentUser.currentUserName}</a>`;
    li.innerHTML = add;
    console.log(currentUser.currentUserName);
  } else if (newUser) {
    var li = document.getElementById("account");
    var addnew = `<a class="nav-link text-white  fw-bold navText" id="data" style="font-size:15px;" href="#" >Hello, ${newUser.newUserName}</a>`;
    li.innerHTML = addnew;
  }
}
// const signOutBtn = document.getElementById("logOut");
// signOutBtn.addEventListener("click", (e) => {
//   // localStorage.clear();
//   // location.reload();
// });
// function logOut(){
//   localStorage.clear();
//   location.reload();
// }


check();
console.log(userArr);
