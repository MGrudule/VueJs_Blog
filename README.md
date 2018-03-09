# Blog made with Vue.js 

This is responsive blog that uses Vue.js and API back-end made in Laravel .
The scrum board can be found on  [ Trello](https://trello.com/b/PNoFE0Nk/week-7-8-api-vuejs) 

## Functions

### User
* Read articles ( [ Example API call](https://peaceful-dusk-59248.herokuapp.com/api/articles) )
* Login/Register
* Comment when loged-in
* Search articles

### Admin
* Post articles
* Edit/Update articles
* Delete articles
* Add/Edit categories
* Edit profile


## Feature description

### API (Laravel)
#### Routes requiring authorization
* post /articles/{article}/comment
* put /auth/articles/{article}
* post /auth/articles
* delete /categories/{category}
* put /categories/{category}
* post /categories'
* delete /auth/articles/{article}
* get /profile
* put /profile
#### Routes to login/logut
* post /login
* post /register
* post /logout
#### Open routes to get content
* get /articles
* get /articles/{article}
* get /comments
* get /comments/{comment}
* get /categories
* get /categories/{category}

### Login function

The login authentication is done via api-token. After user is loge-in the token is stored in local storage. 
All routes that require post/delete/update are login-protected 

### Search function
A  instant search functionality  with [ Algolia drivers](https://www.algolia.com/) 
### Layout & Design

User can adjust font size with a range slider on top of the page. The website is mobile first and all components are adjusted to respond to changing screen size

