import { redirect } from "next/navigation"
const querystring = require('node:querystring')

const redirect_uri = 'http://localhost:3000/api/spotify/auth/callback'
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET 

export async function GET(request){
    
    let searchParams = request.nextUrl.searchParams
    let code = searchParams.get('code') || null
    let state = searchParams.get('state') || null

    if (state === null) {
        redirect('/#' +
          querystring.stringify({
            error: 'state_mismatch'
          }))
      } else {
        let authOptions = {
          url: 'https://accounts.spotify.com/api/token',
          form: {
            code: code,
            redirect_uri: redirect_uri,
            grant_type: 'authorization_code'
          },
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (new Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64'))
          },
          json: true
        }
        
        let response = await fetch(authOptions.url, {
          method: "post",
          body: new URLSearchParams(authOptions.form),
          headers: authOptions.headers
        })
        let res_data = await response.json()

        process.env.SPOTIFY_REFRESH_TOKEN = res_data.refresh_token

        return Response.json(res_data.refresh_token)

         
      }
}