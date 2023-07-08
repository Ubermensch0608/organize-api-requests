import { useState } from "react";

import "./App.css";
import ApiSwitch from "./apiSwitch/ApiSwitch";
import type { ApiSwitchTitle } from "./apiSwitch/type";
import Requests from "./requests/Requests";
import useUserAuth from "src/hooks/useUserAuth";

const App = () => {
  const [placeholders, setPlaceholders] = useState<any[]>([]);
  const [apiSwitch, setApiSwitch] = useState<ApiSwitchTitle>("JSONPlaceholder");
  const { isLoggedIn, onLogin, onLogout } = useUserAuth();

  const updatePlaceholder = (fetchedPlaceholdersFromForm: any[]) => {
    setPlaceholders(fetchedPlaceholdersFromForm);
  };

  const switchApiType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedApiTitle = e.target.value as ApiSwitchTitle;
    setApiSwitch(selectedApiTitle);
  };

  return (
    <>
      <main className="wrapper">
        <header>
          <nav>
            {isLoggedIn ? (
              <button type="button" onClick={onLogout}>
                로그아웃
              </button>
            ) : (
              <button type="button" onClick={onLogin}>
                로그인
              </button>
            )}
          </nav>
        </header>
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
          </div>
          <div>
            <h3>Request header</h3>
          </div>
          <ul>
            <h3>Fetched Data</h3>
            {placeholders.map((placeholder) => (
              <li key={placeholder.id}>{JSON.stringify(placeholder)}</li>
            ))}
          </ul>
        </article>
      </main>
    </>
  );
};

export default App;
