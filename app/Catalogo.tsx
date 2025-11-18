import { StyleSheet, View } from "react-native";
import Catalogocomp from "../components/Catalogocomp";

export default function Catalogo() {
  return (
    <View style={estilos.container}>
      <Catalogocomp />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
});
