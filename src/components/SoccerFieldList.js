import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const stories = [
    {
        id: 1,
        title: "Truyen Tranh 1",
        img: "https://via.placeholder.com/150",
        description: "Description  1",
    },
    {
        id: 2,
        title: "Truyen Tranh   2",
        img: "https://via.placeholder.com/150",
        description: "Description  2",
    },
    {
        id: 3,
        title: "Truyen Tranh  3",
        img: "https://via.placeholder.com/150",
        description: "Description 3",
    },
    {
        id: 3,
        title: "Truyen Tranh  3",
        img: "https://via.placeholder.com/150",
        description: "Description 3",
    },
];

function SoccerFieldList() {
    return (
        <Container className="my-4">
            <h2 className="mb-4">Danh Sách Sân</h2>
            <Row>
                {stories.map((story) => (
                    <Col key={story.id} md={3} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={story.img} />
                            <Card.Body>
                                <Card.Title>{story.title}</Card.Title>
                                <Card.Text>{story.description}</Card.Text>
                                <a
                                    href={`/story/${story.id}`}
                                    className="btn btn-primary"
                                >
                                    Đặt Sân
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                {stories.map((story) => (
                    <Col key={story.id} md={3} className="mb-3">
                        <Card>
                            <Card.Img variant="top" src={story.img} />
                            <Card.Body>
                                <Card.Title>{story.title}</Card.Title>
                                <Card.Text>{story.description}</Card.Text>
                                <a
                                    href={`/story/${story.id}`}
                                    className="btn btn-primary"
                                >
                                    Đặt Sân
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default SoccerFieldList;
