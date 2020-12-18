import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@scorp/navbar",
  app: () => System.import("@scorp/navbar"),
  activeWhen: ["/"],
});
registerApplication({
  name: "@scorp/tracker",
  app: () => System.import("@scorp/tracker"),
  activeWhen: ["/tracker"],
});
registerApplication({
  name: "@scorp/main-page",
  app: () => System.import("@scorp/main-page"),
  activeWhen: ["/main"],
});
registerApplication({
  name: "@scorp/pcs",
  app: () => System.import("@scorp/pcs"),
  activeWhen: ["/pcs"],
});

registerApplication({
  name: "@team-6/additional-duty-tracker",
  app: () => System.import("@team-6/additional-duty-tracker"),
  activeWhen: ["/duties"],
});

// registerApplication({
//   name: "@scorp/navbar",
//   app: () => System.import("@scorp/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
