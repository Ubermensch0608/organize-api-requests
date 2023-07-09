import { useAtomValue } from "jotai";

import { apiSwitchTitleState } from "src/atom/title";
import JsonPlaceholderRequests from "../requests/JsonPlaceholderRequests";
import PokemonRequests from "../requests/PokemonRequests";
import StarWarsRequests from "../requests/StarWarsRequests";

const EventContainer = () => {
  const apiTitle = useAtomValue(apiSwitchTitleState);

  if (!apiTitle) return null;

  let content = <JsonPlaceholderRequests />;
  if (apiTitle === "Pokemon") {
    content = <PokemonRequests />;
  } else if (apiTitle === "StarWars") {
    content = <StarWarsRequests />;
  }

  return content;
};
export default EventContainer;
