import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@scorp/tracker",
  app: () => System.import("@scorp/tracker"),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@scorp/navbar",
//   app: () => System.import("@scorp/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
