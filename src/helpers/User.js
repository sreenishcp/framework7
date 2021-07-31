import Token from "./Token"
import AppStorage from "./AppStorage"

class User {
    login(data) {
        data.app = 'no';
        axios.post('/api/login', data)
            .then(response => {
                this.responseAfterLogin(response);
            })
            .catch(error => {
                this.isLoading = false;
                EventBus.$emit('authenticationError', error.response.data.message)
            })
    }

    responseAfterLogin(response) {
        const username = response.data.user.name;
        const role = response.data.user.role;
        const access_token = response.data.token;
        if (Token.isValid(access_token)) {
            AppStorage.store(access_token, username, role);
                this.isLoading = false;
                window.location = '/';
        }
    }
}

export default User = new User();