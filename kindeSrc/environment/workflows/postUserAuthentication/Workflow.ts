import {
  onPostAuthenticationEvent,
  WorkflowSettings,
  WorkflowTrigger,
} from "@kinde/infrastructure";

// The setting for this workflow
export const workflowSettings: WorkflowSettings = {
  bindings: { "kinde.m2mToken": {} }
  id: "onPostUserAuthentication",
  trigger: WorkflowTrigger.PostAuthentication,
};

// The workflow code to be executed when the event is triggered
export default async function Workflow(event: onPostAuthenticationEvent) {
  console.log("Hello world");
  kinde.m2mToken.setCustomClaim("external_org_idz", "acme-42")
}

