import React from "react";
export const userColumns = [
  { field: "displayName", headerName: "Name", width: 120 },
  {
    field: "user",
    headerName: "User",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    }
  },
  {
    field: "phone",
    headerName: "Mobile",
    width: 120
  },
  {
    field: "email",
    headerName: "Email",
    width: 250
  },

  {
    field: "address",
    headerName: "Address",
    width: 100
  },
  {
    field: "country",
    headerName: "Country",
    width: 70
    // renderCell: (params) => {
    //   return (
    //     <div className={`cellWithStatus ${params.row.status}`}>
    //       {params.row.status}
    //     </div>
    //   );
    // }
  }
];
