class AppStorage {

    store(token, user, role) {
        this.storeToken(token);
        this.storeUser(user);
        this.storeRole(role);
    }

    clear() {
        this.removeToken();
        this.removeUser();
        this.removeRole();
        this.removeCountry();
        this.removeFacility();
    }

    storeFacility(country) {
        localStorage.setItem('facility', JSON.stringify(country));
    }

    removeFacility() {
        localStorage.removeItem('facility');
    }

    storeCountry(country) {
        localStorage.setItem('country', JSON.stringify(country));
    }

    removeCountry() {
        localStorage.removeItem('country');
    }

    storeToken(token) {
        localStorage.setItem('token', token);
    }

    removeToken() {
        localStorage.removeItem('token');
    }

    storeUser(user) {
        localStorage.setItem('user', user);
    }

    removeUser() {
        localStorage.removeItem('user');
    }

    storeRole(role) {
        localStorage.setItem('role', role);
    }

    removeRole() {
        localStorage.removeItem('role');
    }

    getToken() {
        return localStorage.getItem('token');
    }

    getUser() {
        return localStorage.getItem('user');
    }

    getRole() {
        return localStorage.getItem('role');
    }

    getCountry() {
        return JSON.parse(localStorage.getItem('country'));
    }

    getFacility() {
        return JSON.parse(localStorage.getItem('facility'));
    }

}

export default AppStorage = new AppStorage();