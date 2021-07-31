import Auth from './Auth';

class Exception {
    handle(error) {
        this.isExipred(error.response.data.error)
    }

    isExipred(error) {
        if (error == 'Token is invalid') {
            Auth.logout();
        }
    }
}

export default Exception = new Exception()