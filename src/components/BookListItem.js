import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function BookListItem({ imageUrl, title, id, isLink }) {
  const image = (
    <Image
      src={imageUrl}
      sx={{ height: "100%" }}
      alt={title}
      fallbackSrc="https://via.placeholder.com/130"
    />
  );
  const renderWithLink = <Link to={`book/${id}`}>{image}</Link>;

  return (
    <Box boxShadow="dark-lg" p={1} bg="white" borderRadius="lg">
      {isLink ? renderWithLink : image}
    </Box>
  );
}
