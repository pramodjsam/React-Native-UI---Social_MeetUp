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
import { LinearGradient } from "expo-linear-gradient";

const h = Dimensions.get("window").height;
const w = Dimensions.get("window").width;

const Profile = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#241332" }}>
      <ImageBackground
        source={require("../assets/photo.png")}
        style={{
          height: 0.45 * h,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 40,
          }}
        >
          <Image source={require("../assets/icons-back-light.png")} />
          <Image source={require("../assets/filter.png")} />
        </View>
        <LinearGradient
          colors={["rgba(36,19,50,1)", "transparent"]}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: w,
            height: 0.16 * h,
            transform: [{ rotate: "180deg" }],
            zIndex: 999,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 35,
              alignSelf: "center",
              transform: [{ rotate: "180deg" }],
              marginVertical: 30,
              fontFamily: "Montserrat_700Bold",
            }}
          >
            Ida Niska
          </Text>
        </LinearGradient>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 30,
              color: "#FFF",
              fontFamily: "Montserrat_700Bold",
            }}
          >
            125
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#918998",
              fontFamily: "Montserrat_600SemiBold",
            }}
          >
            FOLLOWERS
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 30,
              color: "#FFF",
              fontFamily: "Montserrat_700Bold",
            }}
          >
            150
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#918998",
              fontFamily: "Montserrat_600SemiBold",
            }}
          >
            FOLLOWING
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 30,
              color: "#FFF",
              fontFamily: "Montserrat_700Bold",
            }}
          >
            321
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#918998",
              fontFamily: "Montserrat_600SemiBold",
            }}
          >
            LIKES
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#352641",
          marginTop: 30,
          marginHorizontal: 10,
          borderRadius: 60,
          paddingHorizontal: 5,
          paddingVertical: 5,
        }}
      >
        <Text
          style={{
            color: "#918998",
            fontSize: 16,
            fontFamily: "Montserrat_600SemiBold",
            paddingLeft: 60,
          }}
        >
          POPULAR
        </Text>
        <View
          style={{
            backgroundColor: "#8A56AC",
            paddingHorizontal: 50,
            paddingVertical: 10,
            borderRadius: 60,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#fff",
              fontFamily: "Montserrat_600SemiBold",
            }}
          >
            RECENT
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#352641",
          marginHorizontal: 10,
          marginTop: 20,
          paddingVertical: 20,
          borderRadius: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Image source={require("../assets/avatar.png")} />
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileDetail")}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#FFF",
                  fontFamily: "Montserrat_700Bold",
                }}
              >
                Ida Niska
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: "#918998",
                fontFamily: "Montserrat_400Regular",
              }}
            >
              1 hour ago
            </Text>
          </View>
          <Image
            source={require("../assets/icons-chevron-light.png")}
            style={{ marginHorizontal: 50 }}
          />
        </View>
        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
            fontFamily: "Montserrat_400Regular",
            marginVertical: 20,
            color: "#918998",
            paddingHorizontal: 30,
          }}
        >
          Believe in yourself, take on your challenges, dig deep within yourself
          to conquer fears. Never let anyone bring you down. You got to keep
          going.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_400Regular",
              color: "#FFF",
              paddingHorizontal: 10,
            }}
          >
            256
          </Text>
          <Image source={require("../assets/icons-comment-dark.png")} />
          <Text
            style={{
              fontSize: 16,
              color: "#FFF",
              fontFamily: "Montserrat_400Regular",
              paddingLeft: 30,
              paddingRight: 10,
            }}
          >
            516
          </Text>
          <Image source={require("../assets/icons-like-dark.png")} />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#352641",
          marginHorizontal: 10,
          marginTop: 20,
          paddingVertical: 20,
          borderRadius: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Image source={require("../assets/avatar.png")} />
          <View
            style={{
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileDetail")}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#FFF",
                  fontFamily: "Montserrat_700Bold",
                }}
              >
                Ida Niska
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: "#918998",
                fontFamily: "Montserrat_400Regular",
              }}
            >
              1 hour ago
            </Text>
          </View>
          <Image
            source={require("../assets/icons-chevron-light.png")}
            style={{ marginHorizontal: 50 }}
          />
        </View>
        <Text
          style={{
            fontSize: 17,
            textAlign: "center",
            fontFamily: "Montserrat_400Regular",
            marginVertical: 20,
            color: "#918998",
            paddingHorizontal: 30,
          }}
        >
          Believe in yourself, take on your challenges, dig deep within yourself
          to conquer fears. Never let anyone bring you down. You got to keep
          going.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 5,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Montserrat_400Regular",
              color: "#FFF",
              paddingHorizontal: 10,
            }}
          >
            256
          </Text>
          <Image source={require("../assets/icons-comment-dark.png")} />
          <Text
            style={{
              fontSize: 16,
              color: "#FFF",
              fontFamily: "Montserrat_400Regular",
              paddingLeft: 30,
              paddingRight: 10,
            }}
          >
            516
          </Text>
          <Image source={require("../assets/icons-like-dark.png")} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
