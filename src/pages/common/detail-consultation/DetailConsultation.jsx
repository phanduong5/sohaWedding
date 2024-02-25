import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./detail-consultation.scss";

const DetailConsultation = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="detail-consultation">
      <div className="elementor-widget-container">
        <h2 className="elementor-heading-title text-center">
          NHẬN TƯ VẤN CHI TIẾT
        </h2>
      </div>
      <div className="detail-consultation-form">
        <Form
          name="basic"
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 450,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item name="Tên">
            <Input className="custom-input" placeholder="Tên" />
          </Form.Item>

          <Form.Item name="Số điện thoại">
            <Input className="custom-input" placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item name="Ngày cưới">
            <Input className="custom-input" placeholder="Ngày cưới" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              span: 24,
            }}
          >
            <Button className="custom-button" type="primary" htmlType="submit">
              Gửi
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default DetailConsultation;
