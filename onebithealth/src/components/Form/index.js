import { View, Text, TextInput, Button} from 'react-native'
import ResultImc from './ResultImc'

export default function Form() {
    const messageImc ="Result"
    const imc = 7.5
    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput placeholder='Ex. 1.75' keyboardType='numeric'/>

                <Text>Peso</Text>
                <TextInput placeholder='Ex. 75.365' keyboardType='numeric'/>

                <Button  title='Calcular  IMC'/>
                </View>
                <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    )
}