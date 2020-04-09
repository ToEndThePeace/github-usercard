const gitUserData = ["ToEndThePeace", "sadamexx", "shayne-smith", "Istott", "ohman4"];

// Simple Utility Functions
function get(selector) {
  return document.querySelectorAll(selector);
}
function make(htmlTag) {
  return document.createElement(htmlTag);
}

/**
 * @name getGitFromList 
 * @summary Pulls data from GitHub's user API and calls makeCard() on it
 * @param {string[]} gitArray Is an array of valid GitHub handles
 */
function getGitFromList(gitArray) {
  gitArray.forEach((x) => {
    axios
      .get(`https://api.github.com/users/${x}`)
      .then((res) => {
        makeCard(res.data);
      })
      .catch((err) => {
        alert("ERROR: Request failed.\n" + err);
      });
  });
}

/**
 * @name makeCard
 * @summary creates an HTML node from a GitHub User object and adds to the DOM
 * @param {Object} gitData is a GitHub user's complte information pulled from their API
 */
function makeCard(gitData) {
  // Create HTML Elements
  const card = make("div");
  const close = make("span");
  const image = make("img");
  const info = make("div");
  const name = make("h3");
  const username = make("p");
  const location = make("p");
  const profile = make("p");
  const link = make("a");
  const followers = make("p");
  const following = make("p");
  const bio = make("p");
  const profileText = document.createTextNode("Profile: ");

  // Apply Attributes and Content
  card.classList.add("card");
  close.classList.add("close");
  close.innerHTML = "&times;";
  image.setAttribute("src", gitData.avatar_url);
  info.classList.add("card-info");
  name.classList.add("name");
  name.textContent = gitData.name;
  username.classList.add("username");
  username.textContent = gitData.login;
  location.textContent =
    "Location: " + (gitData.location ? gitData.location : "Unknown");
  link.href = gitData.html_url;
  link.textContent = gitData.html_url;
  followers.textContent = `Followers: ${gitData.followers}`;
  following.textContent = `Following: ${gitData.following}`;
  bio.textContent = `Bio: ${gitData.bio}`;

  //Structure the Element
  card.appendChild(close);
  card.appendChild(image);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  profile.appendChild(profileText);
  profile.appendChild(link);
  info.appendChild(profile);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  // Event Listeners
  close.addEventListener("click", () => {
    card.classList.add("noshow");
  })

  // Add New Card Node to the DOM
  get(".cards")[0].appendChild(card);
}

const loadButton = get("#loadUsers")[0];
loadButton.addEventListener("click", () => {
  getGitFromList(gitUserData);
  loadButton.disabled = true;
  loadButton.textContent = "Users Loaded";
})

const submitButton = get("#submit")[0];
submitButton.addEventListener("click", () => {
  const textField = get("#search")[0];
  const val = textField.value;
  textField.value = "";
  getGitFromList([val]);
})