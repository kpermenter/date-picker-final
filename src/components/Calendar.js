import React from 'react';
import { ItemList } from './Items'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class Calendar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startdate: "",
            enddate: "",
            items: []
        };
    }

    handleChange(event) {
        if (event.target.name === "startdate") {
            this.setState({ startdate: event.target.value });
        } else if (event.target.name === "enddate") {
            this.setState({ enddate: event.target.value });
        }
    }

    addItem() {
        this.setState({ items: [...this.state.items, { startDate: this.state.startdate, endDate: this.state.enddate }], startdate: "", enddate: "" });
    }

    removeItem(index) {
        const items = this.state.items.filter((e, idx) => idx !== index);
        this.setState({ items });
    }

    reset = () => {
        this.setState({
            startdate: "",
            enddate: "",
        });
    }

    render() {
        return (
            <Container>
                <Form>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1>Start date</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <input
                                className="start-input"
                                name="startdate"
                                type="date"
                                value={this.state.startdate}
                                onChange={this.handleChange.bind(this)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1>End date</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <input
                                className="end-input"
                                name="enddate"
                                type="date"
                                value={this.state.enddate}
                                onChange={this.handleChange.bind(this)} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <Button variant="primary" onClick={() => this.addItem()}>Add</Button>
                            <Button variant="primary" onClick={() => this.reset()}>Clear</Button>
                        </Col>
                    </Row>
                    <Row>
                    <Col xs={12} md={12}>
                        <ItemList postList={this.state.items}
                            removeItem={this.removeItem.bind(this)}
                        />
                    </Col>
                </Row>
                </Form>
            </Container>
        )
    }
}

export default Calendar;
