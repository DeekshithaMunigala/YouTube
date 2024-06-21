const Buttons = ({ name }) => {
  return (
    <div>
      <button className="mr-4 text-sm px-3 py-1 rounded-lg bg-gray-200">
        {name}
      </button>
    </div>
  );
};

export default Buttons;
