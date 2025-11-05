 import { StyleSheet, View } from 'react-native';
import Carrinhocomp from "../components/CarrinhoComp";
 
 export default function Catalogo(){
 
     return(
         <View style={estilos.container}>
             <Carrinhocomp/>
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