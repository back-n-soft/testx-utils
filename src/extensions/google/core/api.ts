import {
  Credentials,
  OAuth2Client,
  OAuth2ClientOptions,
} from 'google-auth-library';

export class GoogleCore {
  protected oAuth2Client: OAuth2Client;

  /**
   * Create to OAuth2 client to login to google products
   *
   * @param oAuth2ClientOptions
   * @param credentials
   * @return Promise<void>
   */
  login(
    oAuth2ClientOptions: OAuth2ClientOptions,
    credentials: Credentials
  ): Promise<void> {
    return new Promise<void>((resolve) => {
      this.oAuth2Client = new OAuth2Client(oAuth2ClientOptions);
      this.oAuth2Client.setCredentials(credentials);
      resolve();
    });
  }
}
