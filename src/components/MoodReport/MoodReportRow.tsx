import { StyleSheet, View } from 'react-native';
import { MoodNode, MoodNodeProps } from './MoodNode';
import { StyledHeaderText } from '../StyledHeaderText';

export interface MoodReportRowProps {
  title: string;
  nodes: MoodNodeProps[];
}

export const MoodReportRow = ({ title, nodes }: MoodReportRowProps) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.titleContainer}>
        <StyledHeaderText>{title}</StyledHeaderText>
      </View>
      <View style={styles.nodeContainer}>
        {nodes.map((node, i) => {
          return <MoodNode Icon={node.Icon} label={node.label} selected={node.selected} key={i} />;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    gap: 20,
    marginVertical: 15,
    marginHorizontal: 30,
    padding: 30,
    backgroundColor: 'orange',
    borderRadius: 10,
    width: 365,
  },
  titleContainer: {
    display: 'flex',
  },
  nodeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 25,
  },
});
