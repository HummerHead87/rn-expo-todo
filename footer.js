import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Swipeable from 'react-native-swipeable'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  static propTypes = {
    count: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
    onClearComplete: PropTypes.func.isRequired
  }
  state = {
    leftActionActivated: false
  }

  render () {
    const {leftActionActivated} = this.state
    const {filter, count, onFilter, onClearComplete} = this.props

    const rightButtons = [
      <TouchableOpacity
        style={[styles.rightSwipeItem, filter === 'ALL' && styles.selected]}
        onPress={() => onFilter('ALL')}
        key="ALL"
      >
        <Text style={styles.filtersText}>All: {count.all}</Text>
      </TouchableOpacity>,
      <TouchableOpacity
        style={[styles.rightSwipeItem, filter === 'ACTIVE' && styles.selected]}
        onPress={() => onFilter('ACTIVE')}
        key="ACTIVE"
      >
        <Text style={styles.filtersText}>Active: {count.active}</Text>
      </TouchableOpacity>,
      <TouchableOpacity
        style={[styles.rightSwipeItem, filter === 'COMPLETED' && styles.selected]}
        onPress={() => onFilter('COMPLETED')}
        key="COMPLETED"
      >
        <Text style={styles.filtersText}>Completed: {count.completed}</Text>
      </TouchableOpacity>
    ]

    const leftContent = (
      <View style={[styles.leftSwipeItem, {backgroundColor: leftActionActivated ? 'lightgoldenrodyellow' : 'steelblue'}]}>
        {leftActionActivated
          ? <Text>cleared!</Text>
          : <Text>keep pulling!</Text>}
      </View>
    )

    return (
      <Swipeable
        rightButtons={rightButtons}
        rightButtonWidth={110}
        leftContent={leftContent}
        leftActionActivationDistance={200}
        onLeftActionActivate={() => this.setState({leftActionActivated: true})}
        onLeftActionDeactivate={() => this.setState({leftActionActivated: false})}
        onLeftActionComplete={onClearComplete}
      >
        <View style={styles.container}>
          <View style={styles.row}>
            <MaterialCommunityIcons name="gesture-swipe-right" size={32} color="#4d4d4d" />
            <Text style={{marginLeft: 16}}>Clear completed</Text>
          </View>
          <View style={styles.row}>
            <Text style={{marginRight: 16}}>Filters</Text>
            <MaterialCommunityIcons name="gesture-swipe-left" size={32} color="#4d4d4d" />
          </View>
        </View>
      </Swipeable>
    )
  }
}

const styles = StyleSheet.create({
  filtersText: {
    fontSize: 14
  },
  selected: {
    backgroundColor: 'rgba(175, 47, 47, 0.2)'
  },
  container: {
    paddingHorizontal: 16,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightSwipeItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 110
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
