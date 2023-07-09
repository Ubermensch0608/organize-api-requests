import { useAtomValue } from "jotai";
import { responseBodyState, responseConfigsAndHeadersState } from "src/atom";

const Responses = () => {
  const [responseHeaders, responseConfigs] = useAtomValue(
    responseConfigsAndHeadersState
  );
  const responseBody = useAtomValue(responseBodyState);

  return (
    <>
      <div>
        <h3>Response header</h3>
        <ul>
          <li>{JSON.stringify(responseHeaders)}</li>
          <li>{JSON.stringify(responseConfigs)}</li>
        </ul>
      </div>
      <ul>
        <h3>Fetched Data</h3>
        {responseBody.map((placeholder) => (
          <li key={placeholder.id}>{JSON.stringify(placeholder)}</li>
        ))}
      </ul>
    </>
  );
};
export default Responses;
