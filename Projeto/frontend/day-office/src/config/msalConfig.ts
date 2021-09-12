const msalConfig = {        
    auth: {
        clientId: "7fe17e92-914f-47b1-b31b-b0c3704ec007",
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