import { useAtomValue } from "jotai";
import { requestHeadersState } from "src/atom";

export const Headers = () => {
  const requestHeaders = useAtomValue(requestHeadersState);

  return (
    <div>
      <h3>Request header</h3>
      {requestHeaders && JSON.stringify(requestHeaders)}
    </div>
  );
};
