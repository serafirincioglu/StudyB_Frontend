import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {TextInput, View, StyleSheet,Dimensions} from 'react-native';
const {widht: WIDTH } = Dimensions.get('window')
const propTypes = {
    mapElement: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    maxLenght: PropTypes.number,
    keyboardType: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    label: PropTypes.string
};

const defaultProps = {
    mapElement: (n) => {},
    onSubmitEditing: () => {},
    onChangeText: () => {},
    value: "",
    placeholder: "",
    maxLenght: 200,
    keyboardType: "default",
    secureTextEntry: false,
    label: ""

};

const styles = StyleSheet.create({
    inputBox: {
        width: WIDTH,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45, 
        backgroundColor: 'rgba(0, 0, 0, 1)',
        color: 'rgba(255,255,255, 1)',
        marginHorizontal: 0,
        marginVertical: 15
    }
});

class InputText extends Component{
   state = {
       value: ""
   }
   componentDidMount(){
        this.setState({
            value: this.props.value
        })

   }
   onChangeText = (value) => {
       
    this.setState({
            value
       }, () => {
           this.props.onChangeText(value);
       }
       )
   }
    
    render() {
        console.log(this.props.value);
        const {placeholder,secureTextEntry,keyboardType,maxLenght,value,onChangeText,onSubmitEditing} = this.props;
        return (
            <View>
                <TextInput
                    style={styles.inputBox}
                    placeholder={placeholder}
                    placeholderTextColor="rgba(255,255,255,0.8)"
                    selectionColor="#999999"
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    maxLength={maxLenght}
                    returnKeyType="next"
                    value={this.state.value}
                    onSubmitEditing={onSubmitEditing}
                    onChangeText={this.onChangeText}/>
            </View>
        )
    }


}

InputText.defaultProps = defaultProps;
InputText.propTypes = propTypes;
export default InputText;