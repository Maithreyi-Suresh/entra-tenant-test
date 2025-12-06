window.msalSettings = {
  auth: {
    clientId: "13a102ca-c915-4897-8416-67ab0b262539",
    authority:
      "https://leapgenAIExternal.ciamlogin.com/leapgenAIExternal.onmicrosoft.com/SignupandSignIn", // replace with your actual flow name
    redirectUri: "https://maithreyi-suresh.github.io/entra-tenant-test",
    knownAuthorities: ["leapgenAIExternal.ciamlogin.com"],
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
  request: {
    scopes: ["openid", "profile", "email"]
  }
  
};









