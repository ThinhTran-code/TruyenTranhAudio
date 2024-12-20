import React, { useEffect, useState } from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    Col,
    Container,
    Row,
} from "react-bootstrap";

export default function AllFieldSoccer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/database.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setData(
                    Array.isArray(data["soccer-field"]) //Kiem tra data co phai 1 mang hay 0
                        ? data["soccer-field"]
                        : []
                );
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <Container
                fluid
                style={{ backgroundColor: "#220000", maxWidth: "80%" }}
            >
                <Row>
                    <Col
                        md={3}
                        style={{
                            position: "sticky",
                            top: "65px",
                            height: "fit-content",
                        }}
                    >
                        <Card className="l-100hv">
                            <CardBody>
                                <CardText>
                                    <strong>Sân Bóng 7 Người: </strong>
                                    <br />
                                    <br />
                                    <strong>Sân Bóng 11 Người: </strong>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={9}>
                        <Card className="r-100hv">
                            <CardBody>
                                <CardText>
                                    <h5 style={{ textAlign: "center" }}>
                                        Danh Sách Sân Bãi
                                    </h5>
                                    <br />
                                    <Row>
                                        {data.map((field) => (
                                            <Col
                                                key={field.id}
                                                md={6}
                                                className="mb-4"
                                            >
                                                <Card className="h-100">
                                                    <CardImg
                                                        variant="top"
                                                        src={`/pictures/${field.img}`}
                                                        style={{
                                                            height: "150px",
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                    <CardBody>
                                                        <h6>{field.name}</h6>
                                                        <p>
                                                            <strong>
                                                                Địa chỉ:
                                                            </strong>{" "}
                                                            {field.address}
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Loại sân:
                                                            </strong>{" "}
                                                            {field.size}
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Giá mỗi giờ:
                                                            </strong>{" "}
                                                            {field.priceperHour}{" "}
                                                            VND
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Dịch vụ:
                                                            </strong>{" "}
                                                            {field.service.join(
                                                                ", "
                                                            )}
                                                        </p>
                                                        <p>
                                                            <strong>
                                                                Thời gian khả
                                                                dụng:
                                                            </strong>
                                                            <ul>
                                                                {field.avaiableSlot
                                                                    .filter(
                                                                        (
                                                                            slot
                                                                        ) =>
                                                                            slot.status ===
                                                                            "available"
                                                                    )
                                                                    .map(
                                                                        (
                                                                            slot,
                                                                            index
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    index
                                                                                }
                                                                            >
                                                                                {
                                                                                    slot.date
                                                                                }{" "}
                                                                                -{" "}
                                                                                {
                                                                                    slot.time
                                                                                }
                                                                            </li>
                                                                        )
                                                                    )}
                                                            </ul>
                                                        </p>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
