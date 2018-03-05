var isLoggedMixin = {
  methods: {
    checkIfLogged(){
        var vm = this;
        return new Promise((resolve, reject) => {
          axios.get('https://peaceful-dusk-59248.herokuapp.com/api/user' , {
            headers: { Authorization: "Bearer " + localStorage.getItem('api_token') }
            })
             .then(response => {
                resolve(response.data.api_token == localStorage.getItem('api_token'));
             })
             .catch(error => {
                reject(error.response.data);
             });
        })

    }
  }
}
import axios from 'axios';
export default isLoggedMixin;
