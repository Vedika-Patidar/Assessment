import React from "react";
import "./FeatureSection.css"; 
import chat from "../../../assets/chat-circle.png"
import Icon from "../../../assets/Icon.png"
import Smile from "../../../assets/smile.png"
import Breakout from "../../../assets/chart-breakout-square.png"

const FeaturesSection = () => {
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
    {
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
      icon: <img src={Smile} alt="" />,
    },
    {
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
      icon: "🔗",
    },
    {
      title: "Our people make the difference",
      description:
        "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
      icon: "🤝",
    },
  ];

  return (
    <div className="features-section">
      <p className="feature-head">Features</p>
      <h2>Analytics that feels like it’s from the future</h2>
      <p className="features-description">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
