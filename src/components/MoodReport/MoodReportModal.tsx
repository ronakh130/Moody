import { StyleSheet, Text, Modal, Pressable, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { closeMoodModal } from '../../redux/calendarSlice';
import { MoodReportRow, MoodReportRowProps } from './MoodReportRow';
import { moodRow } from './MoodReportRows/MoodRow';
import { weatherRow } from './MoodReportRows/WeatherRow';
import { socialRow } from './MoodReportRows/SocialRow';
import { activityRow } from './MoodReportRows/ActivityRow';
import { emotionsRow } from './MoodReportRows/EmotionsRow';

export const MoodReportModal = () => {
  const dispatch = useDispatch();
  const { moodModalVisible } = useSelector((state: RootState) => state.calendarReducer);
  const moodReportRows = [moodRow(), weatherRow(), emotionsRow(), socialRow(), activityRow()];

  function renderRows(row: MoodReportRowProps) {
    return <MoodReportRow title={row.title} nodes={row.nodes} />;
  }

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
        <FlatList data={moodReportRows} renderItem={({ item }) => renderRows(item)} />
        <Pressable style={styles.submitButton} onPress={() => dispatch(closeMoodModal())}>
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
