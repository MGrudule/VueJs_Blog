# Blog made with Vue.js 

This is responsive blog that uses Vue.js and API back-end made in Laravel .
The scrum board can be found on  [ Trello](https://trello.com/b/PNoFE0Nk/week-7-8-api-vuejs) 
![Screenshot](https://github.com/MGrudule/VueJs_Blog/blob/master/Documentation/articles.gif)

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
![Screenshot](https://github.com/MGrudule/VueJs_Blog/blob/master/Documentation/categories.gif)

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

![Screenshot](https://github.com/MGrudule/VueJs_Blog/blob/master/Documentation/login.gif)


### Search function
A  instant search functionality  with [ Algolia drivers](https://www.algolia.com/) 

![Screenshot](https://github.com/MGrudule/VueJs_Blog/blob/master/Documentation/search.gif)

### Layout & Design

User can adjust font size with a range slider on top of the page. The website is mobile first and all components are adjusted to respond to changing screen size
![Screenshot](https://github.com/MGrudule/VueJs_Blog/blob/master/Documentation/responsive.gif)

