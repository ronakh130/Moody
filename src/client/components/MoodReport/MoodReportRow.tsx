import { StyleSheet, View } from 'react-native';
import { MoodNode, MoodNodeProps } from './MoodNode';
import { StyledHeaderText } from '../StyledHeaderText';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

export interface MoodReportRowProps {
  title: string;
  nodes: Omit<MoodNodeProps, 'actionCreator'>[];
  actionCreator: ActionCreatorWithPayload<any, string>;
}

export const MoodReportRow = ({ title, nodes, actionCreator}: MoodReportRowProps) => {
  return (
    <View style={styles.rowContainer}>
      <View style={styles.titleContainer}>
        <StyledHeaderText>{title}</StyledHeaderText>
      </View>
      <View style={styles.nodeContainer}>
        {nodes.map((node, i) => {
          const { label, selected } = node;
          return <MoodNode Icon={node.Icon} label={label} selected={selected} actionCreator={actionCreator} key={i} />;
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
