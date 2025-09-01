import { accessTokenCustomClaims, onUserTokenGeneratedEvent } from "@kinde/infrastructure";

export const workflowSettings = {
  id: "your-unique-workflow-id", // Replace with the actual Workflow ID assigned in the Kinde dashboard
  bindings: { "kinde.accessToken": {} },
};

export default async function (event: onUserTokenGeneratedEvent) {
  const accessToken = accessTokenCustomClaims<{ foo_bar: string }>();
  accessToken.foo_bar = "your_value_here";
}
