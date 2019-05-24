import React, { Component } from 'react';
import { Row, Col, Button, Switch, Alert } from 'antd';
class TodoItem extends Component {

    constructor(props) {
        super(props);
        console.log(this.props);
        // this.state = {
        //     state: this.props.content.state,
        //     content: this.props.content.name
        // }
        console.log(this.state);
        this.handleChange = this.handleChange.bind(this);
        this.hanleDelete = this.hanleDelete.bind(this);
    }

    hanleDelete() {
        this.props.delete(this.props.index);
    }

    handleChange() {
        this.props.update(this.props.index);
    }

    render() {
        // const { content } = this.props;
        return (
            <Row style={{ width: '100%' }}>
                <Col span={1} style={{ width: '2.2%', marginTop: '0.5%' }}><Switch size="small" checked={this.props.content.state === 1} onChange={this.handleChange} /></Col>
                <Col span={16}>
                    <Alert message={this.props.content.name} type={this.props.content.state === 1 ? 'success' : 'info'} />
                </Col>
                <Col span={2} style={{ marginTop: '0.5%', marginLeft: 5 }}>
                    <Button size="small" type="danger" ghost onClick={this.hanleDelete}>delete</Button>
                </Col>
            </Row>
        )
    }
}
export default TodoItem;