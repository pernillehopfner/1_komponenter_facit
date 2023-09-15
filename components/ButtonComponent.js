import React, {useState} from 'react'
import {Button, Text, View} from 'react-native'


const ButtonComponent = () => {

    const [active, setActive] = useState(false)
    
//Blå tekst, som man kan klikke på. Når man klikker på den sker der det, at den skifter fra ''Ja til kode'' til ''nej til kode'' 
    return(
        <View>
            <Text>{active ? "Ja til kode! :) " : "Nej til kode :("}</Text>
            <Button title={"Kode?"} onPress={()=> setActive(!active)}/>
        </View>
    )
}

export default ButtonComponent;