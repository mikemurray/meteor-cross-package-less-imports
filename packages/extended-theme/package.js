Package.describe({
  name: "mikemurray:extended-theme",
  summary: "Extended Theme - Extends Base Theme",
  version: "0.1.0"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2");

  // From meteor
  api.use("less");

  // From us
  api.use("mikemurray:base-theme");

  // From this package
  api.addFiles("container.less", "client");
});
