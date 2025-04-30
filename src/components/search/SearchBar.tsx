import React, { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTerm = event.target.value;
      setSearchTerm(newTerm);
      onSearch(newTerm); 
    },
    [onSearch, setSearchTerm]
  );

  return (
    <div className="mb-4">
      <Input
        type="text"
        placeholder="Buscar por título..."
        value={searchTerm}
        onChange={handleChange}
        className="w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
