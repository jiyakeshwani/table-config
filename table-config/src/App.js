import React from "react";
import tableData from "./data.json";
import Table from "./Table";

const configOne = {
  fields: [
    {
      title: "Name",
      key: "person",
      sortable: true,
      sortHandler: (b, a) => (b.name > a.name ? 1 : -1),
      render: (value) => (
        <p className="name-column">
          <img src={value.avatar} alt={value.name} className="person-avatar" />
          {value.name}
        </p>
      ),
    },
    {
      title: "City",
      key: "city",
      sortable: true,
    },
    {
      title: "Email Address",
      key: "email",
      sortable: true,
      render: (value) => <a href={`mailto:${value}`}>{value}</a>,
    },
    {
      title: "Joining Date",
      key: "joiningDate",
      sortHandler: (b, a) =>
        new Date(b.split("/").reverse().join("-")).valueOf() >
        new Date(a.split("/").reverse().join("-")).valueOf()
          ? 1
          : -1,
      sortable: true,
    },
    {
      title: "Role",
      key: "role",
      sortable: true,
    },
  ],
};

const configTwo = {
  fields: [
    {
      title: "Name",
      key: "person",
      sortable: true,
      sortHandler: (b, a) => (b.name > a.name ? 1 : -1),
      render: (value) => (
        <p className="person-column">
          <img alt={value.name} className="person-avatar" src={value.avatar} />
          {value.name}
        </p>
      ),
    },
    {
      title: "Email Address",
      key: "email",
      render: (value) => <a href={`mailto:${value}`}>{value}</a>,
    },
    {
      title: "Role",
      key: "role",
    },
  ],
};

const configThree = {
  fields: [
    {
      title: "Email Address",
      key: "email",
      render: (value) => <a href={`mailto:${value}`}>{value}</a>,
    },
    {
      title: "Joining Date",
      key: "joiningDate",
      sortable: true,
      sortHandler: (b, a) =>
        new Date(b.split("/").reverse().join("-")).valueOf() >
        new Date(a.split("/").reverse().join("-")).valueOf()
          ? 1
          : -1,
    },
    {
      title: "Role",
      key: "role",
      sortable: true,
    },
  ],
};

const configFour = {
  fields: [
    {
      title: "Name",
      key: "person",
      render: (value) => (
        <p className="person-column">
          <img alt={value.name} className="person-avatar" src={value.avatar} />
          {value.name}
        </p>
      ),
    },
    {
      title: "City",
      key: "city",
      sortable: true,
    },
    {
      title: "Joining Date",
      key: "joiningDate",
    },
    {
      title: "Role",
      key: "role",
      sortable: true,
    },
  ],
};

function App() {
  return (
    <div>
      <Table data={tableData} tableConfig={configOne} />
      <Table data={tableData} tableConfig={configTwo} />
      <Table data={tableData} tableConfig={configThree} />
      <Table data={tableData} tableConfig={configFour} />
    </div>
  );
}

export default App;
