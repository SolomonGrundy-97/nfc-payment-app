import { useEffect, useState } from "react";
import NotifyIcon from "../assets/icons/notification.png";

interface Notification {
  id: number;
  message: string;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulating API call
    const fetchNotifications = async () => {
      try {
        const response = await fetch("https://api.example.com/notifications"); // Replace with real API
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-nfcThickBlack text-nfcWhite">
      <div className="w-80 h-80 p-6 rounded-lg border border-gray-400 bg-nfcLightBlack">
        {loading ? (
          <p className="text-gray-400 text-center">Loading...</p>
        ) : notifications.length > 0 ? (
          <ul className="space-y-3">
            {notifications.map((notification) => (
              <li key={notification.id} className="p-3 bg-gray-800 rounded-md">
                {notification.message}
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center mt-24 space-y-5">
            <img
              src={NotifyIcon}
              alt="notification icon"
              className="text-gray-500"
            />
            <p className="text-gray-400">No new notifications</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
