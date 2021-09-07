import React, { useEffect, useState } from "react";
import services from "../../api/services";
import AppLoading from "expo-app-loading";
import {
  Container,
  Title,
  CurrencyContent,
  SelectCurrency,
  Icon,
  CurrencyButton,
} from "./styles";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import InputAmount from "../../components/InputAmount";
import { useSnapshot } from "valtio";
import { state } from "../../store";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({});

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const snap = useSnapshot(state);

  const {} = useForm({
    resolver: yupResolver(schema),
  });

  const loadData = async () => {
    await services.getInitialData(snap.currency);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) return <AppLoading />;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Title>Currency Now</Title>

        <SelectCurrency>
          <CurrencyButton
            onPress={() => {
              state.currency.from = "EUR";
            }}
          >
            <Icon name="currency-eur" active={snap.currency.from === "EUR"} />
          </CurrencyButton>
          <CurrencyButton
            onPress={() => {
              state.currency.from = "GBR";
            }}
          >
            <Icon name="currency-gbp" active={snap.currency.from === "GBR"} />
          </CurrencyButton>
          <CurrencyButton
            onPress={() => {
              state.currency.from = "USD";
            }}
          >
            <Icon name="currency-usd" active={snap.currency.from === "USD"} />
          </CurrencyButton>
        </SelectCurrency>

        <CurrencyContent>
          <InputAmount from={snap.currency.from} />
          <InputAmount />
        </CurrencyContent>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Dashboard;
