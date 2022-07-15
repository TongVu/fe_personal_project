import { useEffect, useState } from "react";
import ebookAction from "../service/ebook.service";
import TableContent from "./TableContent";

export default function BrowseCollection() {
  const [ebooks, setEbooks] = useState([]);

  useEffect(async () => {
    try {
      const books = await ebookAction.getAll();
      console.log(books.data);
      setEbooks(books.data);
      console.log(ebooks);
    } catch (err) {
      console.log("from err");
      console.log(ebooks);
    }
  }, []);

  return (
    <>
      <TableContent ebooks={ebooks} />
    </>
  );
}
