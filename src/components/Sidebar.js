import React from "react";
import { Carousel } from "react-bootstrap";

export default function Sidebar() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/pictures/field1.png"
                    alt="First slide"
                    style={{ height: "450px" }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/pictures/field19.png"
                    alt="Second slide"
                    style={{ height: "450px" }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/pictures/field20.png"
                    alt="Second slide"
                    style={{ height: "450px" }}
                />
            </Carousel.Item>
        </Carousel>
    );
}
