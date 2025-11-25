import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useRouter } from "expo-router";

export default function CatalogoComp() {
  const router = useRouter();

  return (
    <ScrollView style={estilos.containerGeral}>
      {/* Cabeçalho */}
      <View style={estilos.header}>
        <Text style={estilos.headerTitulo}>Engine Components</Text>
      </View>

      {/* Imagem do produto */}
      <View style={estilos.imagemContainer}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1048/1048315.png",
          }}
          style={estilos.imagemProduto}
          resizeMode="contain"
        />
      </View>

      {/* Detalhes do produto */}
      <View style={estilos.detalhesContainer}>
        <Text style={estilos.produtoNome}> Carinho blindado</Text>
        <Text style={estilos.preco}>R$ 60000</Text>

        <View style={estilos.card}>
          <Text style={estilos.cardTitulo}>Detalhes</Text>

          <View style={estilos.linha}>
            <Text style={estilos.label}>Equipamentos</Text>
            <Text style={estilos.valor}>Original</Text>
          </View>

          <View style={estilos.linha}>
            <Text style={estilos.label}>Brand</Text>
            <Text style={estilos.valor}>Volkswagen</Text>
          </View>

          <View style={estilos.linha}>
            <Text style={estilos.label}>Fornecedor</Text>
            <Text style={estilos.valor}>Auto Poderes</Text>
          </View>
        </View>

        <View style={estilos.card}>
          <Text style={estilos.cardTitulo}>Descrição do Produto</Text>
          <Text style={estilos.descricao}>
            Blindagem basica sobre um carro sedan. Nivel de blindagem III-A
          </Text>
        </View>
      </View>

      {/* Botão Add to Cart */}
      <Button
        title="Adicionar ao carrinho"
        onPress={() => router.push("/Carrinho")}
      />
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  containerGeral: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#FFC107",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  headerTitulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  imagemContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  imagemProduto: {
    width: 200,
    height: 200,
  },
  detalhesContainer: {
    paddingHorizontal: 20,
  },
  produtoNome: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  preco: {
    fontSize: 16,
    color: "#004aad",
    fontWeight: "bold",
    marginBottom: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  cardTitulo: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 15,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    color: "#555",
    fontWeight: "bold",
  },
  valor: {
    color: "#333",
  },
  link: {
    color: "#004aad",
    textDecorationLine: "underline",
  },
  descricao: {
    color: "#555",
    fontSize: 13,
    lineHeight: 18,
  },
  botao: {
    backgroundColor: "#FFC107",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  textoBotao: {
    fontWeight: "bold",
    color: "#000",
  },
});
