import axios from 'axios'

axios.defaults.baseURL = 'https://monody.tobymurray.ca:3000/graphql'; 
axios.defaults.headers.post['Content-Type'] = 'application/graphql';

export default function getVenues() {

  const mutation = `
  query {
    allVenues(first: null) {
      nodes {
        id,
        name,
        nodeId
      }
    }
  }
`

  return new Promise((resolve, reject) => {
    axios.post('', mutation
    ).then(function (response) {
      if (response.data.errors !== undefined && response.data.errors.length !== 0) {
        alert(response.data.errors.map(error => error.message))
        return reject(response.data.errors);
      }
      resolve(response.data.data.allVenues.nodes.map(m => {
        return {
          key: m.nodeId,
          text: m.name,
          value: m.name
        }
      }));
    }).catch(function (error) {
      console.log("Method failed with error:", error)
      console.log("   specific response is: ", error.resposne)
      reject(error);
    });
  })
}
