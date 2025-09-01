import {
  onM2MTokenGeneratedEvent,
  WorkflowSettings,
  WorkflowTrigger,
} from "@kinde/infrastructure";

// The setting for this workflow
export const workflowSettings: WorkflowSettings = {
  bindings: { "kinde.m2mToken": {} },
  id: "onM2MTokenGeneration",
  trigger: WorkflowTrigger.M2MTokenGeneration,
};

// The workflow code to be executed when the event is triggered
export default async function Workflow(event: onM2MTokenGeneratedEvent) {
  kinde.m2mToken.setCustomClaim("external_org_id", "acme-42");
}
