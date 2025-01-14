import { Tabs, Button, Modal } from "antd";
import { useState } from "react";
import UserTable from "./UserTable";
import PhotoTable from "./PhotoTable";
import CreateExhibition from "./CreateExhibition";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const tabItems = [
    {
      key: "1",
      label: "Manage Users",
      children: <UserTable />,
    },
    {
      key: "2",
      label: "Manage Photos",
      children: <PhotoTable />,
    },
  ];

  const handleCreateExhibitionClick = () => {
    setIsModalVisible(true);
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.adminPage}>
      <h1 className={styles.pageTitle}>Admin Dashboard</h1>
      <Button
        type="primary"
        onClick={handleCreateExhibitionClick}
        style={{ marginBottom: "20px" }}
      >
        Create Exhibition
      </Button>
      <Tabs defaultActiveKey="1" className={styles.tabs} items={tabItems} />
      
      {/* Modal for CreateExhibition */}
      <Modal
        title="Create Exhibition"
        visible={isModalVisible}
        onCancel={handleCancelModal}
        footer={null}
        destroyOnClose
        width={600}
      >
        <CreateExhibition />
      </Modal>
    </div>
  );
};

export default AdminPage;
