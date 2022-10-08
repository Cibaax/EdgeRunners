import axios from "axios";

export const allCharacters=async(state)=>{
    const request = await axios.get('https://edgerunners-927aa-default-rtdb.firebaseio.com/characters.json')
    state(request.data)

} 

export const singleCharacter = async(id, state) =>{
    const request = await axios.get(`https://edgerunners-927aa-default-rtdb.firebaseio.com/characters/${id}.json`)
    state(request.data)
}

export const allEpisodes=async(state)=>{
    const request =await axios.get('https://edgerunners-927aa-default-rtdb.firebaseio.com/episodes.json')
    state(request.data)
}
export const singleEpisode= async(id, state)=>{
    const request =await axios.get(`https://edgerunners-927aa-default-rtdb.firebaseio.com/episodes/${id}.json`)
    state(request.data)
}