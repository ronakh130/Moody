import { StyleSheet, View } from 'react-native';
import { baseCenterFlexStyle, colors, sizes } from '../../utils/styles';
import { LuCalendarSearch } from 'rn-icons/lu';
import { IconButton } from '../IconButton';

export const FriendButtons = () => {
  return (
    <View style={styles.container}>
      <IconButton
        style={styles.button}
        Icon={() => (
          <LuCalendarSearch
            size={25}
            color={colors.appAccentDark}
            fill={colors.appBackground}
          />
        )}
      />
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
