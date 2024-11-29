import React from "react";
import "./SubFeature.css"
import chat from "../../../assets/chat-circle.png";
import Icon from "../../../assets/Icon.png";
import Breakout from "../../../assets/chart-breakout-square.png";
import Content from "../../../assets/Content.png"
const SubFeature = () => {
  const features = [
    {
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
      icon: <img src={chat} alt="" />,
    },
    {
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
      icon: <img src={Icon} alt="" />,
    },
    {
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks.",
      icon: <img src={Breakout} alt="" />,
    },
  ];

  return (
    <div className="Subfeatures-section">
      <p className="Subfeature-head">Features</p>
      <h2>Cutting-edge features for advanced analytics</h2>
      <p className="Subfeatures-description">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="Subfeature-img">
        <img src={Content} alt="" />
      </div>
      <div className="Subfeatures-container">
        {features.map((feature, index) => (
          <div key={index} className="Subfeature-card">
            <div className="Subfeature-icon">{feature.icon}</div>
            <h3 className="Subfeature-title">{feature.title}</h3>
            <p className="Subfeature-text">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubFeature;
