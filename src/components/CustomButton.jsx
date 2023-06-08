import { Button, Text } from "react-native";

export const CustomButton = ({ children, ...otherProps }) => (
    <Button className="custom-button" {...otherProps}><Text>
        {children}
    </Text>
    </Button>
);
export default CustomButton;