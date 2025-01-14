import React from "react";
import { Form, Input, DatePicker, Button, message } from "antd";
import axios from "axios";
import moment, { Moment } from "moment";

interface ExhibitionFormValues {
  title: string;
  deadline: Moment | null;
}

const CreateExhibition: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: ExhibitionFormValues) => {
    try {
      await axios.post("/api/exhibitions", {
        title: values.title,
        deadline: values.deadline,
      });
      message.success("Exhibition created successfully.");
      form.resetFields();
    } catch (error) {
      console.error("Error creating exhibition:", error);
      message.error("Failed to create exhibition.");
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>
        Create Exhibition
      </h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="title"
          label="Exhibition Title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input style={{ padding: "12px", fontSize: "16px" }} />
        </Form.Item>
        <Form.Item
          name="deadline"
          label="Deadline"
          rules={[{ required: true, message: "Please select a deadline!" }]}
        >
          <DatePicker
            style={{ width: "100%", padding: "12px", fontSize: "16px" }}
            disabledDate={(current) => current && current < moment().endOf("day")}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              backgroundColor: "#4CAF50",
              borderColor: "#4CAF50",
            }}
          >
            Create Exhibition
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateExhibition;
