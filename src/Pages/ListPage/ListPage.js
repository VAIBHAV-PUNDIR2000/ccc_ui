import React from "react";
import "./ListPage.scss";
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { Table } from "react-bootstrap";
const ListPage = () => {
  const data = [
    { DatasetName: "Ds1", records: "1093", createdAt: Date.now() },

    { DatasetName: "Ds2", records: "2432", createdAt: Date.now() },

    { DatasetName: "Ds3", records: "4324", createdAt: Date.now() },

    { DatasetName: "Ds4", records: "34241", createdAt: Date.now() },

    { DatasetName: "Ds5", records: "34324", createdAt: Date.now() },
    { DatasetName: "Ds5", records: "34324", createdAt: Date.now() },
    { DatasetName: "Ds5", records: "34324", createdAt: Date.now() },
    { DatasetName: "Ds5", records: "34324", createdAt: Date.now() },
    { DatasetName: "Ds5", records: "34324", createdAt: Date.now() },
    { DatasetName: "Ds5", records: "34324", createdAt: Date.now() },
    { DatasetName: "Ds5", records: "34324", createdAt: Date.now() },
    { DatasetName: "Ds5", records: "34324", createdAt: Date.now() },
    { DatasetName: "Ds5", records: "34324", createdAt: Date.now() },
  ];

  return (
    <div className="root__list-page">
      <Table>
        <tbody style={{ display: "flex", flexDirection: "column" }}>
          {data.map((item) => {
            return (
              <tr className="list-item-data-row">
                <td>{item.DatasetName}</td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <strong>Records</strong>
                    {item.records}
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <strong>Created at</strong>
                    {item.createdAt}
                  </div>
                </td>
                <td>
                  <FaRegEdit />
                </td>
                <td>
                  <FaTrashAlt />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ListPage;
