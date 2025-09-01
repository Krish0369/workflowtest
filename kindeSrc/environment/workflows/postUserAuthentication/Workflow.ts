import { accessTokenCustomClaims, onUserTokenGeneratedEvent } from "@kinde/infrastructure";

export const workflowSettings = {
  bindings: { "kinde.accessToken": {} },
};

export default async function (event: onUserTokenGeneratedEvent) {
  const accessToken = accessTokenCustomClaims<{ foo_bar: string }>();
  accessToken.foo_bar = "your_value_here";
}
