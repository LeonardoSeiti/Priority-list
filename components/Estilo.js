import {Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
export function Estilo({texto}) {
   return (
      <View>
         <Text> {texto} </Text>
         <TextInput type="text" style={{borderColor:'#000000',backgroundColor: "#C5C5C5", borderWidth:'1.5px', borderRadius:'5px',alignItems: "center",justifyContent: "center"}}/>
      </View>

   )
}
