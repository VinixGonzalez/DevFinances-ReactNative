import api from "..";
import { ConvertResponseType, CurrencyData } from "../../models";
import Toast from "react-native-root-toast";
import { state } from "../../store";

export default {
  async getInitialData({ from, to }: CurrencyData) {
    try {
      const { data } = await api.get<ConvertResponseType>(
        `convert?from=${from}&to=${to}&places=2`
      );

      if (!data.success)
        throw new Error(
          "An error occurred when fetching data from the server. Sorry ;("
        );

      state.currency = { ...data.query };
    } catch (error) {
      Toast.show(error.message, {
        duration: Toast.durations.LONG,
      });
    }
  },
};
