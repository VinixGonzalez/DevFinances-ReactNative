import { StatusBar } from "expo-status-bar";
import React from "react";
import { RootSiblingParent } from "react-native-root-siblings";

import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

import Dashboard from "./src/pages/Dashboard";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <RootSiblingParent>
        <Dashboard />
      </RootSiblingParent>
    </ThemeProvider>
  );
}
