import { useState } from "react";
import { useAtomValue } from "jotai";

import GNB from "src/layouts/GNB";
import { requestHeadersState } from "src/atom";
import ApiSwitch from "./apiSwitch/ApiSwitch";
import type { ApiSwitchTitle } from "./apiSwitch/type";
import "./App.css";
import Responses from "./response/Responses";
import EventContainer from "./events/EventContainer";
import { Headers } from "./requests/Headers";

const App = () => {
  const [apiSwitch, setApiSwitch] = useState<ApiSwitchTitle>("JSONPlaceholder");

  const switchApiType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedApiTitle = e.target.value as ApiSwitchTitle;
    setApiSwitch(selectedApiTitle);
  };

  return (
    <>
      <GNB />
      <main className="wrapper">
        <article>
          <header>
            <h1>
              How to organize{" "}
              <span className="highlightPurple">API Requests</span> on{" "}
              <span className="highlightOrange">Frontend</span>
            </h1>
          </header>
          <div>
            <h3>Requests</h3>
            <ApiSwitch apiTitle={apiSwitch} onSwitchApiTitle={switchApiType} />
            <EventContainer />
          </div>
          <Headers />
          <Responses />
        </article>
      </main>
    </>
  );
};

export default App;
