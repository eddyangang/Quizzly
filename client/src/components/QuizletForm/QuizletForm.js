import React, { useState, useRef } from 'react'
import { Button, Modal, Form, Row } from 'react-bootstrap';
import API from "../../utils/API"
import "./styles.css"
import GameContext from "../../utils/GameContext"
import { useContext } from 'react';
export default function QuizletForm() {

    const url = useRef();
    const subject = useRef();
    const { quizletAddWords } = useContext(GameContext)

    const [show, setShow] = useState(false);
    const [words, setWords] = useState([])

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const handleSearch = (e) => {
        e.preventDefault()
        console.log("quizlet search")
        console.log("url", url.current.value)
        API.quizletScrap(url.current.value).then(data => {
          console.log("quizlet data: ", data)
            data.data.forEach(word => {
                word["subject"] = subject.current.value
            });
            setWords(data.data)
        })
    }

    const handleWordUpdate = (e, i) => {
        console.log(e.target.value, i);
        let newWords = words;
        newWords[i].word = e.target.value
        setWords(newWords)
        console.log(words)
    }

    const handleDefinitionUpdate = (e, i) => {
        console.log(e.target.value, i);
        let newWords = words;
        newWords[i].definition = e.target.value
        setWords(newWords)
        console.log(words)
    }
    // https://quizlet.com/8775815/software-engineering-vocabulary-flash-cards/
    const handleDelete = (e, i) => {
      e.preventDefault()
      console.log("deleting", i);
      const newWords = words;
      newWords.splice(i, 1)
      console.log(newWords);
      setWords([...newWords])
    }

    const handleSave= () => {
        quizletAddWords(words);
        handleClose();
    }
    return (
    <>
        <Button variant="primary" onClick={handleShow}>
          Quizlet Link
        </Button>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
                <h2>Have a Quizlet URL?</h2>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <p>Have a Quizlet URL?</p>
            <Form.Group>
                <Form.Control type="text" placeholder="Enter Quizlet URL" ref={url}/>
            </Form.Group>
                <p>Subject</p>
            <Form.Group>
                <Form.Control type="text" placeholder="Subject" ref={subject}/>
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSearch}>
              Search
            </Button>
              {words.length > 0 ? (
              <div className="container-fluid">
              <center>
                  <Button variant="primary" onClick={handleSave}>
                    Save
                  </Button>
              </center>
                {words.map((word, i) => (
                  <Row className=" d-flex justify-content-center align-items-center mb-1" key={word.word}>
                    <textarea name="word" id="word" cols="20" rows="5" onChange={(e) => handleWordUpdate(e, i)} defaultValue={word.word}></textarea>
                    <textarea name="definition" id="definition" cols="60" rows="5" onChange={(e) => handleDefinitionUpdate(e, i)} defaultValue={word.definition}></textarea>
                  <center>
                    <Button className="m-1" variant="danger" onClick={(e) => handleDelete(e,i)}>
                    <i className="fa fa-trash"></i>
                    </Button>
                  </center>
                  </Row>
              ))}
              <center>
                  <Button variant="primary" onClick={handleSave}>
                    Save
                  </Button>
              </center>
            </div>
              ) : null}
          </Modal.Body>
        </Modal>
    </>
    )
}
