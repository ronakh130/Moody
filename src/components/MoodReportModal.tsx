import { useState } from 'react';
import { StyleSheet, Text, Modal, Pressable, View } from 'react-native';

export const MoodReportModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      animationType='slide'
      presentationStyle='pageSheet'
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.modalContainer}>
        <Pressable onPress={() => setModalVisible(false)}>
          <Text>Close Modal</Text>
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
