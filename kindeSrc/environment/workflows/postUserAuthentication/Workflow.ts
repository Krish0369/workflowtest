import type { onM2mTokenGeneratedEvent } from "@kinde/infrastructure";
import { m2mTokenCustomClaims } from "@kinde/infrastructure";

export const workflowSettings = {
  id: "addExternalOrgId",
  trigger: "m2m:token_generation",
  bindings: { "kinde.m2mToken": {} }
};

export default async function (event: onM2mTokenGeneratedEvent) {
  const m2mToken = m2mTokenCustomClaims<{ external_org_id: string }>();
  m2mToken.external_org_id = "acme-42";
};
