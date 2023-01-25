const BASE_URL = "https://api.github.com/users/brande-yarborough";

function generateHTML(data) {
  //   console.log(data); //can be sure data call works
  const source = document.querySelector("#profile-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(data);

  document.querySelector(".github-info").insertAdjacentHTML("afterbegin", html);
}

function generateOrganizations(data) {
  //   console.log(data); //can be sure data call works
  const source = document.querySelector("#organizations-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(data);

  document.querySelector(".github-info").insertAdjacentHTML("afterbegin", html);
}

fetch(`${BASE_URL}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateHTML(data); //actual value that we get back
  });
