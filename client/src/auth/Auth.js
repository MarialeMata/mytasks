class Auth {
  static loggedIn() {
    return !!(localStorage.getItem('jwt'));
  }

  static logout() {
    localStorage.clear();
  }
}

export default Auth;