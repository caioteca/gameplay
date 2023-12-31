import { View, Image, Text } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
import ProfileImg from "../../assets/profile-pic.png";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/rodrigorgtic.png"/>

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.username}>
            Rodrigo
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  )
}