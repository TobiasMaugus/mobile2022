import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    text: {
        textAlign: "center"
    },
    buttonContainer:{
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 15,
    },
    button:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#eee',
        padding: 10
    },
    middleButton:{
        borderColor: '#eee',
        borderRightWidth: 1,
        borderLeftWidth: 1
    },
    fundo: {
        width: '100%'
    }
})

export default styles