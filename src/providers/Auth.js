const AuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        AuthProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        AuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

export default AuthProvider;