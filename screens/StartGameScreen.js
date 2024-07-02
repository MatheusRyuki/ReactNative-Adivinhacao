import { TextInput, Button, View } from "react-native-web";
import PrimaryButton from "../components/PrimaryButton";

const startGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

export default startGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
});
