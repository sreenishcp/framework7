import AppStorage from "./AppStorage";

class Token {

    isValid(token) {
        const payload = this.payload(token);
        if (payload) {
            const datetime = Math.floor(Date.now() / 1000);
            if (payload.exp >= datetime) {
                return true;
            } else {
                AppStorage.clear();
                return false;
            }
        }
        AppStorage.clear();
        return false;
    }

    payload(token) {
        const payload = token.split('.')[1];
        return this.decode(payload);
    }

    decode(payload) {
        if (this.isBase64(payload)) {
            return JSON.parse(atob(payload))
        }
        return false
    }

    isBase64(str) {
        try {
            return btoa(atob(str)).replace(/=/g, "") == str
        } catch (err) {
            return false
        }
    }

}

export default Token = new Token();