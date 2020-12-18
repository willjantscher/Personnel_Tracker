import React from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from "./components/Table";
import Navbar from "./components/Navbar";

export default function Root(props) {
  return (
    <main>
      <Navbar />
      <Table />
    </main>
  );
}
