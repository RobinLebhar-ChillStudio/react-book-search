import {
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
export function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(searchTerm);
    }
  };

  const handleOnClick = () => {
    onSubmit(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        bg="white"
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleOnKeyPress}
        placeholder="Ex: Harry Potter"
      />
      <InputRightElement w="6rem" pr={2}>
        <Button
          disabled={!searchTerm}
          onClick={handleOnClick}
          leftIcon={<Icon as={AiOutlineEnter} />}
          h="1.75rem"
        >
          Search
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
