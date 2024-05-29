import { Pressable, StyleSheet } from "react-native";
import { supabase } from "../lib/supabase"
import { StyledText } from "./StyledText";
import { colors, sizes } from "../utils/styles";

export const LogoutButton = () => {
  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if(error) console.error(error);
  }
  return (
    <Pressable onPress={handleLogout} style={styles.container}>
      <StyledText style={styles.text}>Logout</StyledText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.button,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: sizes.borderRadius,
  },
  text: {
    fontSize: 15,
    color: 'white',
  }
});