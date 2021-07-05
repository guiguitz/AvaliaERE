import React from "react";
import { Button } from "@fluentui/react-northstar";
import { useGraph } from "./lib/useGraph";
import { ProfileCard } from "./ProfileCard";

export function P_prova() {
  const { loading, error, data, reload } = useGraph(
    async (graph) => {
      const profile = await graph.api("/me").get();
      let photoUrl = "";
      try {
        const photo = await graph.api("/me/photo/$value").get();
        photoUrl = URL.createObjectURL(photo);
      } catch {
        // Could not fetch photo from user's profile, return empty string as placeholder.
      }
      return { profile, photoUrl };
    },
    { scope: ["User.Read"] }
  );

  return (
    <div>
      {/* <h2>fucking test worked</h2>
      <p>Click below to authorize this app to read your profile photo using Microsoft Graph.</p>
      <Button primary content="Authorize" disabled={loading} onClick={reload} />
      {loading && ProfileCard(true)}
      {!loading && error && <div className="error">{error.toString()}</div>}
      {!loading && data && ProfileCard(false, data)} */}
    </div>
  );
}
