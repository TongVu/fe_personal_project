import { useEffect, useState } from "react";
import ebookAction from "../service/ebook.service";

export default function TableContent() {
  const [ebooks, setEbooks] = useState([]);

  async function getBooks() {
    try {
      const books = await ebookAction.getAll();
      console.log(books.data);
      setEbooks(books.data);
      console.log(ebooks);
    } catch (err) {
      console.log("Error: " + err);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  function deleteBookId(id) {
    try {
      ebookAction.remove(id);
      console.log("delete successfully");
    } catch (err) {
      console.log("Error: " + err);
    }
  }

  function deleteBook(id) {
    console.log(id);
    deleteBookId(id);
    setEbooks([...ebooks.filter((ebook) => ebook.id !== id)]);
    // getBooks();
  }

  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col" className="text-center">
              #
            </th>
            <th scope="col">Title</th>
            <th scope="col">Page</th>
            <th scope="col">Rating</th>
            <th scope="col">Publisher</th>
            <th scope="col">Publisher's email</th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {ebooks.map((ebook, index) => (
            <tr>
              <th scope="row" className="text-center">
                {index + 1}
              </th>
              <td>{ebook.title}</td>
              <td>{ebook.page}</td>
              <td>
                <i class="fa fa-star" aria-hidden="true"></i> {ebook.rating}
              </td>
              <td>{ebook.publisherName}</td>
              <td>{ebook.publisherEmail}</td>
              <td className="d-flex flex-row justify-content-center">
                <button type="button" className="btn btn-primary mx-2">
                  <i className="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button type="button" className="btn btn-danger mx-2">
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    id={ebook.id}
                    onClick={(e) => deleteBook(ebook.id)}
                  ></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
