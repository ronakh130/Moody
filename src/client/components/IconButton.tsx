import { Pressable, View, ViewStyle } from 'react-native';

type ButtonProps = {
  style: ViewStyle;
  Icon: (props: boolean) => JSX.Element;
  opacity?: number;
  onPress: () => void;
};

export const IconButton = ({ style, Icon, opacity, onPress }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View style={pressed ? { ...style, opacity: opacity ?? 0.7 } : style}>
          {Icon(pressed)}
        </View>
      )}
    </Pressable>
  );
};
