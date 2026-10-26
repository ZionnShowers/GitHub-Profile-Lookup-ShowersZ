
// const data = {
//     login: "octocat",
//     id: 583231,
//     node_id: "MDQ6VXNlcjU4MzIzMQ==",
//     avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
//     gravatar_id: "",
//     url: "https://api.github.com/users/octocat",
//     html_url: "https://github.com/octocat",
//     followers_url: "https://api.github.com/users/octocat/followers",
//     following_url: "https://api.github.com/users/octocat/following{/other_user}",
//     gists_url: "https://api.github.com/users/octocat/gists{/gist_id}",
//     starred_url: "https://api.github.com/users/octocat/starred{/owner}{/repo}",
//     subscriptions_url: "https://api.github.com/users/octocat/subscriptions",
//     organizations_url: "https://api.github.com/users/octocat/orgs",
//     repos_url: "https://api.github.com/users/octocat/repos",
//     events_url: "https://api.github.com/users/octocat/events{/privacy}",
//     received_events_url: "https://api.github.com/users/octocat/received_events",
//     type: "User",
//     user_view_type: "public",
//     site_admin: false,
//     name: "The Octocat",
//     company: "@GitHub",
//     blog: "https://github.blog",
//     location: "San Francisco",
//     email: null,
//     hireable: null,
//     bio: null,
//     twitter_username: null,
//     public_repos: 8,
//     public_gists: 8,
//     followers: 24770,
//     following: 9,
//     created_at: "2011-01-25T18:44:36Z",
//     updated_at: "2026-10-22T11:50:51Z"
// }

const error = document.getElementById("error")

const searchUser = document.getElementById("search-user")
const searchButton = document.getElementById("search-button")

const login = document.getElementById("login")
const id = document.getElementById("id")
const node_id = document.getElementById("node_id")
const avatar = document.getElementById("avatar")
const urlAcc = document.getElementById("url")
const type = document.getElementById("type")
const admin = document.getElementById("admin")
const nameAcc = document.getElementById("name")
const company = document.getElementById("company")
const blog = document.getElementById("blog")
const locate = document.getElementById("location")
const email = document.getElementById("email")
const hireable = document.getElementById("hireable")
const bio = document.getElementById("bio")
const twitter = document.getElementById("twitter")
const publicRepos = document.getElementById("publicrepos")
const followers = document.getElementById("followers")
const following = document.getElementById("following")
const created = document.getElementById("created")
const updated = document.getElementById("updated")


function nameCheck() {
    error.classList.add("empty");
    if (searchUser.value !== "octocat") {
        error.textContent = "No GitHub profile currently found!"

        nameAcc.textContent = "";
        avatar.src = "";
        id.textContent = "";
        urlAcc.textContent = "";
        company.textContent = "";
        blog.textContent = "";
        locate.textContent = "";
        publicRepos.textContent = "";
        followers.textContent = "";
        following.textContent = "";
        created.textContent = "";
        updated.textContent = "";
    }
    else {
        error.textContent = ""
    }
}


//Change sign to open or close
searchButton.addEventListener("click", function () {
    if (searchUser.value === "octocat") {
        error.textContent = ""
        //Fetch
        const url = 'https://api.github.com/users/octocat';
        const data = fetch(url)
            .then((response) => {
                console.log(response.status, response.ok);
                return response.json();
            })
            .then((data) => {
                nameAcc.textContent = data.name;
                avatar.src = data.avatar_url;
                // login.textContent = data.login;
                id.textContent = "ID: " + data.id;
                // node_id.textContent = "node_id: " + data.node_id;
                urlAcc.textContent = data.url;
                // type.textContent = "type: " + data.type;
                // admin.textContent = "admin: " + data.site_admin;
                company.textContent = data.company;
                blog.textContent = data.blog;
                locate.textContent = data.location;
                // email.textContent = "email: " + data.email;
                // hireable.textContent = "hireable: " + data.hireable;
                // bio.textContent = "bio: " + data.bio;
                // twitter.textContent = "twitter: " + data.twitter_username;
                publicRepos.textContent = data.public_repos + " public repos";
                followers.textContent = data.followers + " followers";
                following.textContent = data.following + " currently following";
                // created.textContent = "Created at " + data.created_at;
                // updated.textContent = "Updated at " + data.updated_at;
                return data
            })
        console.log(data);

    }
    else {
        nameCheck()
    }

});


nameCheck()

