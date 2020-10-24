import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, CheckBox, Image, FlatList, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const UpcomingTaskScreen = ({ navigation }) => {
  const [showDescription, setShowDescription] = useState(false)
  const [siteCleaned, setSiteCleaned] = useState(false)
  const [upcomingTaskDetails, setUpcomingTaskDetails] = useState([])

  let PreRequisite = ['White marking make a detailed mark at joints and a simple line for pipes'
    , 'Check the pipes dia and set the chipping depth'
    , 'Check if any damage are there in pipes'
    , 'In case of damage inform site engineer immediately and get it replaced before chipping is done']
  var data = {
    descriptionText: 'Prepare the wall by Making & Chipping (wall choosing). Installation by Pipe installation & Waterproofing Testing by pressure & leakge testing.Finishing by Filling the condult with mortar . Hacking the finish for bonding.Fixing mesh on the closed conduits'
  }
  let mileStones = {
    milestone1: [
      {
        checked: true,
        name: 'Preapre the fitting',
        prepareFittingMileStones: [
          {
            mileStone: 'Solid wood for frame/support',
            chekced: true
          },
          {
            mileStone: 'Plywood for frame/support',
            chekced: false
          },
          {
            mileStone: 'Plywood for panels',
            chekced: true
          },
          {
            mileStone: 'Plywood for partition',
            chekced: true
          },
          {
            mileStone: 'Fixing supports',
            chekced: true
          },
          {
            mileStone: 'Fixing panels',
            chekced: false
          },
          {
            mileStone: 'Check with level scale and plumb',
            chekced: true
          },
          {
            mileStone: 'Cutting the Veneer as per size',
            chekced: false
          },
          {
            mileStone: 'Fixing of veneer on the panels',
            chekced: false
          },
        ]
      }
    ]
  }
  let array = []
  let sunarray = []
  mileStones.milestone1.map((item) => {
    array.push(item.prepareFittingMileStones)
    array.map((element) => {
      element.map((item) => {
        sunarray.push(item)
      })
    })
  })

  const fetchData = async () => {
    let result = await fetch('https://uniworksvendorapis.herokuapp.com/vendor/projectArea/1/1 ')
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(json)
      })
  }
  useEffect(() => {
    fetchData()
  }, []);
  const handleShowDescription = () => {
    setShowDescription(!showDescription)
  }
  const renderEachMileStones = ({ item }) => {
    return (
      <View style={{ marginStart: 5 }} >
        <View style={{ flexDirection: 'row', marginTop: '10%' }}  >
          <Text style={{ color: "#353535", fontSize: 18, maxWidth: '60%' }}>{item.mileStone}</Text>
          <View style={{ flex: 1, flexDirection: 'row' }} />
          <CheckBox value={item.chekced} style={{ alignSelf: 'center' }} />
          {item.chekced ? null :
            <View style={{ alignSelf: 'center', marginStart: 8 }}  >
              <TouchableOpacity  >
                <Feather name='image' size={24} />
              </TouchableOpacity>
            </View>
          }
        </View>
      </View>
    )
  }
  const renderPrerequisite = ({ item }) => {
    return (
      <View style={{ marginStart: '5%', marginBottom: 15 }} >
        <Text style={{ color: '#353535', fontSize: 18, opacity: 0.5 }}>- {item}</Text>
      </View>
    )
  }
  const renderMileStoneNames = () => {
    return (
      <View style={{ marginHorizontal: '10%' }} >
        <View >
          <FlatList
            data={sunarray}
            renderItem={renderEachMileStones}
          />
        </View>
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={styles.mainContainer} >
        <Text style={{ color: '#909090', fontSize: 30, alignSelf: 'center' }} >Wooden Partition</Text>
        <Text style={{ color: '#909090', fontSize: 18, alignSelf: 'center', opacity: 0.5 }} >Cutting & Preparing</Text>
        <View style={{ marginTop: '5%', flexDirection: 'row', marginHorizontal: '10%' }} >
          <TouchableOpacity >
            <View style={styles.icon1Stack}>
              <FeatherIcon name="arrow-left" style={styles.icon1}></FeatherIcon>
              <View style={styles.rect4}>
                <FeatherIcon name="arrow-left" style={styles.icon2}></FeatherIcon>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.signInFiller} >
            <View style={styles.rect3} >
              <Text style={{ fontSize: 20 }} >Area 1</Text>
            </View>
          </View>
          <TouchableOpacity >
            <View style={styles.icon1Stack}>
              <FeatherIcon name="arrow-right" style={styles.icon1}></FeatherIcon>
              <View style={styles.rect4}>
                <FeatherIcon name="arrow-right" style={styles.icon2}></FeatherIcon>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: '#000000', alignItems: 'center', marginBottom: '5%', marginTop: '5%' }} >
          <View style={{ alignItems: 'center', marginBottom: '5%' }} >
            <Text style={{ paddingTop: 15, color: '#ffffff', fontSize: 20 }}> Description</Text>
            <View style={{ marginTop: 10, alignItems: 'center', width: '75%' }} >
              {
                showDescription ?
                  <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'left', }}>{data.descriptionText}</Text>
                  :
                  <Text style={{ color: '#ffffff', fontSize: 16, textAlign: 'left', }}>{data.descriptionText.substring(0, 100)}</Text>
              }

            </View>
            <View style={{ marginTop: '5%' }} >
              <View style={styles.knowMore} >
                <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }} onPress={handleShowDescription}>
                  <Text style={{ color: '#ffffff' }} >See More</Text>
                  <MaterialIcons name='keyboard-arrow-right' color='#ffffff' size={20} style={{ marginStart: '10%' }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, opacity: 0.7, fontWeight: 'bold' }} >Drawings</Text>
        <Image
          style={{ width: '100%', height: 250, marginTop: 8 }}
          source={require('../../assets/images/unnamed.jpg')}
        />
        <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, fontWeight: 'bold', marginTop: 15, opacity: 0.7 }} >Prerequisite</Text>
        <View style={{ flex: 1, marginTop: 15 }} >
          <FlatList
            data={PreRequisite}
            renderItem={renderPrerequisite}
          />
        </View>
        <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, fontWeight: 'bold', marginTop: 15, opacity: 0.7 }} >Milestones</Text>
        <View style={{ flex: 1, marginTop: 15 }} >
          <FlatList
            data={mileStones.milestone1}
            renderItem={renderMileStoneNames}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginEnd: '5%', marginTop: 60 }} >
          <Text style={{ color: '#353535', fontWeight: 'bold', fontSize: 18 }}>Today's Target</Text>
          <Text style={{ marginStart: '5%', color: '#353535', fontSize: 18 }} >45,698 Sqft</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginEnd: '5%', marginTop: 25 }} >
          <Text style={{ color: '#353535', fontWeight: 'bold', fontSize: 18 }}>Work Done</Text>
          <TextInput style={{ marginStart: '5%', borderRadius: 10, backgroundColor: '#AAAAAA', padding: 5, paddingStart: 10, paddingEnd: 10 }} placeholder='45,698' placeholderTextColor='#000000' keyboardType='numeric' >
          </TextInput>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15, marginRight: '10%', marginRight: '5%' }} >
          <Text style={{ alignSelf: 'center' }} >Site Cleaned</Text>
          <CheckBox
            value={siteCleaned}
            onValueChange={() => setSiteCleaned(!siteCleaned)}
          />
        </View>
        <View style={{ marginTop: '15%', alignItems: 'flex-end', marginRight: '10%' }} >
          <Text style={{ color: '#5D83C6', fontSize: 16 }} >Report an issue</Text>
        </View>
        <View style={styles.SiteEngineerRow}>
          <Text style={{ color: '#353535', fontSize: 18, fontWeight: 'bold' }} >Address </Text>
          <View style={styles.SiteEngineerFiller}></View>
          <Feather name="share-alt" color="black" size={25} style={{ top: 5 }} />
        </View>
        <View style={{ flex: 1 }} >
          <View style={{ flexDirection: 'row', marginHorizontal: '20%', marginTop: 15 }} >
            <Text style={styles.TypeStyle, { fontSize: 20 }} >Type</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number, { fontSize: 20 }}>Number</Text>
          </View>
          <View style={{
            marginTop: 15,
            marginLeft: '20%', marginRight: '25%', flexDirection: 'row'
          }}>
            <Text style={styles.TypeStyle} >Skills</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number}>18</Text>
          </View>
          <View style={{
            marginTop: 15,
            marginLeft: '20%',
            marginRight: '25%', flexDirection: 'row'
          }}>
            <Text style={styles.TypeStyle} >Semi Skilled</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number}>269</Text>
          </View>
          <View style={{
            marginTop: 15,
            marginLeft: '20%',
            marginRight: '25%', flexDirection: 'row'
          }}>
            <Text style={styles.TypeStyle} >Unskilled</Text>
            <View style={styles.signInFiller}></View>
            <Text style={styles.Number}>25</Text>
          </View>
        </View >
        <View style={{ alignItems: 'center', marginTop: 50 }} >
          <TouchableOpacity style={styles.approvedButton} onPress={() => navigation.replace('HomeScreen')} >
            <View style={{ alignItems: 'center' }} >
              <Text style={{ fontSize: 20, color: '#ffffff' }}>Home Page</Text>
            </View>
          </TouchableOpacity >
        </View>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    marginBottom: '15%',
    marginTop: '10%'
  },
  SiteEngineerFiller: {
    flex: 1,
    flexDirection: "row",
  },
  SiteEngineerRow: {
    flexDirection: "row",
    marginTop: 80,
    marginLeft: '20%',
    marginRight: '20%',
    marginBottom: 30
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 150,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  TypeStyle: {
    color: "#000000",
  },
  signInFiller: {
    marginLeft: '15%',
    flex: 1,
    flexDirection: "row"
  },
  Number: {
    color: "#121212",
  },
  ModalRow: {
    flexDirection: "row",
    marginTop: '10%',
    marginLeft: '20%',
    marginRight: '20%'
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginTop: 8,
    marginLeft: 9
  },
  icon1Stack: {
    width: 60,
    height: 60
  },
  rect4: {
    top: 0,
    width: 60,
    height: 60,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    left: 0
  },
  rect3: {
    width: "75%",
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: 'center',
    paddingStart: 20
  },
  knowMore: {
    width: 120,
    height: 40,
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: 'center',
    paddingStart: 5,
  },
  approvedButton: {
    width: "60%",
    height: 55,
    padding: 25,
    backgroundColor: "#93D152",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    alignItems: 'center',
  },
  DropDownMenu: {
    width: "60%",
    height: '100%',
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    alignItems: 'flex-end',
    paddingStart: 0,
    alignItems: 'center',
    marginRight: '5%',
    marginHorizontal: '5%'
  },
  icon1: {
    top: 8,
    left: 9,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  textInputPhone: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
    flexDirection: 'row',
    maxWidth: '90%'
  },

})

export default UpcomingTaskScreen;
