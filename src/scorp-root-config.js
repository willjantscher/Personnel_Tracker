import { registerApplication, start } from "single-spa";

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

// registerApplication({
//   name: "@scorp/navbar",
//   app: () => System.import("@scorp/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
