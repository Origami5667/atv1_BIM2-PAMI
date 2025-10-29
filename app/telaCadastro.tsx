import {View, StyleSheet} from 'react-native';
import CadastroComp from "../components/CadastroComp";

export default function telaCadastro(){

    return(
        <View style={estilos.container}>
            <CadastroComp/>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignItems: "center"
    }
})