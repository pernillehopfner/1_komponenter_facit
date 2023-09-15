import React from 'react'
import {Text,View} from 'react-native'

//Her bliver ''mit navn'' lavet, således at name kan genbruges. 

const PropsComponent = ({name}) => {
    return(
        <View>
            <Text>Mit navn er {name}</Text>
        </View>
    )
}

export default PropsComponent;