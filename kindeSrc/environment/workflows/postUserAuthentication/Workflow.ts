import {
  onPostAuthenticationEvent,
  WorkflowSettings,
  WorkflowTrigger,
} from "@kinde/infrastructure";

// The setting for this workflow
export const workflowSettings: WorkflowSettings = {
  bindings: {},
  id: "onPostAuthenticationEvent",
  trigger: WorkflowTrigger.PostAuthentication,
};

// The workflow code to be executed when the event is triggered
export default async function (event: any) {
  kinde.m2mToken.setCustomClaim("external_org_id", "acme-42");
}
