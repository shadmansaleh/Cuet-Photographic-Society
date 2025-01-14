import { Tabs } from "antd";
import UserTable from "./UserTable";
import PhotoTable from "./PhotoTable";
import styles from "./AdminPage.module.css";

const AdminPage = () => {
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

  return (
    <div className={styles.adminPage}>
      <h1 className={styles.pageTitle}>Admin Dashboard</h1>
      <Tabs defaultActiveKey="1" className={styles.tabs} items={tabItems} />
    </div>
  );
};

export default AdminPage;
