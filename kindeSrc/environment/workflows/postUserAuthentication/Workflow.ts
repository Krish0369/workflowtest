export const workflowSettings = {
  id: "addExternalOrgId",
  trigger: "m2m:token_generation",
  bindings: { "kinde.m2mToken": {} }
};

export default async function (event: any) {
  kinde.m2mToken.setCustomClaim("external_org_id", "acme-42");
}
