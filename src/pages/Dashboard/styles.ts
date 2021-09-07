import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

interface IconProps {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg_black};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: white;

  font-size: ${RFValue(42)}px;
`;

export const CurrencyContent = styled.View`
  width: ${RFValue(300)}px;
  margin-top: 50px;
`;

export const Section = styled.View`
  flex-direction: row;

  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const CurrencyLocation = styled.Text`
  font-size: ${RFValue(34)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ValueLabel = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  margin-left: 8px;
`;

export const DateLabel = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  margin-left: 8px;
`;

export const Icon = styled(MaterialCommunityIcons)<IconProps>`
  margin: 0 28px;
  font-size: ${RFValue(28)}px;
  color: ${({ theme, active }) =>
    active ? theme.colors.gold : theme.colors.text};
`;

export const SelectCurrency = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

export const CurrencyButton = styled(RectButton).attrs({
  activeOpacity: 0,
})``;
