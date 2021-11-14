import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { SearchBar } from "../components/SearchBar";
import { Text, Spinner } from "@chakra-ui/react"
import { ENDPOINTS } from "../config"
import { BookList } from "../components/BookList";
import backgroundImage from "../assets/background.jpg"

export function Index() {
    const [searchResults, setResults] = useState()
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmitSearchTerm = async (term) => {
        setIsLoading(true)
        console.log(ENDPOINTS.bookSearch(term))
        const searchResults = await (await fetch(ENDPOINTS.bookSearch(term))).json()
        setResults(searchResults)
        console.log(searchResults)
        setIsLoading(false)
    }

    const handleClickBookItem = (id) => {

    }
    return (

        <Box
            h="100vh"
            w="100vw"
            bg={`url(${backgroundImage})`}
        >
            <Box h="100%" bg='rgba(0, 0, 0, 0.6)' display="flex" flexDir="column" alignItems="center" pt="15%">
                <Text fontSize="6xl" mb={7} color="white">Book finder</Text>
                <Box display="flex" alignItems="center" width={[
                    "100%",
                    "90%",
                    "70%",
                    "40%",
                ]} justifyContent="center" flexDir="column" >
                    <SearchBar onSubmit={handleSubmitSearchTerm} />
                    <Box pt="10%">
                        {isLoading && <Spinner color="white" />}
                        {!isLoading && searchResults?.items?.length > 0 && <BookList bookList={searchResults.items} onClickItem={handleClickBookItem} />}
                    </Box>
                </Box>
            </Box>
        </Box>


    );
}

