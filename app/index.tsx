import { View, Button, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Home(){
    const router = useRouter();

    return (
        <View>
            <Text>Home</Text>
            <Button title="ir para tela de login" onPress={() => router.push("/loginScreen")}/>
            <Button title="Ir para tela de cadastro" onPress={() => router.push("/telaCadastro")}/>
        </View>
    )
}