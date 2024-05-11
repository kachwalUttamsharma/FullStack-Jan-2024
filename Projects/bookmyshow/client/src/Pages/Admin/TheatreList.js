import { Table, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/loadersSlice";
import { GetAllTheatres, UpdateTheatre } from "../../APICalls/theatre";

const TheatreList = () => {
  const [theatres, setTheatres] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await GetAllTheatres();
      if (response.success) {
        setTheatres(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error);
    }
  };

  const handleStatusChange = async (theatre) => {
    try {
      dispatch(ShowLoading());
      const response = await UpdateTheatre({
        theatreId: theatre._id,
        // isActive: !theatre.isActive, // isActive: true
        ...theatre, // isActive: false
        isActive: !theatre.isActive,
      });
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      render: (_, record) => {
        return record?.owner?.name;
      },
    },
    {
      title: "Status",
      dataIndex: "isActive",
      render: (text, record) => {
        if (text) {
          return "Approved";
        } else {
          return "Pending / Blocked";
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-1">
            {record?.isActive && (
              <span
                className="underline"
                onClick={() => {
                  handleStatusChange(record);
                }}
              >
                Block
              </span>
            )}
            {!record?.isActive && (
              <span
                className="underline"
                onClick={() => {
                  handleStatusChange(record);
                }}
              >
                Approve
              </span>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={theatres} />
    </div>
  );
};

export default TheatreList;
