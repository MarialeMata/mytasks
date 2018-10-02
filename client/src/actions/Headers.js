class Headers {
  
  static getGetHeaders() {
    return {
      'AUTHORIZATION': `Bearer ${localStorage.getItem('jwt')}`,
      'X-Key-Inflection': 'camel'
    }
  }

  static getPostHeadersNoAuth() {
    return {
      'Content-Type': 'application/json',
      'X-Key-Inflection': 'snake'
    }
  }

  static getPostHeaders() {
    return {
      'AUTHORIZATION': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
      'X-Key-Inflection': 'snake'
    }
  }

  static getPutHeaders() {
    return {
      'AUTHORIZATION': `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
      'X-Key-Inflection': 'snake'
    }
  }

  static getDeleteHeaders() {
    return {
      'AUTHORIZATION': `Bearer ${localStorage.getItem('jwt')}`
    }
  }
}

export default Headers;