import { IconButton } from 'react-native-paper';

const CustomIconButton = ({ icon, onPress, color,size }: { icon: string, onPress: () => void, color: string,size:number }) => {
  return (
    <IconButton
      icon={icon}
      onPress={onPress}
      iconColor={color}
      size={size}
    />
  );
};

export default CustomIconButton;
