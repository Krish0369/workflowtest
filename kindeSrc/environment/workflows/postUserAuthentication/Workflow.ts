export const workflowSettings = {
  bindings: { "kinde.m2mToken": {} }
};

export default async function (event: any) {
  kinde.m2mToken.setCustomClaim("external_org_id", "acme-42");
}
