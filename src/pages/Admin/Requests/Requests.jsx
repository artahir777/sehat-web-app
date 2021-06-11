import { ArrowRightOutlined, LeftOutlined } from "@ant-design/icons";
import { Collapse, Tabs } from "antd";
import React from "react";
import IconButton from "../../../components/IconButton/IconButton";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import AdminLayout from "../../Layouts/AdminLayout";
import RequestsStyle from "./RequestsStyle";
import user_messages from "../../../mockData/user_messages";
import Card from "../../../components/Card/Card";
import Avatar from "antd/lib/avatar/avatar";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Message = (props) => {
  return (
    <div className="message">
      <div className="details">
        <Avatar> ABC </Avatar>
        <div className="username">
          <h4 className="name"> {props.username} </h4>
          <p className="date">
            
            {props.date} at {props.time}
          </p>
        </div>
        <div className="message-title">
          <h4 className="subject"> {props.subject} </h4>
        </div>
      </div>
      <div className="message-body">
        <p className="message"> {props.message} </p>
      </div>
    </div>
  );
};

const Actions = () => {
  return (
  <div className = "action-buttons">
    <button> Reply </button>
    <button> View Activity </button>
  </div>
  );
};

const Requests = (props) => {
  return (
    <AdminLayout header="Requests & Approvals">
      <RequestsStyle>
        <div className="requests">
          <Tabs defaultActiveKey="1" className="request-tabs">
            <TabPane tab="Messages" key="1">
              <Collapse
                bordered={false}
                defaultActiveKey={["1"]}
                expandIcon={() => (
                  <h5>
                    More Details <ArrowRightOutlined />
                  </h5>
                )}
                className="messages-list"
                expandIconPosition="right"
              >
                <Panel key="1" header={<Message 
                username = "John Doe" date = "25-05-2021" time = "11:20AM"
                subject = "Reporting a comment" 
                message = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates totam, obcaecati perferendis repellendus veritatis consequatur!"
                />}>
                    <Actions/>
                </Panel>
              </Collapse>
            </TabPane>
            <TabPane tab="Requests" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Others" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </div>
      </RequestsStyle>
    </AdminLayout>
  );
};

export default Requests;
