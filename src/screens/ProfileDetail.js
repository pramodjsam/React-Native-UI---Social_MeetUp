import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const ProfileDetail = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#FFF" }}>
      <ImageBackground
        source={require("../assets/photo2.png")}
        style={{
          height: 0.5 * h,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 40,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("../assets/icons-back-light.png")} />
          </TouchableOpacity>
          <Image source={require("../assets/filter.png")} />
        </View>
        <View
          style={{
            alignItems: "center",
            alignSelf: "center",
            marginTop: 0.17 * h,
          }}
        >
          <Image
            source={require("../assets/avatar.png")}
            style={{
              height: 50,
              width: 50,
            }}
          />
          <Text
            style={{
              fontSize: 26,
              color: "#FFF",
              fontFamily: "Montserrat_700Bold",
              marginTop: 20,
            }}
          >
            Alexio Morales
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#FFF",
              fontFamily: "Montserrat_400Regular",
            }}
          >
            128k followers
          </Text>
        </View>
      </ImageBackground>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#FFF",
          flex: 1,
          marginTop: -40,
          borderRadius: 50,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            marginTop: 30,
            color: "#000",
            fontFamily: "Montserrat_600SemiBold",
          }}
        >
          Photos & Videos
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "#998FA2",
            fontFamily: "Montserrat_400Regular",
          }}
        >
          268 shots
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Image
            style={{
              borderTopLeftRadius: 40,
              borderBottomLeftRadius: 40,
              marginRight: 16,
            }}
            source={require("../assets/photo3.png")}
          />
          <View>
            <Image
              source={require("../assets/photo5.png")}
              style={{ borderTopRightRadius: 40 }}
            />
            <Image
              source={require("../assets/photo6.png")}
              style={{
                borderBottomRightRadius: 40,
                marginTop: 16,
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileDetail;
