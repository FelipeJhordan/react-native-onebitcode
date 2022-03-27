import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard
     } from 'react-native'
import { useState } from 'react'

import ResultImc from './ResultImc'
import styles from './style'

export default function Form() {

    const [height, setHeight] = useState(null)
    const [ weight, setWeight  ] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    function imcCalculator() {
        let heightFormat = height.replace(",",".")
        return setImc((weight/(heightFormat*heightFormat)).toFixed(2))
    }

    function verificationImc() {
        if(imc === null) {
            setErrorMessage("Campo obrigatório*")
            Vibration.vibrate()
        }
    }

    function validationImc() {
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente:")
            setErrorMessage(null)
            return
        }
        setImc(null)
        verificationImc()
        setTextButton("Calcular")
        setMessageImc("preencha o peso e altura")
    }


    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput placeholder='Ex. 1.75' style={styles.formInput} keyboardType='numeric' onChangeText={setHeight} value={height}/>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput placeholder='Ex. 75.365' style={styles.formInput} keyboardType='numeric' onChangeText={setWeight} value={weight}/>

                <TouchableOpacity style={styles.buttonCalculator} onPress={() => {
                    validationImc()
                }}><Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>
                </View>

                <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </Pressable>
    )
}