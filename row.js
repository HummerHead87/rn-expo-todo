import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

export default class Row extends Component {
  static propTypes = {
    complete: PropTypes.bool.isRequired, // флаг завершен ли to-do
    text: PropTypes.string.isRequired, // текст to-do
    onToggleEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired,
    editing: PropTypes.bool // флаг режима редактирования текста to-do
  }

  render () {
    const {complete, text, onToggleEdit, onRemove, onUpdate, onComplete, editing} = this.props

    const textComponent = (
      <TouchableOpacity
        style={styles.textWrap}
        onLongPress={() => onToggleEdit(true)}
      >
        <Text style={[styles.text, complete && styles.complete]}>{text}</Text>
      </TouchableOpacity>
    )

    const removeButton = (
      <TouchableOpacity onPress={onRemove}>
        <MaterialIcons name="close" size={32} color="#cc9a9a" />
      </TouchableOpacity>
    )

    const editingComponent = (
      <View style={styles.textWrap}>
        <TextInput
          onChangeText={onUpdate}
          autoFocus
          value={text}
          style={styles.input}
        />
      </View>
    )

    const doneButton = (
      <TouchableOpacity
        onPress={() => onToggleEdit(false)}
      >
        <MaterialIcons name="save" size={32} color="#4d4d4d" />
      </TouchableOpacity>
    )

    return (
      <View style={styles.container}>
        <Switch
          value={complete}
          onValueChange={onComplete}
        />
        {editing ? editingComponent : textComponent}
        {editing ? doneButton : removeButton}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10
  },
  text: {
    fontSize: 20,
    color: '#4d4d4d'
  },
  complete: {
    textDecorationLine: 'line-through'
  },
  input: {
    flex: 1,
    fontSize: 20,
    padding: 0,
    color: '#4d4d4d',
    textAlignVertical: 'top'
  }
})
