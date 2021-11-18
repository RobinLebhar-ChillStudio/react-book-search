import { BookListItem } from "./BookListItem";

export function BookList({ bookList }) {
  return bookList.map((b) => (
    <BookListItem
      key={b.id}
      isLink
      id={b.id}
      imageUrl={b.volumeInfo?.imageLinks?.thumbnail}
    />
  ));
}
