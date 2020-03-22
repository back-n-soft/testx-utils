import * as readline from 'readline';
import { google } from 'googleapis';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Give the Oauth2.0 JSON credentials: ', (credentialsString) => {
  const credentials = JSON.parse(credentialsString);
  const {
    web: { client_id, client_secret, redirect_uris },
  } = credentials;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  rl.question('Enter the code from that page: ', (code) => {
    rl.close();
    oAuth2Client
      .getToken(code)
      .then((res) =>
        console.log(JSON.stringify({ ...credentials, tokens: res.tokens }))
      )
      .catch(console.log);
  });
});
