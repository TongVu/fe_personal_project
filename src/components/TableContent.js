import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ebookAction from "../service/ebook.service";

export default function TableContent() {
  const [ebooks, setEbooks] = useState([]);
  // React Bootstrap modal state
  const [show, setShow] = useState(false);
  const [putShow, setPutShow] = useState(false);
  const [currentId, setCurrentId] = useState(-1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePutClose = () => setPutShow(false);
  const handlePutShow = () => setPutShow(true);

  function handlePutShowAndSetCurrentId(ebookId) {
    handlePutShow();
    setCurrentId(ebookId);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") searchEbook();
  }

  // ------------------------------------
  async function searchEbook() {
    if (
      document.querySelector("#searchId").value.length == null ||
      document.querySelector("#searchId").value.match(/^ *$/) !== null
    ) {
      window.alert("Ebook not found");
      getBooks();
    } else
      try {
        const response = await ebookAction.get(
          document.querySelector("#searchId").value
        );
        const ebook = response.data;
        setEbooks([ebook]);
      } catch (e) {
        window.alert("Ebook not found");
        getBooks();
      }
  }

  async function updateEbook(ebookId) {
    handlePutClose();

    const title = document.querySelector("#controlTitleId").value;
    const page = document.querySelector("#controlPageId").value;
    const rating = document.querySelector("#controlRatingId").value;
    const publisherId = document.querySelector("#controlPublisherId").value;
    const publisherEmail = document.querySelector(
      "#controlPublisherEmailId"
    ).value;
    const intro = document.querySelector("#controlIntroId").value;

    const ebookRequest = {
      title: title,
      page: page,
      rating: rating,
      introduction: intro,
      purchased: false,
      viewLinkStatus: "Unactivated Link",
      publisherId: publisherId,
      publisherEmail: publisherEmail,
      id: currentId,
    };
    console.log(ebookRequest);

    await ebookAction.update(currentId, ebookRequest);
    await getBooks();

    createAlert("success", "Updated successfully!");
  }

  async function createEbook() {
    handleClose(); // to close form

    const title = document.querySelector("#controlTitleId").value;
    const page = document.querySelector("#controlPageId").value;
    const rating = document.querySelector("#controlRatingId").value;
    const publisherId = document.querySelector("#controlPublisherId").value;
    const intro = document.querySelector("#controlIntroId").value;

    const ebookRequest = {
      // like request from backend
      title: title,
      page: page,
      rating: rating,
      introduction: intro,
      purchased: false,
      viewLinkStatus: "Unactivated Link",
      publisherId: publisherId,
    };

    await ebookAction.create(ebookRequest); // create with request
    await getBooks(); // update after created ebook

    createAlert("success", "Created successfully!");
  }

  async function getBooks() {
    try {
      const books = await ebookAction.getAll();
      setEbooks(books.data);
    } catch (err) {
      console.log("Error: " + err);
    }
  }

  function createAlert(kindOfAlert, message) {
    const tableMother = document.querySelector("#table-mother");
    const divSuccess = document.createElement("div", { id: "alertDiv" });

    divSuccess.setAttribute(
      "class",
      `alert alert-${kindOfAlert} min-vw-100 text-center`
    );
    divSuccess.setAttribute("role", "alert");
    divSuccess.style.position = "absolute";
    divSuccess.style.top = `${window.scrollY + window.innerHeight - 80}px`;
    divSuccess.innerHTML = message;

    tableMother.after(divSuccess);
    setTimeout(() => divSuccess.remove(), 1000);
  }

  function deleteBookId(id) {
    try {
      ebookAction.remove(id);

      createAlert("danger", "Deleted successfully!");
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

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div style={{ "min-height": "83vh" }}>
      <table className="table table-striped" id="table-mother">
        <thead>
          <tr>
            <th scope="col" className="text-center align-middle">
              #
            </th>
            <th scope="col" className="align-middle">
              Title
            </th>
            <th scope="col" className="align-middle">
              Page
            </th>
            <th scope="col" className="align-middle">
              Rating
            </th>
            <th scope="col" className="align-middle">
              Publisher
            </th>
            <th scope="col" className="align-middle">
              Publisher's email
            </th>
            <th scope="col" className="text-center align-middle">
              {/* Action */}
              <button
                type="button"
                className="btn btn-light mx-2 btn-sm"
                onKeyDown={(e) => handleKeyDown(e)}
              >
                <i class="fa fa-search" aria-hidden="true"></i>
                <Form.Control
                  type="text"
                  placeholder="Enter ebook's id"
                  id="searchId"
                />
              </button>
            </th>
          </tr>
        </thead>

        <tbody>
          {ebooks.map((ebook, index) => (
            <tr key={ebook.id}>
              <th scope="row" className="text-center">
                {index + 1}
              </th>
              <td>{ebook.title}</td>
              <td>{ebook.page}</td>
              <td>
                <i class="fa fa-star" aria-hidden="true"></i>
                {` ${ebook.rating}`}
              </td>
              <td>{ebook.publisherName}</td>
              <td>{ebook.publisherEmail}</td>
              <td className="d-flex flex-row justify-content-center">
                <button
                  type="button"
                  className="btn btn-success mx-2"
                  data-toggle="modal"
                  data-target="#exampleModalLongTitle"
                  onClick={handleShow}
                >
                  <i class="fa fa-plus-square" aria-hidden="true"></i>
                </button>

                <button type="button" className="btn btn-primary mx-2">
                  <i
                    className="fa fa-pencil"
                    aria-hidden="true"
                    onClick={(e) => handlePutShowAndSetCurrentId(ebook.id)}
                  ></i>
                </button>

                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={(e) => deleteBook(ebook.id)}
                >
                  <i
                    className="fa fa-trash"
                    aria-hidden="true"
                    id={ebook.id}
                  ></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* CREATE FORM */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            Add Ebook
            {"  "}
            <i class="fa fa-book" aria-hidden="true"></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book's title"
                autoFocus
                id="controlTitleId"
                tabIndex={1}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Page</Form.Label>
              <Form.Control
                type="text"
                placeholder="Page"
                id="controlPageId"
                tabIndex={2}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rating"
                id="controlRatingId"
                tabIndex={3}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Publisher Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Publisher's id"
                id="controlPublisherId"
                tabIndex={4}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Introduction</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="controlIntroId"
                tabIndex={5}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createEbook}>
            Add ebook
          </Button>
        </Modal.Footer>
      </Modal>

      {/* UPDATE FORM */}
      <Modal show={putShow} onHide={handlePutClose}>
        <Modal.Header>
          <Modal.Title>
            Update
            {"  "}
            <i class="fa fa-wrench" aria-hidden="true"></i>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book's title"
                autoFocus
                id="controlTitleId"
                tabIndex={1}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Page</Form.Label>
              <Form.Control
                type="text"
                placeholder="Page"
                id="controlPageId"
                tabIndex={2}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="text"
                placeholder="Rating"
                id="controlRatingId"
                tabIndex={3}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Publisher Id</Form.Label>
              <Form.Control
                type="text"
                placeholder="Publisher's id"
                id="controlPublisherId"
                tabIndex={4}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Publisher Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Publisher's email"
                id="controlPublisherEmailId"
                tabIndex={5}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Introduction</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="controlIntroId"
                tabIndex={6}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handlePutClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateEbook}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
