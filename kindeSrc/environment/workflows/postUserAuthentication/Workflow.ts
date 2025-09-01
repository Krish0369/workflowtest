import type { onM2mTokenGeneratedEvent } from "@kinde/infrastructure";

export const workflowSettings = {
  id: "addExternalOrgId",
  trigger: "m2m:token_generation",
  bindings: { "kinde.m2mToken": {} }
};

export default async function (event: onM2mTokenGeneratedEvent) {
  kinde.m2mToken.setCustomClaim("external_org_idz", "acme-42");
}
