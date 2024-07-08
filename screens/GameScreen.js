import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Tentativa do adversário</Title>
      <View>
        <Text>Game Screen!</Text>
      </View>
      <View>
        <Text>Game Screen!</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
