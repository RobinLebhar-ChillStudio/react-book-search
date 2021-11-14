import { Box } from "@chakra-ui/react";
import { BookListItem } from "./BookListItem";

export function BookList({ bookList, onClickItem }) {

    return (<Box display="flex" >{bookList.map(b => <Box key={b.id} display="flex" p={3} ><BookListItem isLink id={b.id} imageUrl={b.volumeInfo.imageLinks.thumbnail} onClick={onClickItem} /></Box>)}</Box>
    );
}
