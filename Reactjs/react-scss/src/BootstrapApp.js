import React, { Component } from 'react'
import { Dropdown, Container, Row, Col, Alert } from 'react-bootstrap';
import './App.css';
import Columns from './Columns';

class BootstrapApp extends Component {
    state = {
        numCols: 2,
        themes: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
    }

    addColumn = (numCols) => {
        this.setState({ numCols: numCols })
        console.log(numCols)
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col md={2}>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary">
                                    Dropdown Button</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => this.addColumn(1)}>Show 1 column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(2)}>Show 2 column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(3)}>Show 3 column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(4)}>Show 4 column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(5)}>Show 5 column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(6)}>Show 6 column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(7)}>Show 7 column</Dropdown.Item>
                                    <Dropdown.Item onClick={() => this.addColumn(8)}>Show 8 column</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col md={10}>
                            <Row>
                                <Columns number={this.state.numCols} themes={this.state.themes} />
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default BootstrapApp;