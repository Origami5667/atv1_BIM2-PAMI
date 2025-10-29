import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

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
            placeholder='Seu nome aqui'
            value={nome}
            onChangeText={setNome}
            />
            <TextInput style={estilos.caixaTexto}
                placeholder='Coloque seu email'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput style={estilos.caixaTexto}
                placeholder='Crie uma senha'
                value={senha}
                onChangeText={setSenha}
            />
            <TextInput style={estilos.caixaTexto}
                placeholder='Confirme sua senha'
                value={confSenha}
                onChangeText={setConf}
            />
            {!passwordMatch && (
                <Text>As senhas não são iguais</Text>
            )}
            </View>
            <Button title='Cadastrar' onPress={IdenSenha}/>
        </View>
    )
    
}

const estilos = StyleSheet.create({
    containerCaixa: {
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        height: '80%',
        width: '20%',
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
        width:'100%'
    },
    titulo: {
        fontSize: 30,
        fontWeight: "bold"
    },
});