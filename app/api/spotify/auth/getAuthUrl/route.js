import { redirect } from "next/navigation" 

const { randomBytes } = require("node:crypto")
const querystring = require('node:querystring')

let client_id = process.env.SPOTIFY_CLIENT_ID
let redirect_uri = 'http://localhost:3000/api/spotify/auth/callback'
let scopes = 'user-read-private user-read-email user-read-recently-played user-read-playback-state user-read-currently-playing'

export async function GET(){
    let state = randomBytes(8).toString("hex");
    let scope = scopes;
    
    redirect('https://accounts.spotify.com/authorize?'+ 
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }), 'replace');

}