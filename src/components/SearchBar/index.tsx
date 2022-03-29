import { Props } from "./props";

const SearchBar: React.FC<Props> = (props) => {
  const { onSearch } = props;

  return (
    <div className="pt-2 relative mx-auto text-gray-600 flex flex-row items-center">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full flex-grow"
        name="search"
        placeholder="Search Item"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
