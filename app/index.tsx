import { View, Button, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Home(){
    const router = useRouter();

    return (
        <View>
            <Text>Home</Text>
            <Button title="ir para tela de login" onPress={() => router.push("/loginScreen")}/>
        </View>
    )
}