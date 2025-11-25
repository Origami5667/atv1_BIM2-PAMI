import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, Button } from "react-native";
import { router } from "expo-router";

export default function ListingDetails() {
  const carBrands = [
    {
      name: "BMW",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    },
    {
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
    },
    {
      name: "Volvo",
      logo: "https://images.seeklogo.com/logo-png/19/2/volvo-logo-png_seeklogo-195093.png",
    },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>

      <View style={{ width: "100%", height: 240 }}>
        <Image
          source={{
            uri: "https://s2-autoesporte.glbimg.com/d3jCSBt-FNReD8wUNKM-9poo0s8=/0x0:1920x1280/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2025/Z/2/YtqBiGT56LUiZnx1rrNw/carbon-blindados-barueri-2.jpg", 
          }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      {/* TITLE + MAP */}
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 6 }}>
          CARBON BLINDAGENS
        </Text>

        <Text style={{ marginTop: 10, fontSize: 14, color: "#444" }}>
          Centro automotivo especializado em manutenção, revisão, troca de peças e
          blindagem de veículos com materiais de alta resistência.
        </Text>

        <Text style={{ marginTop: 10, fontSize: 14, color: "#444" }}>
          Atuamos há mais de 10 anos oferecendo qualidade, compromisso e segurança.
        </Text>
      </View>

      {/* SPECIALIZED */}
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 10 }}>
          Parcerias
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
          {carBrands.map((brand, index) => (
            <View
              key={index}
              style={{
                width: "30%",
                height: 75,
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <Image
                source={{ uri: brand.logo }}
                style={{
                  width: 55,
                  height: 55,
                  resizeMode: "contain",
                }}
              />
            </View>
          ))}
        </View>
      </View>
      

      {/* BUTTON */}
      <View style={{ paddingHorizontal: 16, paddingBottom: 40, marginTop: 10 }}>
             
        <Button title="Ir ao catalogo" onPress={() => router.push("/Catalogo")}/>
      </View>
    </ScrollView>

    
  );
}
