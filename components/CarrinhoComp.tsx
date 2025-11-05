import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function CarrinhoComp() {
  const router = useRouter();

  // Itens no carrinho
  const [itens, setItens] = useState([
    {
      id: '1',
      nome: 'Polo Blindado III-A',
      preco: 60000,
      imagem: 'https://cdn-icons-png.flaticon.com/512/1048/1048315.png',
      categoria: 'Veículo completo',
    },
    {
      id: '2',
      nome: 'Conversivel Blindado I-A',
      preco: 80000,
      // ✅ Imagem funcional e leve (PNG de carro)
      imagem: 'https://www.shareicon.net/data/128x128/2015/08/30/93121_car_512x512.png',
      categoria: 'Veículo completo',
    },
  ]);

  const removerItem = (id: string) => {
    setItens(itens.filter(item => item.id !== id));
  };

  const total = itens.reduce((soma, item) => soma + item.preco, 0);

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Meu Carrinho</Text>

      {/* Lista de Itens */}
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <Image source={{ uri: item.imagem }} style={estilos.imagem} />
            <View style={estilos.info}>
              <Text style={estilos.nome}>{item.nome}</Text>
              <Text style={estilos.categoria}>{item.categoria}</Text>
              <Text style={estilos.preco}>R${item.preco}</Text>
            </View>
            <TouchableOpacity
              style={estilos.botaoRemover}
              onPress={() => removerItem(item.id)}
            >
              <Text style={estilos.textoRemover}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Total e Botões */}
      <View style={estilos.footer}>
        <Text style={estilos.total}>Total: R$ {total}</Text>

        <TouchableOpacity
          style={estilos.botaoFinalizar}
          onPress={() => alert('Compra finalizada com sucesso!')}
        >
          <Text style={estilos.textoBotao}>FINALIZAR COMPRA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.botaoVoltar}
          onPress={() => router.push('/Catalogo')}
        >
          <Text style={estilos.textoVoltar}>⬅ Voltar ao Catálogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 3,
  },
  imagem: {
    width: 90,
    height: 70,
    marginRight: 10,
    borderRadius: 6,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  categoria: {
    fontSize: 12,
    color: '#666',
    marginVertical: 3,
  },
  preco: {
    color: '#004aad',
    fontWeight: 'bold',
  },
  botaoRemover: {
    backgroundColor: '#ff4d4d',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoRemover: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  botaoFinalizar: {
    backgroundColor: '#FFC107',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
  },
  textoBotao: {
    fontWeight: 'bold',
    color: '#000',
  },
  botaoVoltar: {
    marginTop: 5,
  },
  textoVoltar: {
    color: '#004aad',
    textDecorationLine: 'underline',
  },
});
