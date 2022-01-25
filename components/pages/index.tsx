import { CardLayout } from "./styles";
import Form from "../molecules/Form";
import React from "react";

export default function Home() {
  return (
    <CardLayout>
      <h1>Agenda.</h1>
      <Form />
    </CardLayout>
  );
}
