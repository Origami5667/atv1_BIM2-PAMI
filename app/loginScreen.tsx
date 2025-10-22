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
        height: 200,
        width: 200,
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 30,
        backgroundColor: "yellow",
    }
})