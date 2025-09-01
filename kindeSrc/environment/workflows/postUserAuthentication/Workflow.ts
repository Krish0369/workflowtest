import {
  onM2MTokenGeneratedEvent,
  WorkflowSettings,
  WorkflowTrigger,
} from "@kinde/infrastructure";

// The setting for this workflow
export const workflowSettings: WorkflowSettings = {
  id: "addExternalOrgId",
  bindings: { "kinde.accessToken": {} },
  trigger: WorkflowTrigger.M2MTokenGeneration,
};

// The workflow code to be executed when the event is triggered
export default async function Workflow(event: onM2MTokenGeneratedEvent) {
  console.log("Hello world");
}
// import { accessTokenCustomClaims, onUserTokenGeneratedEvent } from "@kinde/infrastructure";

// export const workflowSettings = {
//   id: "addExternalOrgId",
//   trigger: "m2m:token_generation",
//   bindings: { "kinde.accessToken": {} },
// };

// export default async function (event: onUserTokenGeneratedEvent) {
//   const accessToken = accessTokenCustomClaims<{ foo_bar: string }>();
//   accessToken.foo_bar = "your_value_here";
// }


// import type { onM2mTokenGeneratedEvent } from "@kinde/infrastructure";

// export const workflowSettings = {
//   id: "addExternalOrgId",
//   trigger: "m2m:token_generation",
//   bindings: { "kinde.m2mToken": {} }
// };

// export default async function (event: onM2mTokenGeneratedEvent) {
//   kinde.m2mToken.setCustomClaim("external_org_id", "acme-43");
//   console.log("foo test");
// }
