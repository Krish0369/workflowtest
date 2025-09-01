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


import type { onM2mTokenGeneratedEvent } from "@kinde/infrastructure";

export const workflowSettings = {
  id: "addExternalOrgId",
  trigger: "m2m:token_generation",
  bindings: { "kinde.m2mToken": {} }
};

export default async function (event: onM2mTokenGeneratedEvent) {
  kinde.m2mToken.setCustomClaim("external_org_idz", "acme-43");
}
