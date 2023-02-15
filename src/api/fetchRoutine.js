const getAllRoutines = async () => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines')
        const result = await response.json();
        console.log(result)
        return result;
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getAllRoutines
}