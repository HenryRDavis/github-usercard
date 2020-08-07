import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users//HenryRDavis')
.then( res =>{
  const newCards = document.querySelector('.cards')
  newCards.appendChild(gitMaker(res.data))
})
.catch(err => {
  console.log('Wrong!', err)
})

// axios.get('https://api.github.com/users//HenryRDavis/followers')


// .then( res =>{
//   console.log('friends response', res.data)
//   const friends = res.data;
//   console.log(friends)
//   const newCards = document.querySelector('.cards')
//   friends.forEach(friend =>{
//     const friendCard = gitMaker(res.data)
//     newCards.appendChild(gitMaker(friend))
//   })
// })
// .catch(err => {
//   console.log('Wrong!', err)
// })
// const newCards = document.querySelector('.cards')

// const myURL = 'https://api.github.com/users/HenryRDavis'

// const cardInformation = (myURL)=> {
//   axios.get(myURL)

//   .then(response => {
//   console.log(response.data)

//   newCards.appendChild(gitMaker(response.data));
//     })
//     .catch(error =>  {
//       console.log('Wrong!', error)
//     })
//   }
// gitMaker(cardInformation(myURL));

// axios.get('https://api.github.com/users/HenryRDavis/followers')
//   .then(information => {
// console.log('friends info', information.data)
// const friends = information.data;
// console.log(information.data)

// const friends = information.data;
// console.log(friends)

// friends.forEach(data => {
//   const friendCard = gitMaker(data.url)
//   newCards.appendChild(gitMaker(data))}

//   })
//   .catch(error =>  {
//     console.log('Wrong!', error)
//   })
  
  function gitMaker(data){
    const gitCard = document.createElement('div')
    const gitImage = document.createElement('img')
    const gitInfo = document.createElement('div')
    const gitName = document.createElement('h3')
    const gitUserName = document.createElement('p')
    const gitLocation = document.createElement('p')
    const gitProfile = document.createElement('p')
    const gitProLink = document.createElement('a')
    const gitFollowers = document.createElement('p')
    const gitFollowing = document.createElement('p')
    const gitBio = document.createElement('p')

    gitCard.appendChild(gitImage)
    gitCard.appendChild(gitInfo)
    gitInfo.appendChild(gitName)
    gitInfo.appendChild(gitUserName)
    gitInfo.appendChild(gitLocation)
    gitInfo.appendChild(gitProfile)
    gitInfo.appendChild(gitProLink)
    gitInfo.appendChild(gitFollowers)
    gitInfo.appendChild(gitFollowing)
    gitInfo.appendChild(gitBio)

    gitCard.classList.add('card')
    gitInfo.classList.add('card-info')
    gitName.classList.add('name')
    gitUserName.classList.add('username')
  
    gitInfo.src = data.avatar_url;
    gitUserName.textContent = data.name;
    gitName.textContent = data.login;
    gitLocation.textContent = data.Location;
    gitProLink.textContent = "Profile";
    gitProLink.href = data.html_url;
    gitFollowers.textContent = `Followers: ${data.followers}`;
    gitFollowing.textContent = `Following: ${data.following}`;
    gitBio.textContent = data.bio;

    return gitCard
}


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = []

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
