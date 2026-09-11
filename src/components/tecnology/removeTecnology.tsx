interface Props {
  technology: string;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const RemoveTecnology = ({ technology, selected, setSelected }: Props) => {
  const removeTechnology = () => {
    setSelected(selected.filter((item) => item !== technology));
  };

  return (
    <div>
      <button
        onClick={removeTechnology}
        className="text-red-500 text-2xl hover:text-red-700"
      >
        ×
      </button>
    </div>
    
  );
};

export default RemoveTecnology;
