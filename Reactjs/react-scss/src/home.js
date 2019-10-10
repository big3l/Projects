import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
    return (
        <div>
            <ButtonToolbar>
                <Button variant="danger">Red Button</Button>
                <Button variant="info">Info Button</Button>
                <Button variant="success">Green Button</Button>
            </ButtonToolbar>
        </div>
    )
}

