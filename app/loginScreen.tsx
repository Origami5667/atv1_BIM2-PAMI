import LoginConp from "../components/LoginComp";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function LoginScreen(){
    return (
        <View style={estilos.container}>
            <LoginConp />
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
    }
})