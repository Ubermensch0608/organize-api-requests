import { useState } from "react";

import Form from "./Form";
import "./App.css";
import ApiSwitch from "./apiSwitch/ApiSwitch";
import type { ApiSwitchTitle } from "./apiSwitch/type";
import Requests from "./requests/Requests";

const App = () => {
  const [placeholders, setPlaceholders] = useState<any[]>([]);
  const [apiSwitch, setApiSwitch] = useState<ApiSwitchTitle>("Pokemon");

  const updatePlaceholder = (fetchedPlaceholdersFromForm: any[]) => {
    setPlaceholders(fetchedPlaceholdersFromForm);
  };

  const switchApiType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedApiTitle = e.target.value as ApiSwitchTitle;
    setApiSwitch(selectedApiTitle);
  };

  return (
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
          <Requests apiTitle={apiSwitch} onUpdateData={updatePlaceholder} />

          <div></div>
          <div>
            <h5 className="eventTypeHeading">onSubmit</h5>
            <Form onUpdatePlaceholders={updatePlaceholder} />
          </div>
        </div>
        <ul>
          <h3>Fetched Data</h3>
          {placeholders.map((placeholder) => (
            <li key={placeholder.id}>{JSON.stringify(placeholder)}</li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default App;
