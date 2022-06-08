import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Space, Table } from "antd";

const columns = [
  {
    title: "Player",
    dataIndex: "playerAddress",
    key: "playerAddress",
    render: (text) => (
      <div>
        <img
        style={{
            width: "50px",
            height: "50px",
            marginRight: "10px"
        }}
          src="https://ik.imagekit.io/theboringschool/The_Boring_School_-_UI/logo192_Gk6fJ0Sok.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648473703252"
          alt=""
        />
        <a>{text}</a>
      </div>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button><Link to="/pool/duo/answer">View Answer</Link></Button>
        <Button><Link to="/pool/duo/compete">Mark me Open</Link></Button>
        <Button><Link to="/pool/duo/compete">Compete</Link></Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    playerAddress: "0xc19dCsdvbYUGHB8788uhb...75AE",
  },
  {
    key: "2",
    playerAddress: "0xc19dCsdvbYUGHB8788uhb...75AE",
  },
  {
    key: "3",
    playerAddress: "0xc19dCsdvbYUGHB8788uhb...75AE",
  },
];

export default function Duo() {
  return (
    <div>
      <h1>Duo</h1>
      <Table columns={columns} dataSource={data} />
      <Button>
        <Link to="/">Go Back</Link>
      </Button>
    </div>
  );
}
