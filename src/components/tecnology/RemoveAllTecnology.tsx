interface Props {
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const RemoveAllTecnology = ({ setSelected }: Props) => {
  const removeAllTechnology = () => {
    setSelected([]);
  };

  return (
    <button onClick={removeAllTechnology} className="btn btn-error w-full mt-4">
      Remove All
    </button>
  );
};

export default RemoveAllTecnology;
