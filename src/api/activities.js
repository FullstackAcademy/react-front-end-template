// const viewActivity= async () =>{
//     try {
//         const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           }).then(response => response.json())
//             .then(result => {
//               console.log(result);
//             })
//             const result = await response.json()
//             console.log(result);
//         return result;
//     } catch (err) {
//         console.err(err);
//     }
// }
// module.exports = {
//     viewActivity
// }