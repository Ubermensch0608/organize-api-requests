import { ApiSwitchTitle } from "../apiSwitch/type";
import JsonPlaceholderRequests from "./JsonPlaceholderRequests";
import PokemonRequests from "./PokemonRequests";
import StarWarsRequests from "./StarWarsRequests";

interface Props {
  apiTitle: ApiSwitchTitle;
  onUpdateData: (fetchedPlaceholdersFromForm: any[]) => void;
}

const Requests = ({ apiTitle, onUpdateData }: Props) => {
  let content = <JsonPlaceholderRequests onUpdateData={onUpdateData} />;

  if (!apiTitle) return null;

  if (apiTitle === "Pokemon") {
    content = <PokemonRequests onUpdateData={onUpdateData} />;
  } else if (apiTitle === "StarWars") {
    content = <StarWarsRequests />;
  }

  return content;
};
export default Requests;
