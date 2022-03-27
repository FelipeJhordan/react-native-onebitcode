import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
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
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormat = height.replace(",",".")
        const totalImc = (weight/(heightFormat*heightFormat)).toFixed(2)
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
        setImc(totalImc)
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
            <View style={styles.formContext}>
                {imc == null ? 
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput placeholder='Ex. 1.75' style={styles.formInput} keyboardType='numeric' onChangeText={setHeight} value={height}/>

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput placeholder='Ex. 75.365' style={styles.formInput} keyboardType='numeric' onChangeText={setWeight} value={weight}/>

                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => {
                        validationImc()
                    }}><Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>
                </Pressable>:                 
                <View style={styles.exibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc} />
                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => {
                        validationImc()
                    }}><Text style={styles.textButtonCalculator}>{textButton}</Text></TouchableOpacity>
                </View>
}
        <FlatList style={styles.listImcs} showsVerticalScrollIndicator={false} data={imcList.reverse()} keyExtractor={(item) => {
            item.id
        }} renderItem={({item}) => {
            return(
                <Text style={styles.resultImcItem}>
                    <Text style={styles.textResultItemList}>  Resultado IMC =</Text>
                    {item.imc}
                </Text>
            )
        }}></FlatList>
        </View>
    )
}