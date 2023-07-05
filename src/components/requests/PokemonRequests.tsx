interface RequestsProps {
  onUpdateData: (fetchedPlaceholdersFromForm: any[]) => void;
}

const PokemonRequests = ({ onUpdateData }: RequestsProps) => {
  return (
    <div>
      <h4>Pokemon APIs</h4>
    </div>
  );
};
export default PokemonRequests;
