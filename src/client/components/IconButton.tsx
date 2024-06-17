import { Pressable, View, ViewStyle } from 'react-native';

type ButtonProps = {
  style: ViewStyle;
  Icon: (props: boolean) => JSX.Element;
  opacity?: number;
};

export const IconButton = ({ style, Icon, opacity }: ButtonProps) => {
  return (
    <Pressable>
      {({ pressed }) => (
        <View style={pressed ? { ...style, opacity: opacity ?? 0.7 } : style}>
          {Icon(pressed)}
        </View>
      )}
    </Pressable>
  );
};
