// ExhibitionTable.tsx
import { Table, Button, message, Typography } from "antd";
import { useState, useEffect } from "react";
import styles from "./AdminPage.module.css";

const { Title } = Typography;

const ExhibitionTable = ({ exhibitionId, exhibitionName }: { exhibitionId: string, exhibitionName: string }) => {
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5); // Number of visible photos by default

  useEffect(() => {
    setLoading(true);
    // Temporary hardcoded photos data for each exhibition
    // This should be replaced by an actual API call in a real application
    const fetchPhotos = async () => {
      try {
        // Fetch photos for the specific exhibition based on exhibitionId
        if (exhibitionId === "1") {
          setPhotos([
            { _id: "1", title: "Photo 1", uploader: { name: "User A" }, createdAt: "2025-01-01T10:00:00Z", photoUrl: "/dummy/photo1.jpg" },
            { _id: "2", title: "Photo 2", uploader: { name: "User B" }, createdAt: "2025-01-02T10:00:00Z", photoUrl: "/dummy/photo2.jpg" },
            { _id: "3", title: "Photo 3", uploader: { name: "User C" }, createdAt: "2025-01-03T10:00:00Z", photoUrl: "/dummy/photo3.jpg" },
            { _id: "4", title: "Photo 4", uploader: { name: "User D" }, createdAt: "2025-01-04T10:00:00Z", photoUrl: "/dummy/photo4.jpg" },
            { _id: "5", title: "Photo 5", uploader: { name: "User E" }, createdAt: "2025-01-05T10:00:00Z", photoUrl: "/dummy/photo5.jpg" },
            { _id: "6", title: "Photo 6", uploader: { name: "User F" }, createdAt: "2025-01-06T10:00:00Z", photoUrl: "/dummy/photo6.jpg" },
          ]);
        } else if (exhibitionId === "2") {
          setPhotos([
            { _id: "7", title: "Photo 7", uploader: { name: "User G" }, createdAt: "2025-01-07T10:00:00Z", photoUrl: "/dummy/photo7.jpg" },
            { _id: "8", title: "Photo 8", uploader: { name: "User H" }, createdAt: "2025-01-08T10:00:00Z", photoUrl: "/dummy/photo8.jpg" },
          ]);
        }
      } catch (error) {
        console.error("Error fetching photos:", error);
        message.error("Failed to load photos");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [exhibitionId]);

  const handleViewMoreClick = () => {
    setVisibleCount(visibleCount + 5); // Load 5 more photos
  };

  const downloadPhoto = async (id: string, title: string) => {
    const link = document.createElement("a");
    link.href = `/dummy/${title}.jpg`; // Replace with your actual download URL
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
      {/* Display the exhibition name before the table */}
      <Title level={3}>{exhibitionName}</Title>

      <Table
        columns={columns}
        dataSource={photos.slice(0, visibleCount)} // Only show visible photos
        rowKey="_id"
        bordered
        loading={loading}
        pagination={false}
      />
      {photos.length > visibleCount && (
        <Button type="link" onClick={handleViewMoreClick} style={{ marginTop: "10px" }}>
          View More
        </Button>
      )}
    </div>
  );
};

export default ExhibitionTable;
