const GET_PROFILES = 'http://localhost:5000'

export function getProfiles(){
	return fetch(GET_PROFILES)
    .then(res=>res.json())
    .catch(err=>{
      console.log(err)
    })
}

