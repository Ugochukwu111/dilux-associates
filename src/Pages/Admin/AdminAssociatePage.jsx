import { useState } from "react";
import Modal from "react-modal";
import { DashBoardLayout } from "../../Components/Admin/DashBoardLayout";
import {
  icons,
  TrendingUp,
  UserPen,
  Users,
  BadgeCheck,
  RotateCcw,
  Ellipsis,
} from "lucide-react";
import "./AdminAssociatePage.css";

import profileIcon from "../../assets/icons/profile.png";

const businessName = import.meta.env.VITE_BUSINESS_NAME;

export default function AdminAssociatePage() {
  const [isOpen, setIsOpen] = useState(false);

  const associateAnalytics = [
    {
      icon: <Users />,
      label: "Number of associates",
      total: 50,
      info1: "male 50%",
      info2: "female 50%",
      backGroundColor: "#A24857",
    },
    {
      icon: <BadgeCheck />,
      label: "Verification Status",
      total: 7,
      info1: "Verified 4",
      info2: "UnVerified 3",
      backGroundColor: "#d2a800",
    },
    {
      icon: <RotateCcw />,
      label: "Recent Activity",
      total: 50,
      info1: "50%",
      info2: "50%",
      backGroundColor: "green",
    },

    {
      icon: <UserPen />,
      label: "Profile Completion",
      total: 25,
      info1: "Completed 10",
      info2: "Uncompleted 5",
      backGroundColor: "#008000",
    },
  ];

  return (
    <section>
      <h2 className="associate-header-text text-end"> Associates</h2>
      <div className="associate-data-card-wrapper ">
        <div className="flex gap-1 associate-data-card-container container ">
          {associateAnalytics.map((analytics, index) => {
            return (
              <div
                key={index}
                style={{
                  background: analytics.backGroundColor,
                }}
                className={`${analytics.backGroundColor} associate-data-card flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between gap-2 ">
                  <h3 className="text-inverse flex items-center gap-1">
                    {" "}
                    {analytics.icon} {analytics.label}
                  </h3>
                  <p className="text-inverse total">{analytics.total}</p>
                </div>

                <div className="flex items-center justify-between text-inverse">
                  <div>
                    <p className="text-inverse sub-total fw500">
                      {" "}
                      {analytics.info1}
                    </p>
                    <p className="text-inverse sub-total fw400">
                      {analytics.info2}
                    </p>
                  </div>
                  <TrendingUp size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
      <section>
        <div className="container table-container box">
          <h2 className="associate-header-text">
            {businessName} Associates(50)
          </h2>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi quo temporibus rem officiis odio rerum odit ratione
          </p>
          <table className="w-full">
            <thead className="bg-primary text-inverse">
              <tr>
                <th className="text-start">Associate Name</th>
                <th className="">Date Joined</th>
                <th className="">Status</th>
                <th className="">Region</th>
                <th className="">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="name-cell fw700  ">
                  <div className="flex items-center gap-1">
                    <figure>
                      <img src={profileIcon} alt="name" />
                    </figure>
                    Alexander Montgomery
                  </div>
                </td>
                <td className="text-center">Oct 12, 2023</td>
                <td className="text-center ">
                  <span className="verified">verified</span>
                </td>
                <td className="text-center">Beverly Hills, CA</td>
                <td className="actions flex justify-center">
                  <button
                    
                    className="btn "
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    <Ellipsis />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Popup Content</h2>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </section>
  );
}
