import { View, TouchableOpacity, Text } from 'react-native';

export default function Task({navigation}) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('NewTask')}>
                <Text>NewTask</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <Text>Details</Text>
            </TouchableOpacity>
        </View>
    )
}