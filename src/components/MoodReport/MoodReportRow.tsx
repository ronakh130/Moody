import { StyleSheet, View } from 'react-native';
import { MoodReportNode } from './MoodReportNode';
import { FaRegFaceFrown, FaRegFaceLaughBeam, FaRegFaceMeh, FaRegFaceSmile, FaRegFaceTired } from 'rn-icons/fa6';
import { StyledHeaderText } from '../StyledHeaderText';

type MoodReportRowProps = {
  title: string;
  children: JSX.Element[];
};

export const MoodReportRow = () => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.titleContainer}>
        <StyledHeaderText>How was your day?</StyledHeaderText>
      </View>
      <View style={styles.nodeContainer}>
        <MoodReportNode Icon={FaRegFaceTired} label='awful' />
        <MoodReportNode Icon={FaRegFaceFrown} label='bad' />
        <MoodReportNode Icon={FaRegFaceMeh} label='meh' />
        <MoodReportNode Icon={FaRegFaceSmile} label='good' />
        <MoodReportNode Icon={FaRegFaceLaughBeam} label='great' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    gap: 20,
    margin: 20,
    padding: 30,
    backgroundColor: 'orange',
    borderRadius: 10,
    width: 350,
  },
  titleContainer: {
    display: 'flex',
  },
  title: {
    fontSize: 20,
  },
  nodeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
});
