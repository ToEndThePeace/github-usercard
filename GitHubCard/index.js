/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
function get(selector) {
  return document.querySelectorAll(selector);
}
function make(htmlTag) {
  return document.createElement(htmlTag);
}
function getGit(gitHandle) {
  axios
    .get(`https://api.github.com/users/${gitHandle}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

/*  Step 2: Inspect and study the data coming back, this is YOUR 
      github info! You will need to understand the structure of this 
      data in order to use it to build your component function 

      Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

function compGitCard(gitObj) {
  // Create HTML Elements
  const card = make("div");
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
  image.src = gitObj.data.avatar_url;
  info.classList.add("card-info");
  name.classList.add("name");
  name.textContent = gitObj.data.name;
  username.classList.add("username");
  username.textContent = gitObj.data.login;
  location.textContent =
    "Location: " + (gitObj.data.location ? gitObj.data.location : "Unknown");
  link.href = gitObj.data.html_url;
  link.textContent = gitObj.data.html_url;
  followers.textContent = `Followers: ${gitObj.data.followers}`;
  following.textContent = `Following: ${gitObj.data.following}`;
  bio.textContent = `Bio: ${gitObj.data.bio}`;

  //Structure the Element
  card.appendChild(image);
  card.appendChild(info);
  info.appendChild(name);
  info.appendChild(username);
  info.appendChild(location);
  info.appendChild(profileText);
  info.appendChild(link);
  info.appendChild(followers);
  info.appendChild(following);
  info.appendChild(bio);

  //TODO Event Listeners

  //TODO Return New Card Node
}
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
