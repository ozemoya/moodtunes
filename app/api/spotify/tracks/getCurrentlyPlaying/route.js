import { getCurrentlyPlaying } from "@/app/lib/spotify"

export async function GET(request) {
    // Gets the user's currently playing track in spotify. 
    let response = await getCurrentlyPlaying()

    
    try {
        //Only take out the object we need and ignore everything else
        let { item } = await response.json()

        //Structure our response to things we need.
        //Can be updated later if the need arises
        let track = {
            "title": item.name,
            "album": item.album.name,
            "artists": getAllArtistNames(item.artists),
            "duration": Math.floor(item.duration_ms / 60000) + ':' + Math.floor((item.duration_ms / 1000) % 60).toString().padStart(2, '0') // hate long lines like this but if it works it works
        }
        return Response.json(track)
    } catch (error) {
        return Response.json({"error": "No currently playing track!"})
    }




}

function getAllArtistNames(artists) {

    let artistArray = []

    for (const element of artists) {
        artistArray.push(element.name)
    }

    return artistArray
}