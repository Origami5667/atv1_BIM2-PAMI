import { useState } from "react";
import {useRouter} from "expo-router";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LoginComp() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={estilos.box}>
            <Text>Faça seu login</Text>
            <View style={estilos.containerCaixa}>
                <TextInput style={estilos.caixaTexto}
                    placeholder="Seu nome aqui"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput style={estilos.caixaTexto}
                    placeholder="Sua senha"
                    value={senha}
                    onChangeText={setSenha}
                />
            </View>
            <Button title="Log in" onPress={() => router.push("/InicioScreen")} />
        </View>

    );
}

const estilos = StyleSheet.create({
    containerCaixa: {
        height: 200,
        width: 200,
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        justifyContent: "flex-start",
        alignItems: "baseline",
        margin: 30
    },
    box: {
        height: 200,
        width: 200,
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 30,
    },
    caixaTexto: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "gray",
        color: "white",
        margin: 10
    }
})