import { Button } from "react-native";
import { supabase } from "../lib/supabase"

export const LogoutButton = () => {
  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if(error) console.error(error);
  }
  return (
    <Button title={'Logout'} onPress={handleLogout} />
  );
}