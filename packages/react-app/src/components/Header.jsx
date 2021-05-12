import React from "react";
import { PageHeader } from "antd";

// displays a page header

export default function Header() {
  return (
    <a href="https://www.formula1.com" target="_blank" rel="noopener noreferrer">
      <PageHeader
        className="Header"
        title="Formula 1"
        subTitle="NFT marketplace"
        style={{ cursor: "pointer",color:"white" }}
      />
    </a>
  );
}
