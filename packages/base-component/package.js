Package.describe({
  name: "mikemurray:base-component",
  summary: "A Base component that uses base-theme & extended-theme",
  version: "0.1.0"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2");

  // From meteor
  api.use("less");
  api.use("blaze-html-templates");

  // From us
  api.use("mikemurray:base-theme");
  api.use("mikemurray:extended-theme");

  // From this package
  api.addFiles("base-component.less", "client");
  api.addFiles("base-component.html", "client");
});
