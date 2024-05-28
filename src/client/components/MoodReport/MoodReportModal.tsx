import { StyleSheet, Text, Modal, Pressable, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { closeMoodModal, saveMonth,  } from '../../redux/calendarSlice';
import { MoodRow } from './MoodReportRows/MoodRow';
import { ActivityRow } from './MoodReportRows/ActivityRow';
import { EmotionsRow } from './MoodReportRows/EmotionsRow';
import { SocialRow } from './MoodReportRows/SocialRow';
import { WeatherRow } from './MoodReportRows/WeatherRow';
import { CommentsRow } from './MoodReportRows/CommentsRow';
import { getDateFromDateString } from '../../utils/util';
import { calendarController } from '../../controllers/calendarController';

export const MoodReportModal = () => {
  const dispatch = useDispatch();
  const { moodModalVisible, moods, moodModalData } = useSelector((state: RootState) => state.calendarReducer);
  const { userId } = useSelector((state: RootState) => state.authReducer);
  const moodReportRows = [MoodRow(), WeatherRow(), EmotionsRow(), SocialRow(), ActivityRow(), CommentsRow()];

  function handleClose() {
    const days = moods.map((el) => getDateFromDateString(el.date));
    const startOfCurrMonth = days.indexOf(1);

    calendarController.submitMoodReport(userId, moodModalData);
    
    dispatch(saveMonth());
    dispatch(closeMoodModal({ inactiveDays: startOfCurrMonth }));
  }

  return (
    <Modal
      animationType='slide'
      presentationStyle='pageSheet'
      visible={moodModalVisible}
      onRequestClose={handleClose}
    >
      <View style={styles.modalContainer}>
        <FlatList data={moodReportRows} renderItem={({ item }) => item} />
        <Pressable style={styles.submitButton} onPress={handleClose}>
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
    marginTop: 30,
    marginBottom: 10,
  },
  submitButton: {
    margin: 20,
  },
});
