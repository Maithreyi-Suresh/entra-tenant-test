// config.js
// Filled by the Entra/B2C team

window.msalSettings = {
  clientId: "13a102ca-c915-4897-8416-67ab0b262539", // example
  authority:
    "https://leapgenAIExternal.ciamlogin.com/leapgenAIExternal.onmicrosoft.com", 
  // For B2C/External, you usually use a policy-based URL like:
  // "https://<tenant>.ciamlogin.com/<tenant>.onmicrosoft.com/<flow_name>"

  redirectUri: "https://maithreyi-suresh.github.io/entra-tenant-test",

  // Optional, recommended for B2C:
  //knownAuthorities: ["leapgenAIExternal.ciamlogin.com"],
};



