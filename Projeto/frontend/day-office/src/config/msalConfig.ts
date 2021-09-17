const msalConfig = {        
    auth: {
        clientId: "d4be78c3-be79-442b-80a1-73ad8674dd71",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000/"
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};
const loginRequest = {
    scopes: ["openid", "profile", "Calendars.Read", "Calendars.ReadWrite"]
};
export default { msalConfig, loginRequest };