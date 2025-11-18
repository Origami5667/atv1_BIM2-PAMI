import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginComp() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <View style={estilos.box}>
            <Text style={estilos.titulo}>Faça seu login</Text>
            <View style={estilos.containerCaixa}>
                
                <View style={estilos.boxx}>
                    <TextInput 
                        style={estilos.caixaTexto}
                        placeholder="Sua senha"
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <TextInput 
                        style={estilos.caixaTexto}
                        placeholder="Seu nome aqui"
                        value={nome}
                        onChangeText={setNome}
                    />
                </View>
                
                <Text>Não tem uma conta?
                <Text onPress={() => router.push("/telaCadastro")} style={estilos.botao}> Crie uma aqui</Text>
                </Text>
            </View>

            <Button title="Log in" onPress={() => router.push("/InicioScreen")} />
        </View>

    );
}

const estilos = StyleSheet.create({
    containerCaixa: {
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        height: '100%',
        width: '100%',
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 30,
        backgroundColor: "yellow",
        display: "flex",
        flexDirection: "column",
        padding: 15,
    },
    caixaTexto: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "gray",
        color: "white",
        margin: 10,
        height: 30,
        width: 300,
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold"
    },
    botao:{
        color: "blue",
    },
    boxx: {
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        height: '100%',
        width: '100%',
        marginTop: 100,
    }
})