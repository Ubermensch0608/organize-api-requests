import { API_SWITCHES } from "src/data/apiSwitch";
import { ApiSwitchTitle } from "./type";

interface Props {
  apiTitle: ApiSwitchTitle;
  onSwitchApiTitle: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ApiSwitch = ({ apiTitle, onSwitchApiTitle }: Props) => {
  return (
    <>
      <label>Select API Type: </label>
      <select value={apiTitle} onChange={onSwitchApiTitle}>
        {API_SWITCHES.map((apiSwitch) => (
          <option key={apiSwitch.id}>{apiSwitch.title}</option>
        ))}
      </select>
    </>
  );
};
export default ApiSwitch;
