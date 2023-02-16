const fetchLogin = async (username, password) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const result = await response.json()
        return result;
    } catch (error) {
        console.error(error)
    }
}
const fetchUser = async (token) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const result = await response.json()
        return result;
    } catch (error) {
        console.error(error)
    }
}
const fetchRegister = async (username, password) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        const result = await response.json()
        return result;
    } catch (error) {
        console.error(error);
    }
}

const getAllRoutines = async () => {
    try {
        const response = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/routines');
        const result = await response.json();
        console.log(result)
        return result 
    } catch (error) {
        console.error(error)
    }
}
module.exports = {
    fetchLogin,
    fetchUser,
    fetchRegister,
    getAllRoutines
}