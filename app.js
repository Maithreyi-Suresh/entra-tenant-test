const msalConfig = {
  auth: {
    clientId: window.msalSettings.auth.clientId,
    authority: window.msalSettings.auth.authority,
    redirectUri: window.msalSettings.auth.redirectUri,
    knownAuthorities: window.msalSettings.auth.knownAuthorities,
  },
  cache: window.msalSettings.cache,
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

msalInstance.handleRedirectPromise().then(response => {
  if (response) {
    const claims = response.idTokenClaims || {};

    const firstName = claims.given_name || "(no first name)";
    const lastName = claims.family_name || "(no last name)";
    const email =
      claims.email ||
      claims.preferred_username ||
      (Array.isArray(claims.emails) ? claims.emails[0] : "(no email)");

    document.getElementById("user-info").innerHTML = `
      <pre>
{
  "firstName": "${firstName}",
  "lastName": "${lastName}",
  "email": "${email}"
}
      </pre>
    `;
  } else {
    msalInstance.loginRedirect(window.msalSettings.request);
  }
}).catch(error => {
  console.error("MSAL error", error);
});
