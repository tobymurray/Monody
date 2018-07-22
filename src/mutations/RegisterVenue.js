import axios from 'axios'

axios.defaults.baseURL = 'https://monody.tobymurray.ca:3000/graphql';
axios.defaults.headers.post['Content-Type'] = 'application/graphql';

export default function registerVenue(
  name,
  leadTime,
  applicationDates,
  description,
  venueAddress1,
  venueAddress2,
  venuePostalCode,
  venueCity,
  venueCountry,
  contactFirstName,
  contactLastName,
  contactPhoneNumber,
  contactEmail,
  contactFacebook,
  contactInstagram,
  contactTwitter,
  contactWebsite,
  contactAddress1,
  contactAddress2,
  contactPostalCode,
  contactCity,
  contactCountry) {

  const mutation = `
    mutation {
      registerVenue( input: {
        name: "${name === undefined ? "" : name}"
        leadTime: "${leadTime === undefined ? "" : leadTime}"
        applicationDates: "${applicationDates === undefined ? "" : applicationDates}"
        description: "${description === undefined ? "" : description}"
        venueAddress1: "${venueAddress1 === undefined ? "" : venueAddress1}"
        venueAddress2: "${venueAddress2 === undefined ? "" : venueAddress2}"
        venuePostalCode: "${venuePostalCode === undefined ? "" : venuePostalCode}"
        venueCity: "${venueCity === undefined ? "" : venueCity}"
        venueCountry: "${venueCountry === undefined ? "" : venueCountry}"
        contactFirstName: "${contactFirstName === undefined ? "" : contactFirstName}"
        contactLastName: "${contactLastName === undefined ? "" : contactLastName}"
        contactPhoneNumber: "${contactPhoneNumber === undefined ? "" : contactPhoneNumber}"
        contactEmail: "${contactEmail === undefined ? "" : contactEmail}"
        contactFacebook: "${contactFacebook === undefined ? "" : contactFacebook}"
        contactInstagram: "${contactInstagram === undefined ? "" : contactInstagram}"
        contactTwitter: "${contactTwitter === undefined ? "" : contactTwitter}"
        contactWebsite: "${contactWebsite === undefined ? "" : contactWebsite}"
        contactAddress1: "${contactAddress1 === undefined ? "" : contactAddress1}"
        contactAddress2: "${contactAddress2 === undefined ? "" : contactAddress2}"
        contactPostalCode: "${contactPostalCode === undefined ? "" : contactPostalCode}"
        contactCity: "${contactCity === undefined ? "" : contactCity}"
        contactCountry: "${contactCountry === undefined ? "" : contactCountry}"
      }) {
        venue {
          id
          name
          contactPerson
          address
          leadTime
          applicationDates
          description
        }
      }
    }
    `

  axios.post('', mutation
  ).then(function (response) {
    console.log(response);
    if (response.data.errors !== undefined && response.data.errors.length !== 0) {
      alert(response.data.errors.map(error => error.message))
    } else {
      alert("Successfully created a venue!")
    }
  }).catch(function (error) {
    console.log("Method failed with error:", error)
    console.log("   specific response is: ", error.resposne)
  });
}