import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "space-around",
        paddingTop: 30
    },
    form: {
        width: "100%",
        paddingRight: 10,
        paddingLeft: 10,    
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20
    },
    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 14,
        marginBottom: 14
    },  
    textButtonCalculator: {
        fontSize: 20,
        color: "#fff"
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    }
})

export default styles