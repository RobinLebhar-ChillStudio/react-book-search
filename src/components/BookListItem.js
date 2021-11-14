import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function BookListItem({ imageUrl, title, id, isLink }) {



    const image = <img style={{ height: "100%" }} src={imageUrl} alt={title} />
    const renderWithLink = <Link to={`book/${id}`}>
        {image}
    </Link>


    return (

        <Box boxShadow="dark-lg" p={1} bg="white" borderWidth="1px" borderRadius="lg" overflow="hidden">
            {isLink ? renderWithLink : image}
        </Box>

    );
}
