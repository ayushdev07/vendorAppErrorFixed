import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/FontAwesome'

export default class RenderMilestones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked1: true, checked2: false, checked3: false, checked4: false, checked5: false,
            checked6: false, checked7: false, checked8: false, checked9: false,
        }
    }

    render() {
        return (
            <View style={{ marginStart: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#353535", fontSize: 18, marginTop: 12, maxWidth: '80%' }}>Solid wood for frame/ support</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={this.state.checked1} onPress={() => this.setState({ checked1: !this.state.checked1 })} />
                        {this.state.checked1 ? null : <View style={{ alignSelf: 'center', marginStart: 8 }}  >
                            <TouchableOpacity>
                                <Feather name='image' size={24} />
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#353535", fontSize: 18, marginTop: 12, maxWidth: '80%' }}>Plywood for frame/support</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={this.state.checked2} onPress={() => this.setState({ checked2: !this.state.checked2 })} />
                        {this.state.checked2 ? null : <View style={{ alignSelf: 'center', marginStart: 8 }}  >
                            <TouchableOpacity>
                                <Feather name='image' size={24} />
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#353535", fontSize: 18, marginTop: 12, maxWidth: '80%' }}>Plywood for panels</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={this.state.checked3} onPress={() => this.setState({ checked3: !this.state.checked3 })} />
                        {this.state.checked3 ? null : <View style={{ alignSelf: 'center', marginStart: 8 }}  >
                            <TouchableOpacity>
                                <Feather name='image' size={24} />
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#353535", fontSize: 18, marginTop: 12, maxWidth: '80%' }}>Plywood for partition</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={this.state.checked4} onPress={() => this.setState({ checked4: !this.state.checked4 })} />
                        {this.state.checked4 ? null : <View style={{ alignSelf: 'center', marginStart: 8 }}  >
                            <TouchableOpacity>
                                <Feather name='image' size={24} />
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#353535", fontSize: 18, marginTop: 12, maxWidth: '80%' }}>Fixing supports</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={this.state.checked5} onPress={() => this.setState({ checked5: !this.state.checked5 })} />
                        {this.state.checked5 ? null : <View style={{ alignSelf: 'center', marginStart: 8 }}  >
                            <TouchableOpacity>
                                <Feather name='image' size={24} />
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#353535", fontSize: 18, marginTop: 12, maxWidth: '80%' }}>Fixing panels</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={this.state.checked6} onPress={() => this.setState({ checked6: !this.state.checked6 })} />
                        {this.state.checked6 ? null : <View style={{ alignSelf: 'center', marginStart: 8 }}  >
                            <TouchableOpacity>
                                <Feather name='image' size={24} />
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#353535", fontSize: 18, marginTop: 12, maxWidth: '80%' }}>Check with level scale and plumb</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={this.state.checked7} onPress={() => this.setState({ checked7: !this.state.checked7 })} />
                        {this.state.checked7 ? null : <View style={{ alignSelf: 'center', marginStart: 8 }}  >
                            <TouchableOpacity>
                                <Feather name='image' size={24} />
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#353535", fontSize: 18, marginTop: 12, maxWidth: '80%' }}>Cutting the Veneer as per size</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={this.state.checked8} onPress={() => this.setState({ checked8: !this.state.checked8 })} />
                        {this.state.checked8 ? null : <View style={{ alignSelf: 'center', marginStart: 8 }}  >
                            <TouchableOpacity>
                                <Feather name='image' size={24} />
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: "#353535", fontSize: 18, marginTop: 12, maxWidth: '80%' }}>Fixing of veneer on the panels</Text>
                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={this.state.checked9} onPress={() => this.setState({ checked9: !this.state.checked9 })} />
                        {this.state.checked9 ? null : <View style={{ alignSelf: 'center', marginStart: 8 }}  >
                            <TouchableOpacity>
                                <Feather name='image' size={24} />
                            </TouchableOpacity>
                        </View>}
                    </View>
                </View>
            </View >
        )
    }
}
