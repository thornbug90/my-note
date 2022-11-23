import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Highlighter from "react-highlight-words";
import Badge from 'react-bootstrap/Badge';

import data from "../data";
import "./style.css";

const Home = () => {
    const [keyword, setKeyword] = useState("");
    const [withContent, setWithContent] = useState(false);

    return (
        <div className="d-flex align-items-center justify-content-center mt-3">
            <div className="container">
                <div className="d-flex align-items-center justify-content-center mt-3">
                    <Form.Check
                        className="white d-flex align-items-center justify-content-center pe-2"
                        type="checkbox"
                        checked={withContent}
                        label={`content`}
                        onChange={e => setWithContent(e.target.checked)}
                    />
                    <Form.Control
                        type="text"
                        value={keyword}
                        placeholder="Search..."
                        onChange={e => setKeyword(e.target.value)}
                    />
                </div>
                {data.filter(d => {
                    const keywords = keyword.split(" ");
                    for (let i = 0; i < keywords.length; i++) {
                        const key = keywords[i];
                        if (withContent) {
                            return d.title.includes(key) || d.content.includes(key);
                        }
                        else {
                            return d.title.includes(key);
                        }
                    }

                    return false;
                }).map((datum, index) =>
                    <Accordion className="mt-1">
                        <Accordion.Item eventKey={index}>
                            <Accordion.Header className="d-flex align-items-center justify-content-between">
                                <Badge pill className="fw-normal" bg="dark">
                                    React
                                </Badge>
                                <Highlighter
                                    className="ps-3"
                                    highlightClassName="highlight"
                                    searchWords={keyword.split(" ")}
                                    autoEscape={true}
                                    textToHighlight={datum.title}
                                />
                            </Accordion.Header>
                            <Accordion.Body className="text-start">
                                {
                                    withContent ?
                                        <Highlighter
                                            highlightClassName="highlight"
                                            searchWords={keyword.split(" ")}
                                            autoEscape={true}
                                            textToHighlight={datum.content}
                                        />
                                        :
                                        datum.content
                                }
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )}
            </div>
        </div>
    );
}

export default Home;