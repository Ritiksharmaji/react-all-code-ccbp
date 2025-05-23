import { AiFillCheckCircle } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdWarning, MdInfo } from "react-icons/md";
import Notification from '../Notification';

const AlertNotifications = () => {
  const listNotification = [
    {
      name: 'Success',
      des: 'You can access all the files in the folder',
      icon: <AiFillCheckCircle />, // Pass the AiFillCheckCircle icon
      id: 1,
    },
    {
      name: 'Error',
      des: 'Sorry, you are not authorized to have access to delete the file',
      icon: <RiErrorWarningFill />, // Pass the RiErrorWarningFill icon
      id: 2,
    },
    {
      name: 'Warning',
      des: 'Viewers of this file can see comments and suggestions',
      icon: <MdWarning />, // Pass the MdWarning icon
      id: 3,
    },
    {
      name: 'Info',
      des: 'Anyone on the internet can view these files',
      icon: <MdInfo />, // Pass the MdInfo icon
      id: 4,
    },
  ];

  return (
    <>
      <h1>Alert Notifications</h1>
      <ul className="notification-unorder-list-contaner">
        {listNotification.map((noti) => (
          <li key={noti.id}>
            <Notification data={noti} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AlertNotifications;
