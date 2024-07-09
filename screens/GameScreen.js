import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextHandler = (direction) => {
    if (
      (direction === "menos" && currentGuess < userNumber) ||
      (direction === "mais" && currentGuess > userNumber)
    ) {
      return Alert.alert("Não minta!", "Você que isso está errado...", [
        { text: "Desculpe", style: "cancel" },
      ]);
    }

    if (direction === "menos") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Tentativa do adversário</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Mais ou menos?</InstructionText>
        <View>
          <PrimaryButton onPress={nextHandler.bind(this, "menos")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextHandler.bind(this, "mais")}>
            +
          </PrimaryButton>
        </View>
      </Card>
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
