

export async function GET(){
    const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {headers})
    let res_data = response.json()
    console.log(res_data)
    return Response.json(res_data)
}