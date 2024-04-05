import { StyleSheet, Text, Modal, Pressable, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { closeMoodModal } from '../../redux/calendarSlice';
import { MoodReportRow } from './MoodReportRow';

export const MoodReportModal = () => {
  const dispatch = useDispatch();
  const { moodModalVisible } = useSelector((state: RootState) => state.calendarReducer);

  return (
    <Modal
      animationType='slide'
      presentationStyle='pageSheet'
      visible={moodModalVisible}
      onRequestClose={() => {
        dispatch(closeMoodModal());
      }}
    >
      <View style={styles.modalContainer}>
        <MoodReportRow />
        <Pressable onPress={() => dispatch(closeMoodModal())}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 35,
  },
});
