(function () {
  // properties

  const configPreferences = require("../npm/processConfigXml.js");
  const iosPlist = require("../ios/updatePlist.js");
  const iosAssociatedDomains = require("../ios/updateAssociatedDomains.js");
  const iosHeaderPaths = require("../ios/updateHeaderPaths.js");
  const IOS = "ios";

  // entry
  module.exports = run;

  // builds before platform config
  function run(context) {
    const preferences = configPreferences.read(context);
    const platforms = context.opts.cordova.platforms;

    platforms.forEach(platform => {
      if (platform === IOS) {
        iosPlist.addBranchSettings(preferences);
        iosAssociatedDomains.addAssociatedDomains(preferences);
        iosHeaderPaths.addHeaderPaths();
      }
    });
  }
})();
