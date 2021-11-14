import { useState, useEffect } from "react"
import { ENDPOINTS } from "../config"
import { useParams } from "react-router-dom";
import { Box, Text, Button, Spinner } from "@chakra-ui/react"
import backgroundImage from "../assets/backgroundDetails.jpg"
import { BookListItem } from "./BookListItem";
import { StarIcon } from "@chakra-ui/icons";

export function BookDetail() {
    const params = useParams();
    const [details, setDetails] = useState()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        (async () => {
            const bookResponse = await (await fetch(ENDPOINTS.bookById(params.bookId))).json()
            setDetails(bookResponse)
            setIsLoading(false)
        })()

    }, [params.bookId])

    const handleButtonClick = () => {
        window.location.replace(details.volumeInfo.previewLink);
    }

    const review = () => {
        return <Box display="flex" mt="2" alignItems="center">
            {Array(5)
                .fill("")
                .map((_, i) => (
                    <StarIcon
                        key={i}
                        color={i < details.volumeInfo.averageRating ? "yellow.200" : "gray.300"}
                    />
                ))}
            <Box ml="2" color="white" fontSize="sm">
                from {details.volumeInfo.ratingsCount} reviews
            </Box>
        </Box>
    }

    const bookContent = () =>
        <Box p={10} overflow="auto">
            <Box display="flex">
                <BookListItem id={details.id} imageUrl={details.volumeInfo.imageLinks.thumbnail} title={details.volumeInfo.title} />
                <Box ml={5} display="flex" flexDirection="column">
                    <Text fontSize="3xl" color="white">{details.volumeInfo.title}</Text>
                    <Box display="flex" flexDirection="column">
                        <Text fontSize="1xl" color="white">{`Authored by ${details.volumeInfo.authors?.[0] ?? 'Unknown'}`}</Text>
                        <Text fontSize="1xl" color="white">{`Published the ${details.volumeInfo.publishedDate} by ${details.volumeInfo.publisher}`}</Text>
                        <Text fontSize="1xl" color="white">{`Category ${details.volumeInfo.categories?.[0] ?? 'Unknown'}`}</Text>
                        {review()}
                    </Box>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" >
                <Box display="flex" flexDir="column" w="40%" alignItems="center">
                    <Text fontSize="1xl" color="white" sx={{
                        textAlign: "justify",
                        textJustify: "inter-word"
                    }}>{`${details.volumeInfo.description}`}</Text>
                    <Button mt={70} onClick={handleButtonClick}>
                        Preview/Buy on Google Book
                    </Button>
                </Box >
            </Box>
        </Box >

    return (

        <Box
            h="100vh"
            w="100vw"
            bg={`url(${backgroundImage})`}
        >
            <Box h="100%" bg="rgba(0, 0, 0, 0.75)">

                {isLoading ? <Spinner /> : bookContent()}
            </Box>
        </Box>
    );
}
