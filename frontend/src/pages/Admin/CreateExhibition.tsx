import React from "react";
import { Form, Input, DatePicker, Button, message, Card, Upload, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import moment, { Moment } from "moment";

interface ExhibitionFormValues {
  title: string;
  deadline: Moment | null;
  themePhoto: any;
}

const CreateExhibition: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: ExhibitionFormValues) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("deadline", values.deadline!.toISOString());
    formData.append("themePhoto", values.themePhoto.file);

    try {
      await axios.post("/api/exhibitions", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      message.success("Exhibition created successfully.");
      form.resetFields();
    } catch (error) {
      console.error("Error creating exhibition:", error);
      message.error("Failed to create exhibition.");
    }
  };

  const uploadProps = {
    name: 'file',
    listType: 'picture',
    maxCount: 1,
    accept: 'image/*',
    beforeUpload: (file: File) => {
      form.setFieldsValue({ themePhoto: { file } });
      return false; // Prevent auto upload
    },
  };

  return (
    <Card
      title="Create Exhibition"
      bordered={false}
      style={{
        width: "100%",
        maxWidth: 600,
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="title"
          label="Exhibition Title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input
            style={{
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </Form.Item>
        <Form.Item
          name="deadline"
          label="Deadline"
          rules={[{ required: true, message: "Please select a deadline!" }]}
        >
          <DatePicker
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
            }}
            disabledDate={(current) => current && current < moment().endOf("day")}
          />
        </Form.Item>
        <Form.Item
          name="themePhoto"
          label="Theme Cover Photo"
          valuePropName="file"
          rules={[{ required: true, message: "Please upload a theme cover photo!" }]}
        >
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />} style={{ width: "100%" }}>
              Upload Theme Photo
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              borderRadius: "8px",
              backgroundColor: "#4CAF50",
              borderColor: "#4CAF50",
              boxShadow: "0 4px 8px rgba(0, 128, 0, 0.2)",
            }}
          >
            Create Exhibition
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CreateExhibition;
