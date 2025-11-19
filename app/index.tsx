import { View, Button, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
    const router = useRouter();

    return (
        <View>
            <Text>Home</Text>
            <Button title="ir para tela de login" onPress={() => router.push("/loginScreen")} />
            <Button title="Ir para tela de cadastro" onPress={() => router.push("/telaCadastro")} />
            <Button title="Ir para tela de catálogo" onPress={() => router.push("/Catalogo")} />
            <Button title="Ir para tela de carrinho" onPress={() => router.push("/Carrinho")} />
             <Button title="Ir para tela de Inicio" onPress={() => router.push("/InicioScreen")} />
        </View>
    )
}