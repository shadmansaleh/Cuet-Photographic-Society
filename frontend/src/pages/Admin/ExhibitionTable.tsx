// ExhibitionTable.tsx
import { Table, Button, message } from "antd";
import { useEffect, useState } from "react";
import styles from "./AdminPage.module.css";

const ExhibitionTable = ({ exhibitionId }: { exhibitionId: string }) => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Temporary hardcoded photos data for each exhibition
    if (exhibitionId === "1") {
      setPhotos([
        { _id: "1", title: "Photo 1", uploader: { name: "User A" }, createdAt: "2025-01-01T10:00:00Z", photoUrl: "/dummy/photo1.jpg" },
        { _id: "2", title: "Photo 2", uploader: { name: "User B" }, createdAt: "2025-01-02T10:00:00Z", photoUrl: "/dummy/photo2.jpg" },
      ]);
    } else if (exhibitionId === "2") {
      setPhotos([
        { _id: "3", title: "Photo 3", uploader: { name: "User C" }, createdAt: "2025-01-03T10:00:00Z", photoUrl: "/dummy/photo3.jpg" },
        { _id: "4", title: "Photo 4", uploader: { name: "User D" }, createdAt: "2025-01-04T10:00:00Z", photoUrl: "/dummy/photo4.jpg" },
      ]);
    } else {
      setPhotos([
        { _id: "5", title: "Photo 5", uploader: { name: "User E" }, createdAt: "2025-01-05T10:00:00Z", photoUrl: "/dummy/photo5.jpg" },
      ]);
    }
  }, [exhibitionId]);

  const downloadPhoto = async (id: string, title: string) => {
    // You can create a download link for dummy photos
    const link = document.createElement("a");
    link.href = `/dummy/${title}.jpg`;
    link.setAttribute("download", `${title}.jpg`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const columns = [
    { title: "Photo Title", dataIndex: "title", key: "title" },
    {
      title: "Uploader",
      key: "uploader",
      render: (_: any, record: any) => record.uploader?.name || "Unknown",
    },
    {
      title: "Uploaded At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => {
        const formattedDate = new Date(date);
        return !isNaN(formattedDate.getTime()) ? formattedDate.toLocaleString() : "Invalid Date";
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <>
          <Button
            type="link"
            onClick={() => window.open(record.photoUrl, "_blank")}
          >
            View
          </Button>
          <Button onClick={() => downloadPhoto(record._id, record.title)}>
            Download
          </Button>
        </>
      ),
    },
  ];

  return (
    <div className={styles.tableContainer}>
      <Table
        columns={columns}
        dataSource={photos}
        rowKey="_id"
        bordered
        loading={loading}
        pagination={false}
      />
    </div>
  );
};

export default ExhibitionTable;
