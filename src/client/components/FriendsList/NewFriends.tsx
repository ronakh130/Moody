import { StyleSheet, View } from "react-native"
import { FriendRow } from "./FriendRow"
import { baseCenterFlexStyle } from "../../utils/styles"

export const NewFriends = () => {
  return (
    <View style={styles.container}>
      <FriendRow name="Rudy" status="pending"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...baseCenterFlexStyle,
    gap: 15,
    marginVertical: 15,
  }
})