import React, { useState } from "react";
import { Image, Menu } from "@fluentui/react-northstar";
import "./Welcome.css";
import { EditCode } from "./EditCode";
import { AzureFunctions } from "./AzureFunctions";
import { Graph } from "./Graph";
import { CurrentUser } from "./CurrentUser";
import { useTeamsFx } from "./lib/useTeamsFx";
import { TeamsUserCredential } from "@microsoft/teamsfx";
import { useData } from "./lib/useData";
import { Deploy } from "./Deploy";
import { Publish } from "./Publish";

export function Welcome(props) {
  const { showFunction, environment } = {
    showFunction: true,
    environment: window.location.hostname === "localhost" ? "local" : "azure",
    ...props,
  };
  const friendlyEnvironmentName =
    {
      local: "local environment",
      azure: "Azure environment",
    }[environment] || "local environment";

  const steps = ["local", "azure", "publish"];
  const friendlyStepsName = {
    local: "1. Programar uma prova",
    azure: "2. Programar notificações",
    publish: "3. Visualizar calendário de provas",
  };
  const [selectedMenuItem, setSelectedMenuItem] = useState("local");
  const items = steps.map((step) => {
    return {
      key: step,
      content: friendlyStepsName[step] || "",
      onClick: () => setSelectedMenuItem(step),
    };
  });

  const { isInTeams } = useTeamsFx();
  const userProfile = useData(async () => {
    const credential = new TeamsUserCredential();
    return isInTeams ? await credential.getUserInfo() : undefined;
  })?.data;
  const userName = userProfile ? userProfile.displayName : "";
  return (
    <div className="welcome page">
      <div className="narrow page-padding">
        <Image src="hello.png" />
        <h1 className="center">Gerenciamento de provas</h1>
        <Menu defaultActiveIndex={0} items={items} underlined secondary />
        <div className="sections">
          {selectedMenuItem === "local" && (
            <div>
              <EditCode showFunction={showFunction} />
              {isInTeams && <CurrentUser userName={userName} />}
              <Graph />
              {showFunction && <AzureFunctions />}
            </div>
          )}
          {selectedMenuItem === "azure" && (
            <div>
              <Deploy />
            </div>
          )}
          {selectedMenuItem === "publish" && (
            <div>
              <Publish />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
