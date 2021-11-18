import { useState, useEffect } from "react";
import { ENDPOINTS } from "../config";
import { useParams } from "react-router-dom";
import { Box, Text, Button, Spinner, Flex, Wrap } from "@chakra-ui/react";
import backgroundImage from "../assets/backgroundDetails.jpg";
import { BookListItem } from "../components/BookListItem";
import { StarIcon } from "@chakra-ui/icons";
import { Container } from "../components/Container";

export function BookDetail() {
  const params = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    (async () => {
      const bookResponse = await (
        await fetch(ENDPOINTS.bookById(params.bookId))
      ).json();
      setDetails(bookResponse);
    })();
  }, [params.bookId]);

  const handleButtonClick = () => {
    window.location.replace(details.volumeInfo.previewLink);
  };

  const review = () => {
    return (
      <Flex mt="2" align="center">
        {Array(5)
          .fill()
          .map((_, i) => (
            <StarIcon
              key={i}
              color={
                i < details.volumeInfo.averageRating ? "yellow.200" : "gray.300"
              }
            />
          ))}
        <Box ml="2" color="white" fontSize="sm">
          from {details.volumeInfo.ratingsCount} reviews
        </Box>
      </Flex>
    );
  };

  const renderBookInfo = () => (
    <Wrap>
      <BookListItem
        id={details.id}
        imageUrl={details.volumeInfo.imageLinks?.thumbnail}
        title={details.volumeInfo.title}
      />

      <Flex ml={5} direction="column">
        <Text fontSize="2xl" color="white">
          {details.volumeInfo.title}
        </Text>
        <Flex direction="column">
          <Text fontSize="1xl" color="white">
            Authored by {details.volumeInfo.authors?.[0] ?? "Unknown"}
          </Text>
          <Text fontSize="1xl" color="white">
            Published the {details.volumeInfo.publishedDate} by{" "}
            {details.volumeInfo.publisher}
          </Text>
          <Text fontSize="1xl" color="white">
            Category{" " + details.volumeInfo.categories?.[0] ?? " Unknown"}
          </Text>
          {review()}
        </Flex>
      </Flex>
    </Wrap>
  );

  const renderBookDescription = () => (
    <Text
      fontSize="1xl"
      color="white"
      sx={{
        textAlign: "justify",
        textJustify: "inter-word",
      }}
    >
      {details.volumeInfo.description}
    </Text>
  );

  const renderBookContent = () => (
    <Box p={5}>
      {renderBookInfo()}
      <Flex align="center" direction="column" mt="10vh">
        {renderBookDescription()}
        <Button mt="5%" onClick={handleButtonClick}>
          Preview/Buy on Google Book
        </Button>
      </Flex>
    </Box>
  );
  return (
    <Container backgroundImage={backgroundImage}>
      {details ? renderBookContent() : <Spinner />}
    </Container>
  );
}
