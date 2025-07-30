import React from "react";
import { Button, Form, Input } from "antd";
import "./detail-consultation.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const DetailConsultation = () => {
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7);
  var expires = expirationDate.toUTCString();

  const onFinish = (values) => {
    const data = {
        name: values["Tên"],
        date: values["Ngày cưới"],
        numberPhone: values["Số điện thoại"]
    }

    // EmailJS configuration - sử dụng environment variables
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_soha_wedding';
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_consultation';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    // Template parameters for EmailJS
    const templateParams = {
      to_email: 'phanduong182k1@gmail.com',
      from_name: data.name,
      phone_number: data.numberPhone,
      wedding_date: data.date,
      message: `Thông tin tư vấn mới:
      - Tên: ${data.name}
      - Số điện thoại: ${data.numberPhone}
      - Ngày cưới: ${data.date}`
    };

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        toast.success("🦄 SOHA đã nhận được thông tin, sẽ liên hệ tới bạn sớm nhất!");
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        toast.error("❌ Có lỗi xảy ra, vui lòng thử lại sau!");
      });

    console.log("Success:", data);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="detail-consultation">
      <div class="elementor-shape elementor-shape-bottom" data-negative="false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            class="elementor-shape-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>{" "}
      </div>
      <div className="detail-consultation-content">
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
              <Button
                className="custom-button"
                type="primary"
                htmlType="submit"
              >
                Gửi
              </Button>
            </Form.Item>
          </Form>
          <ToastContainer/>
        </div>
      </div>
    </div>
  );
};

export default DetailConsultation;
