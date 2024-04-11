import { StyleSheet, Pressable } from 'react-native';
import { IconType } from 'rn-icons';
import { StyledText } from '../StyledText';
import { colors } from '../../colors';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export interface MoodNodeProps {
  Icon: IconType;
  label: string;
  selected?: boolean;
  actionCreator: ActionCreatorWithPayload<any, string>;
}

export const MoodNode = ({ Icon, label, selected, actionCreator }: MoodNodeProps) => {
  const dispatch = useDispatch();
  const color = selected ? colors.calCurrentDay : colors.text;

  return (
    <Pressable style={styles.container} onPress={() => dispatch(actionCreator(label))}>
      <Icon size={40} fill={color} color={color} />
      {label && <StyledText>{label}</StyledText>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
