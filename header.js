import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

export default class Header extends Component {
  static propTypes = {
    onToggleAllComplete: PropTypes.func.isRequired,
    value: PropTypes.string,
    onAddItem: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render () {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.props.onToggleAllComplete}>
          <MaterialIcons name="check" size={32} color="green" />
          {/* <Svg
            height="24"
            width="24"
          >
            <Svg.Path
              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
              fill="green"
            />
          </Svg> */}

        </TouchableOpacity>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          placeholder="What needs to be done?"
          blurOnSubmit={false}
          returnKeyType="done"
          style={styles.input}
        ></TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  toggleIcon: {
    fontSize: 30,
    color: '#ccc'
  },
  input: {
    flex: 1,
    height: 50,
    marginLeft: 16
  }
})
