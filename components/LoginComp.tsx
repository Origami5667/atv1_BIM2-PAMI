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
            <View style={estilos.botao}>
            <Button title="Log in" onPress={() => router.push("/InicioScreen")} />
            </View>
        </View>

    );
}

const estilos = StyleSheet.create({
    containerCaixa: {
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        justifyContent: "flex-start",
        alignItems: "baseline",
        margin: 30
    },
    box: {
        height: 200,
        width: 200,
        justifyContent: "flex-start",
        alignItems: "center",
        margin: 30,
        backgroundColor: "yellow",
    },
    caixaTexto: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "gray",
        color: "white",
        margin: 10
    },
    botao: {
        margin: 15
    }
})