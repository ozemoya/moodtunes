import { unstable_noStore } from "next/cache"

const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET  


// most of these functions will need to take user ids eventually in order to pass them through to our database.

/**
 * Sends a valid refresh token to spotify in order to get our access token to authorize everything else. This function should be called and it's value be stored before fetching from the spotify API.
 * @returns access_token
 */
export async function getAccessToken(){
    
    //eventually will take a refresh token as a parameter, but for now just uses the refresh token saved in our environment variables.

    // for some godforsaken reason next likes to cache api calls so I call this function in order to tell next to knock it off.
    unstable_noStore()

    // The actual fetch to get our access token.
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: "POST",
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token: SPOTIFY_REFRESH_TOKEN,
            client_id: SPOTIFY_CLIENT_ID
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'))
        }
      })


    const res_data = await response.json()
    return res_data.access_token
}


/**
 * 
 * @returns {response} A response containing the user's currently playing track.
 */
export async function getCurrentlyPlaying(){
    
    let access_token = await getAccessToken()

    let response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
            Authorization: 'Bearer ' + access_token
        }
    })


    return response
}