import { StyleSheet, View } from 'react-native';
import Inicio from "../components/InicioScreen";
 
 export default function Catalogo(){
 
     return(
         <View style={estilos.container}>
             <Inicio/>
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