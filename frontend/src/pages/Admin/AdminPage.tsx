// AdminPage.tsx
import { Tabs, Button, Modal, message } from "antd";
import { useState, useEffect } from "react";
import UserTable from "./UserTable";
import PhotoTable from "./PhotoTable";
import CreateExhibition from "./CreateExhibition";
import ExhibitionTable from "./ExhibitionTable";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [exhibitions, setExhibitions] = useState<any[]>([]);

  useEffect(() => {
    // Temporary hardcoded exhibitions data
    setExhibitions([
      { _id: "1", number: 1 },
      { _id: "2", number: 2 },
      { _id: "3", number: 3 },
    ]);
  }, []);

  const handleCreateExhibitionClick = () => {
    setIsModalVisible(true);
  };

  const handleCancelModal = () => {
    setIsModalVisible(false);
  };

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
    ...exhibitions.map((exhibition) => ({
      key: `exhibition-${exhibition._id}`,
      label: `Exhibition ${exhibition.number}`,
      children: <ExhibitionTable exhibitionId={exhibition._id} />,
    })),
  ];

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
