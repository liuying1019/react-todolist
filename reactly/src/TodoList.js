
import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import { Input, Button, Row, Col, List } from 'antd';
import 'antd/dist/antd.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, { name: this.state.inputValue, state: 0 }],
      inputValue: ''
    })

  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list })
  }

  handleUpdate(index){
    const list = [...this.state.list];
    list[index].state = list[index].state === 0 ? 1: 0;
    this.setState({list});
  }

  getTodoItems() {
    return (
      <List header={<div>Header</div>} footer={<div>Footer</div>} bordered dataSource={this.state.list}
        renderItem={(item, index) => (
          <List.Item><TodoItem update={this.handleUpdate} delete={this.handleDelete} key={index} content={item} index={index} /></List.Item>
        )}
      />
      //  index={index}    key={index}
      // this.state.list.map((item, index) => {
      //   return (
      //     <TodoItem
      //       delete={this.handleDelete}
      //       key={index}
      //       content={item}
      //       index={index}
      //     />
      //   )
      // })
    )
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col span={10} offset={5}><Input value={this.state.inputValue} onChange={this.handleInputChange} placeholder="Basic usage" /></Col>
          <Col span={2}><Button type="primary" onClick={this.handleBtnClick}>add</Button></Col>
        </Row>
        <Row>
          {this.getTodoItems()}
        </Row>
      </Fragment>
    );
  }
}
export default TodoList;