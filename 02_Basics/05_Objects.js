//Destructring values
course={
    coursename:"JS",
    price:999,
    courseInstructor:"Hitesh"
}
//Accessing values
const {courseInstructor:Instructor}=course
console.log(Instructor);
//REACT
// const navbar=({company})=>{

// }
// navbar(company="Hitesh")

//A.P.Is
// Earlier values come in format of XML but now in JSON(same as object only difference is that there is no name unlike the object and both the keys and values are in String format(other than Strings are in normal form for keys) )

// {
//     "name":"Priyanshu",
//     "coursename":"JS",
//     "price":999,
// }
//Example of API
// {
//     "login": "mojombo",
//     "id": 1,
//     "node_id": "MDQ6VXNlcjE=",
//     "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/mojombo",
//     "html_url": "https://github.com/mojombo",
//     "followers_url": "https://api.github.com/users/mojombo/followers",
//     "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
//     "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
//     "organizations_url": "https://api.github.com/users/mojombo/orgs",
//     "repos_url": "https://api.github.com/users/mojombo/repos",
//     "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/mojombo/received_events",
//     "type": "User",
//     "user_view_type": "public",
//     "site_admin": false
//   },