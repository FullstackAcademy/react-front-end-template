const fetchLogin = async(username,password) =>{
    const login = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: { username: username, password: password }
        })
      })
      return login;
}
const fetchUser = async() =>{
    const user = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      return user;
}
const fetchRegister = async(username, password) =>{
    const register = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            token: username, user: { username: username, password: password }
        })
    })
    return register;
}

module.exports = {
    fetchLogin,
    fetchUser,
    fetchRegister
}