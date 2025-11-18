import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function CadastroComp() {
    const router = useRouter();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConf] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const IdenSenha = () => {
        if(senha !== confSenha){
            setPasswordMatch(false);
            return;
        }

        setPasswordMatch(true);

        router.push("/loginScreen");
    }

    return (
        <View style={estilos.box}>
            <Text style={estilos.titulo}>Faça seu cadastro</Text>

            <View style={estilos.containerCaixa}>

            <TextInput style={estilos.caixaTexto}
            placeholder='   Seu nome aqui'
            value={nome}
            onChangeText={setNome}
            />
            <TextInput style={estilos.caixaTexto}
                placeholder='   Coloque seu email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={estilos.caixaTexto}
                placeholder='   Crie uma senha'
                value={senha}
                onChangeText={setSenha}
            />
            <TextInput style={estilos.caixaTexto}
                placeholder='   Confirme sua senha'
                value={confSenha}
                onChangeText={setConf}
            />
            {!passwordMatch && (
                <Text style={estilos.a}>  As senhas não são iguais</Text>
            )}

            </View>
            <Button title='Cadastrar' onPress={IdenSenha} />
        </View>
    )
    
}

const estilos = StyleSheet.create({
    containerCaixa: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderRadius: 10,
        padding: 10,
    },
    box: {
        height: '100%',
        width: '100%',
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 30,
        backgroundColor: "yellow",
    },
    caixaTexto: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "gray",
        color: "white",
        margin: 10,
        width: 300,
        display: "flex",
        flexDirection: "column",
        height: 30,
        borderRadius: 10,
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold"
    },
    a: {
        color: "white",
    }
});