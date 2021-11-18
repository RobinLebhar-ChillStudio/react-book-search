import { useState } from "react";
import { Wrap, Flex, Text, Spinner } from "@chakra-ui/react";
import { SearchBar } from "../components/SearchBar";
import { ENDPOINTS } from "../config";
import { BookList } from "../components/BookList";
import backgroundImage from "../assets/background.jpg";
import { Container } from "../components/Container";
export function Index() {
  const [searchResults, setResults] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitSearchTerm = async (term) => {
    setIsLoading(true);
    const searchResults = await (
      await fetch(ENDPOINTS.bookSearch(term))
    ).json();
    setResults(searchResults);
    setIsLoading(false);
  };

  return (
    <Container backgroundImage={backgroundImage}>
      <Flex flexDir="column" align="center" pt="15vh">
        <Text fontSize="6xl" mb={7} color="white">
          Book finder
        </Text>
        <Flex
          align="center"
          w={["90%", "70%", "50%"]}
          justify="center"
          flexDir="column"
        >
          <SearchBar onSubmit={handleSubmitSearchTerm} />
        </Flex>
      </Flex>
      <Flex justify="center" pt="5%">
        {isLoading && <Spinner color="white" />}
        {!isLoading && searchResults?.items?.length > 0 && (
          <Wrap column={2} p={10} justify="center">
            <BookList bookList={searchResults.items} />
          </Wrap>
        )}
      </Flex>
    </Container>
  );
}
