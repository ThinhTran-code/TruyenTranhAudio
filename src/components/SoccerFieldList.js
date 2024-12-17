import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function SoccerFieldList() {
    const [data, setData] = useState([]); // Dữ liệu sân bóng
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại la 1

    const itemsPerPage = 4; // Số sân trên mỗi trang

    // Lấy dữ liệu từ API
    const getDataFromAPI = async () => {
        const response = await axios.get("/database.json");
        setData(response.data["soccer-field"]);
    };

    useEffect(() => {
        getDataFromAPI();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    // Chuyển trang
    const nextPage = () => {
        if (currentPage < Math.ceil(data.length / itemsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prePage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <Container className="my-4">
            <h2 className="mb-4">Danh Sách Sân</h2>
            <Row>
                {currentItems.map((field) => (
                    <Col key={field.id} md={3} className="mb-3">
                        <Card className="h-100">
                            <Card.Img
                                variant="top"
                                src={`/pictures/${field.img}`}
                                alt="Sân bóng"
                                style={{ height: "150px", objectFit: "cover" }}
                            />
                            <Card.Body className="d-flex flex-column justify-content-between">
                                <div>
                                    <Card.Text className="card-text">
                                        <strong>{field.name}</strong> <br />
                                        <br />
                                        <strong>Địa chỉ:</strong>{" "}
                                        {field.address}
                                        <br />
                                        <strong>Kích thước:</strong>{" "}
                                        {field.size}
                                        <br />
                                        <strong>Giá mỗi giờ:</strong>{" "}
                                        {field.priceperHour}
                                    </Card.Text>
                                </div>
                                <br />
                                <div>
                                    {" "}
                                    <a
                                        href={`/booking/${field.id}`}
                                        className="btn btn-primary w-100"
                                    >
                                        Đặt Sân
                                    </a>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* phân trang */}
            <div className="d-flex justify-content-center mt-4">
                <Button
                    variant="secondary"
                    onClick={prePage}
                    disabled={currentPage === 1}
                >
                    Trang Trước
                </Button>
                <span className="mx-3">
                    Trang {currentPage} /{" "}
                    {Math.ceil(data.length / itemsPerPage)}
                </span>
                <Button
                    variant="secondary"
                    onClick={nextPage}
                    disabled={
                        currentPage === Math.ceil(data.length / itemsPerPage)
                    }
                >
                    Trang Tiếp
                </Button>
            </div>
        </Container>
    );
}

export default SoccerFieldList;
