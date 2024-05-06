
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { setModalComments } from '../../../redux/calendarSlice';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors, sizes } from '../../../utils/styles';
import { StyledText } from '../../StyledText';

export const CommentsRow = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector(
    (state: RootState) => state.calendarReducer.moodModalData
  );

  return (
    <View style={styles.rowContainer}>
      <StyledText style={styles.title}>Comments</StyledText>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          dispatch(setModalComments(text));
        }}
        value={comments}
        multiline
        autoCapitalize='none'
        autoCorrect={false}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  rowContainer: {
    gap: 20,
    marginVertical: 15,
    marginHorizontal: 30,
    padding: 30,
    backgroundColor: colors.appAccent,
    borderRadius: 10,
    width: 365,
  },
  titleContainer: {
    display: 'flex',
  },
  title: {
    fontSize: 25,
  },
  input: {
    backgroundColor: 'white',
    height: 100,
    padding: 15,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: sizes.borderRadius,
  },
});
