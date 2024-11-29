export async function GET(){
    // TO DO
    // fix fetching
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing')
    let res_data = response.json()
    return Response.json(res_data)
}