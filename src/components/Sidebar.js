import React from "react";
import { Carousel } from "react-bootstrap";

export default function Sidebar() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200x400"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Some quick example text.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/1200x400"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p>Some quick example text.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
