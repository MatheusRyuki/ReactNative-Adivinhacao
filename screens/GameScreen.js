import { View, Text, StyleSheet } from "react-native";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Game Screen!</Text>
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
