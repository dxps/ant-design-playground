/**
 * Created by ilema on 2016-08-05.
 */

import React from "react";
import { Form, Input, Row, Col, Button, DatePicker } from "antd";
import './AdvancedSearchFormDemo.scss';

const FormItem = Form.Item;

class AdvancedSearchFormDemo extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Form horizontal className="ant-advanced-search-form">
        <Row gutter={16}>
          <Col sm={8}>
            <FormItem
              label="Search name"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
              <Input placeholder="Please input the search name" size="default"/>
            </FormItem>
            <FormItem
              label="Long search name"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
              <DatePicker size="default"/>
            </FormItem>
            <FormItem
              label="Search name"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
              <Input placeholder="Please input the search name" size="default"/>
            </FormItem>
          </Col>
          <Col sm={8}>
            <FormItem
              label="Search name"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
              <Input placeholder="Please input the search name" size="default"/>
            </FormItem>
            <FormItem
              label="Long search name"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
              <DatePicker size="default"/>
            </FormItem>
            <FormItem
              label="Search name"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
              <Input placeholder="Please input the search name" size="default"/>
            </FormItem>
          </Col>

          <Col sm={8}>
            <FormItem
              label="Search name"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14, float: 'left' }}>
              <Input placeholder="Please input the search name" size="default"/>
            </FormItem>
            <FormItem
              label="Long search name"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
              <DatePicker size="default"/>
            </FormItem>
            <FormItem
              label="Search name"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}>
              <Input placeholder="Please input the search name" size="default"/>
            </FormItem>
          </Col>
        </Row>

        <Row>
          <Col span={12} offset={12} style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">Search</Button>
            <Button>Clear</Button>
          </Col>
        </Row>

      </Form>
    );
  }

}

export default AdvancedSearchFormDemo;
