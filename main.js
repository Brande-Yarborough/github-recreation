const BASE_URL = "https://api.github.com/users/brande-yarborough";
const organizations_url = "https://api.github.com/users/Brande-Yarborough/orgs";
const repos_url = "https://api.github.com/users/Brande-Yarborough/repos";

function generateProfileHTML(data) {
  //   console.log(data); //can be sure data call works
  const source = document.querySelector("#profile-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template(data);

  document
    .querySelector(".profile-info")
    .insertAdjacentHTML("afterbegin", html);
}

function generateOrgs(data) {
  //   console.log(data); //can be sure data call works
  const source = document.querySelector("#organizations-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template({ organizations: data });

  document
    .querySelector(".organization-info")
    .insertAdjacentHTML("afterbegin", html);
}

function generateRepo(data) {
  console.log(data);
  const source = document.querySelector("#repo-template").innerHTML;
  const template = Handlebars.compile(source);

  const html = template({ repos: data });

  document.querySelector(".repo-info").insertAdjacentHTML("afterbegin", html);
}

fetch(`${BASE_URL}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateProfileHTML(data); //actual value that we get back
    console.log("USER DATA", data);
  });

fetch(`${organizations_url}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateOrgs(data); //actual value that we get back
    console.log("ORGANIZATION DATA", data);
  });

fetch(`${repos_url}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateRepo(data); //actual value that we get back
    console.log("BASE DATA", data);
  });
