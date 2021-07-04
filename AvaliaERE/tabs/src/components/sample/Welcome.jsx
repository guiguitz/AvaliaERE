import React, { useState } from "react";
import { Image, Menu } from "@fluentui/react-northstar";
import "./Welcome.css";
import { EditCode } from "./EditCode";
import { AzureFunctions } from "./AzureFunctions";
import { P_prova } from "./P_prova";
import { CurrentUser } from "./CurrentUser";
import { useTeamsFx } from "./lib/useTeamsFx";
import { TeamsUserCredential } from "@microsoft/teamsfx";
import { useData } from "./lib/useData";
import { Notificacao } from "./Notificacao";
import { Calendario } from "./Calendario";

export function Welcome(props) {
  const { showFunction, environment } = {
    showFunction: true,
    environment: window.location.hostname === "localhost" ? "local" : "azure",
    ...props,
  };
  const friendlyEnvironmentName =
    {
      p_prova: "Ambiente local",
      notificao: "Azure environment",
    }[environment] || "local environment";

  const steps = ["p_prova", "notificao", "calendario"];
  const friendlyStepsName = {
    p_prova: "1. Programar uma prova",
    notificao: "2. Programar notificações",
    calendario: "3. Visualizar calendário de provas",
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
          {selectedMenuItem === "p_prova" && (
            <div>
              <EditCode showFunction={showFunction} />
              {isInTeams && <CurrentUser userName={userName} />}
              <P_prova />
              {showFunction && <AzureFunctions />}
            </div>
          )}
          {selectedMenuItem === "notificao" && (
            <div>
              <Notificacao />
            </div>
          )}
          {selectedMenuItem === "calendario" && (
            <div>
              <Calendario />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
