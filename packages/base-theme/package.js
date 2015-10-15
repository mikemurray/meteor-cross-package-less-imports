Package.describe({
  name: "mikemurray:base-theme",
  summary: "Base Theme",
  version: "0.1.0"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2");

  // From meteor
  api.use("less");

  // From this package
  api.addFiles("variables.less", "client");
});
