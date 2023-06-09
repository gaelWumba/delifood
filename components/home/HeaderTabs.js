import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTabs(props) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButtons text="Eat Now" btnColor="black" textColor="white" activeTab={props.activeTab} setActiveTab={props.setActiveTab}/>
    </View>
  )
}

const HeaderButtons = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}

    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : "black",
        fontSize: 25,
        fontWeight: 900,
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
)