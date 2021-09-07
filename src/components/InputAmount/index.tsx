import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { useSnapshot } from "valtio";
import { Currency } from "../../models";
import { state } from "../../store";
import { Container, Amount, Error } from "./styles";

interface InputAmountProps extends TextInputProps {
  from?: Currency;
  control: Control;
  name: string;
  error: string;
}

const InputAmount: React.FC<InputAmountProps> = ({
  from,
  control,
  name,
  error,
  ...rest
}) => {
  const snap = useSnapshot(state);

  const handleChangeAmount = (text: string) => {
    state.currency.amount = +text;
  };

  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Amount
            placeholderTextColor={"#fff"}
            placeholder={`${new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: from ?? "EUR",
            }).format(1 as number)}`}
            keyboardType="numeric"
            onChangeText={onChange}
            value={value}
          />
        )}
      />

      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default InputAmount;

{
  /* <InputAmount
placeholderTextColor={"#fff"}
placeholder=`}
keyboardType="numeric"
/> */
}
