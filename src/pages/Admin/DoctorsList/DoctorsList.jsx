import {
  CloseOutlined, DeleteOutlined, MailOutlined,
  MedicineBoxOutlined, PhoneOutlined, SendOutlined,
} from "@ant-design/icons";

import { Button, Rate, Tag, Select, Input, Form } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DataTable from "../../../components/DataTable/DataTable";
import IconButton from "../../../components/IconButton/IconButton";
import Loading from "../../../components/Loading";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import doctorsList from "../../../mockData/doctorsList";
import { GET_DOC_ALL_INFORMATION } from "../../../redux/actions/DoctorAction";
import AdminLayout from "../../Layouts/AdminLayout";
import DoctorsListStyle from "./DoctorsListStyle";

const { Option } = Select;
const { Search } = Input;

const DoctorsList = () => {
  const allDoctor = useSelector(state => state.Doctor.allDoctor)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    dispatch(GET_DOC_ALL_INFORMATION(()=>{
setLoading(true)
    }))
    
  }, []);
  
  const columns = [
    {
      title: "ID",
      key: "id",
      dataIndex: "id",
      width: 80,
    },
    {
      title: "Dr. Name",
      key: "dr_name",
      dataIndex: "dr_name",
    },
    {
      title: "License No.",
      key: "license_no",
      dataIndex: "license_no",
    },
    {
      title: "Specialization",
      key: "specialization",
      dataIndex: "specialization",
      render: (specialization) => (
        <>
          {specialization.map((sp, index) => {
            return (
              <Link>
                <Tag style={{ margin: "5px" }} color="green" key={sp}>
                  {sp.toUpperCase()}
                </Tag>
              </Link>
            );
          })}
        </>
      ),
    },
    {
      title: "Address",
      key: "address",
      dataIndex: "address",
    },
    {
      title: "Ratings",
      key: "rating",
      dataIndex: "rating",
      render: (rating) => (
        <>
          {
            <div>
              <Rate
                style={{ fontSize: "10px" }}
                disabled
                allowHalf={true}
                value={rating}
              />
              {rating}
            </div>
          }
        </>
      ),
    },
    {
      title: "Contact Info",
      key: "contact",
      dataIndex: "contact",
      render: (contact) => (
        <>
          {
            <div>
              <p>
                <PhoneOutlined /> {contact.phoneNo}
              </p>
              <p>
                <MailOutlined /> {contact.mail}
              </p>
            </div>
          }
        </>
      ),
    },
    {
      title: "Date Joined",
      key: "date_joined",
      dataIndex: "date_joined",
    },
    {
      title: "Actions",
      key: "actions",
      dataIndex: "actions",
      render: (text, record) => (
        <>
          {
            <div className="action-buttons">
              <Button style={{ margin: "5px" }}>
                <MedicineBoxOutlined /> View Dr. Profile
              </Button>

              <Button
                style={{ margin: "5px" }}
                onClick={(e) => {
                  showModal(record.id, e);
                }}
              >
                <DeleteOutlined /> Delete Account
              </Button>

              <Button
                style={{ margin: "5px" }}
                onClick={(e) => {
                  toggleShowContactModal(record.id, e);
                }}
              >
                <MailOutlined /> Contact Dr.
              </Button>
            </div>
          }
        </>
      ),
    },
  ];

  // States defined here...
  const [data, setData] = useState(doctorsList);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [record, setRecord] = useState({ key: null, event: {} });
  const [showContactModal, setShowContactModal] = useState(false);
  const [message, setMessage] = useState("");

  const toggleShowContactModal = (key, e) => {
    setShowContactModal(true);
  };

  const handleSendMsgBtn = () => {
    console.log(message);
    setShowContactModal(false);
  };

  const handleMsg = (e) => {
    setMessage(e.target.value);
  };

  const deleteRecord = () => {
    const docs = [...doctorsList];
    docs.splice(record.key-1, 1);
    setData(docs);
    setConfirmDelete(false);
  };

  const showModal = (k, e) => {
    setConfirmDelete(true);
    setRecord({ ...record, key: k, event: e });
  };

if(!loading){
  return (
    <div className = "loading-screen" >
      <Loading />
    </div>
  )
}
else
  return (
    <AdminLayout>
      {allDoctor.map((item,i)=><div key={i}>{item.user.fname}</div>)}
      <DoctorsListStyle>
        <div className="doctors-list">
          <SectionHeading header="Doctors List" />
          <div className="list">
            <div className="options-bar">
              <Search
                className="searchbox"
                placeholder="Search doctors..."
                enterButton
              />
            </div>
            <DataTable
              dataSource={data}
              columns={columns}
              scroll={{ y: 450 }}
            />
          </div>
        </div>

        {/* This modal will be shown when the admin tries to delete a record */}
        <Modal
          title="Confirm"
          visible={confirmDelete}
          okText={
            <div>
              <SendOutlined /> Delete
            </div>
          }
          cancelText={
            <div>
              <CloseOutlined /> Cancel
            </div>
          }
          onOk={deleteRecord}
          onCancel={() => {
            setConfirmDelete(false);
          }}
        >
          <h4> Are you Sure you want to delete this record? </h4>
          <p>Deleting the record will delete the user's profile permanently!</p>
        </Modal>

        {/* This modal will be shown when we want to contact the dr. */}
        <Modal
          title="Contact the Dr."
          visible={showContactModal}
          onOk={handleSendMsgBtn}
          onCancel={() => {
            setShowContactModal(false);
          }}
          okText={
            <div>
              <SendOutlined /> Send
            </div>
          }
          cancelText={
            <div>
              <CloseOutlined /> Cancel
            </div>
          }
        >
          <Form>
            <Form.Item label="Write your message here..." name="sendMessage">
              <Input.TextArea name="message" onChange={handleMsg} />
            </Form.Item>
          </Form>
        </Modal>
      </DoctorsListStyle>
    </AdminLayout>
  );
};

export default DoctorsList;
