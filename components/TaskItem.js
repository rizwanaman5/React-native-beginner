import React from "react";

import {StyleSheet, View, Text } from "react-native";


const TaskItem = (props)=>{
    return (
        <View style={styles.listItem}>
                <Text>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    listItem : {
        padding : 10,
        marginVertical : 5,
        backgroundColor : '#ccc',
        borderColor : 'black',
        borderWidth : 1
      }
})

export default TaskItem;