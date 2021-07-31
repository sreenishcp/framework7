import Token from "./Token"
import AppStorage from "./AppStorage"

class Auth {

    logout() {
        AppStorage.clear();
        window.location = '/login';
    }

    hasToken() {
        const token = AppStorage.getToken();
        if (token) {
            return Token.isValid(token) ? true : false;
        }
        return false;
    }

    loggedIn() {
        return this.hasToken();
    }

    name() {
        if (this.loggedIn()) {
            return AppStorage.getUser();
        }
    }
    
    role() {
        if (this.loggedIn()) {
            return AppStorage.getRole();
        }
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }

    own(id) {
        return this.id() == id
    }
}

export default Auth = new Auth();