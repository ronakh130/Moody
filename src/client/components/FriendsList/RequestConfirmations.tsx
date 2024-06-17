import { StyleSheet, View } from 'react-native';
import { baseCenterFlexStyle, colors, sizes } from '../../utils/styles';
import { FaCheck } from 'rn-icons/fa6';
import { RxCross2 } from 'rn-icons/rx';
import { IconButton } from '../IconButton';

export const RequestConfirmations = () => {
  return (
    <View style={styles.container}>
      <IconButton
        style={styles.confirmButton}
        opacity={0.4}
        Icon={(pressed) => (
          <FaCheck
            size={25}
            fill={pressed ? colors.appAccentLight : colors.appBackground}
          />
        )}
      />
      <IconButton
        style={styles.rejectButton}
        opacity={0.4}
        Icon={(pressed) => (
          <RxCross2
            size={27}
            color={pressed ? colors.appAccentDark : colors.appBackground}
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
  confirmButton: {
    backgroundColor: '#2ba32b',
    borderRadius: sizes.borderRadius,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  rejectButton: {
    backgroundColor: 'red',
    borderRadius: sizes.borderRadius,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
});
