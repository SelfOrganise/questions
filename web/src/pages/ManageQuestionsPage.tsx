import Box from "@material-ui/core/Box";
import React from "react";
import { AddQuestion } from "../components/AddQuestion";
import { Questions } from "../components/Questions";
import { Welcome } from "../components/Welcome";

export function ManageQuestionsPage() {
  return (
    <Box padding={5}>
      <Welcome />
      <AddQuestion />
      <Questions />
    </Box>
  );
}
