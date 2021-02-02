const uaup = require('uaup-js');

const defaultStages = {
    Checking: "Checking for updates...",
    Found: "Update found",
    NotFound: "No updates found",
    Donwloading: "Downloading...",
    Unzipping: "Installing...",
    Cleaning: "Finalizing...",
    Launch: "Launching"
};

const updateOptions = {
    // useGithub: true, // {Default is true} [Optional] Only Github is Currenlty Supported.
    gitRepo: "auto-updater", // [Required] Your Repo Name
    gitUsername: "HPortuga",  // [Required] Your GitHub Username.
    // isGitRepoPrivate: false,  // {Default is false} [Optional] If the Repo is Private or Public  (Currently not Supported).
    // gitRepoToken: "abc123",  // {Default is null} [Optional] The Token from GitHub to Access a Private Repo.  Only for Private Repos.

    appName: "auto-updater", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "auto-updater.exe", //[Required] The Executable of the Application to be Run after updating.

    // appDirectory: "/path/to/application", //{Default is "Application Data/AppName"} [Optional]  Where the app will receide, make sure your app has permissions to be there.
    // versionFile: "/path/to/version.json", // {Default is "Application directory/settings/version.json"} [Optional] The Path to the Local Version File.
    // tempDirectory: "/tmp", // {Default is "Application directory/tmp"} [Optional] Where the Update archive will download to.

    progressBar: document.getElementById("download"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
    label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
    // forceUpdate: false, // {Default is false} [Optional] If the Application should be forced updated.  This will change to true if any errors ocurr while launching.
    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
};

uaup.Update(updateOptions);