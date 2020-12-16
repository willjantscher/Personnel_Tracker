import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

export default function Root(props) {
  return (
    <main>
      <Navbar />
      <Table />
    </main>
  )}