# Blog made with Vue.js 

This is responsive blog that uses Vue.js and API back-end made in Laravel .
The scrum board can be found on  [ Trello](https://trello.com/b/PNoFE0Nk/week-7-api-vuejs) 

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


## Feature description

### API (Laravel)
At this moment 11 api calls are utilized. 

### Login function

The login authentication is done via api-token. After user is loge-in the token is stored in local storage. 
All routes that require post/delete/update are login-protected 

### Search function
A  instant search functionality  with [ Algolia drivers](https://www.algolia.com/) 

