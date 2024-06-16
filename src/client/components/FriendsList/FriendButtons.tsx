import { Pressable, StyleSheet, View } from 'react-native';
import { baseCenterFlexStyle, colors, sizes } from '../../utils/styles';
import { LuCalendarSearch } from 'rn-icons/lu';

export const FriendButtons = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        {({ pressed }) => (
          <View
            style={
              pressed
                ? { ...styles.button, opacity: 0.8 }
                : styles.button
            }
          >
            <LuCalendarSearch
              size={25}
              color={colors.appAccentDark}
              fill={colors.appBackground}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...baseCenterFlexStyle,
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    backgroundColor: colors.appBackground,
    borderRadius: sizes.borderRadius,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
});
