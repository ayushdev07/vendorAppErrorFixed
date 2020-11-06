import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Dimensions, FlatList, TextInput, LogBox } from 'react-native'
import { CheckBox } from 'react-native-elements'
import Feather from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import FeatherIcon from "react-native-vector-icons/Feather"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Spinner from 'react-native-loading-spinner-overlay'
// import ImageSlider from 'react-native-image-slider'
import AsyncStorage from '@react-native-community/async-storage'
import { useTranslation } from 'react-i18next'
import i18n from '../../components/i18n'

LogBox.ignoreAllLogs();

const UpcomingTaskSupervisorScreen = ({ navigation }) => {

  const { t } = useTranslation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      AsyncStorage.getItem('LANG').then((value) => {
        if (value == "en") { i18n.changeLanguage('en') }
        else if (value == "hi") { i18n.changeLanguage('hi') }
      });
    });
  }, [navigation]);

  const [showDescription, setShowDescription] = useState(false)
  const [showMilestone1, setShowMilestone1] = useState(false)
  const [showMilestone2, setShowMilestone2] = useState(false)
  const [showMilestone3, setShowMilestone3] = useState(false)
  const [siteCleaned, setSiteCleaned] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [areaId, setAreaId] = useState([])
  const [projectAreaWise, setProjectAreaWise] = useState()
  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(false)
  const [checked3, setChecked3] = useState(false)
  const [checked4, setChecked4] = useState(false)
  const [checked5, setChecked5] = useState(false)
  const [checked6, setChecked6] = useState(false)
  const [checked7, setChecked7] = useState(false)
  const [checked8, setChecked8] = useState(false)
  const [checked9, setChecked9] = useState(false)
  const [workDone, setWorkDone] = useState('')
  const [errors, setErrors] = useState([])

  const onSubmit = () => {
    let errors = []
    if (workDone === '') { errors.push('workDone') }
    if (siteCleaned === false) { errors.push('siteCleaned') }
    if (errors.length) { setErrors(errors) }
  }

  // let PreRequisite = [
  //   'White marking make a detailed mark at joints and a simple line for pipes',
  //   'Check the pipes dia and set the chipping depth',
  //   'Check if any damage is there in pipes',
  //   'In case of damage inform the site engineer immediately and get it replaced before chipping is done'
  // ]

  useEffect(() => { fetchAreaId(); let isMounted = true }, [])

  const fetchAreaId = async () => {
    let result = await fetch('https://uniworksvendorapis.herokuapp.com/vendor/projectArea/3')
      .then(response => {
        return response.json()
      })
      .then(json => {
        let areaId = []
        json.projectArea.forEach(element => {
          areaId.push(element.areaId)
        });
        setAreaId(areaId)
        fetchAreas(areaId)
      }).catch(e => {
        alert(e.toString())
        setLoading(false)
      }).finally(e => setLoading(false))
  }

  const fetchAreas = async (areas) => {
    let result = await fetch('https://uniworksvendorapis.herokuapp.com/vendor/projectArea/3/' + areas[0].toString())
      .then(response => {
        return response.json()
      })
      .then(json => {
        setProjectAreaWise(json)
        setLoading(false)
        console.log(json.miniCategory[0].miniCategoryName)
      }).catch(e => {
        alert(e.toString())
        setLoading(false)
      })
  }

  const handleResponse = (json) => {
    setProjectAreaWise(json)
    setLoading(false)
    console.log(json)
  }

  const handleShowDescription = () => { setShowDescription(!showDescription) }
  const handleShowMilestone1 = () => { setShowMilestone1(!showMilestone1) }
  const handleShowMilestone2 = () => { setShowMilestone2(!showMilestone2) }
  const handleShowMilestone3 = () => { setShowMilestone3(!showMilestone3) }

  const renderPrerequisite = ({ item }) => {
    return (
      <View style={{ marginStart: '5%', marginBottom: 15 }}>
        <Text style={{ color: '#353535', fontSize: 18, opacity: 0.5 }}>- {t(item)}</Text>
      </View>
    )
  }

  return (
    <>
      <ScrollView style={{ backgroundColor: "#eee" }} >
        {isLoading ?
          <Spinner visible={isLoading} textContent={t('Fetching Data')} textStyle={{ color: '#000' }} /> :
          <View style={styles.mainContainer} >
            <Text style={{ color: '#909090', fontSize: 30, alignSelf: 'center' }}>{t('Wooden Partition')}</Text>
            {/* <Text style={{ color: '#909090', fontSize: 18, alignSelf: 'center', opacity: 0.5 }}>
                  {projectAreaWise.miniCategory[0].miniCategoryName}
                </Text> */}
            <View style={{ backgroundColor: '#444', alignItems: 'center', marginBottom: '5%', marginTop: '5%' }}>
              <View style={{ alignItems: 'center', marginBottom: '5%' }}>
                <Text style={{ paddingTop: 15, color: '#fff', fontSize: 20 }}>{t('Description')}</Text>
                <View style={{ marginTop: 10, alignItems: 'center', width: '75%' }}>
                  <Text style={{ color: '#fff', fontSize: 16, textAlign: 'left' }}>
                    1. {t('Prepare the wall by making & chipping (wall choosing)')}{".\n"}
                  2. {t('Installation by pipe installation & waterproofing')}{"."}
                  </Text>
                  {showDescription ?
                    <Text style={{ color: '#fff', fontSize: 16, textAlign: 'left' }}>
                      3. {t('Testing by pressure & leakage testing')}{".\n"}
                    4. {t('Finishing by filling the conduit with mortar')}{".\n"}
                    5. {t('Hacking the finish for bonding')}{".\n"}
                    6. {t('Fixing mesh on the closed conduits')}{"."}
                    </Text> : null}
                </View>
                <View style={{ marginTop: '5%' }}>
                  <View style={styles.knowMore} >
                    <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row' }} onPress={handleShowDescription}>
                      <Text style={{ color: '#fff', marginLeft: 15 }}>{t('See More')}</Text>
                      <MaterialIcons name='keyboard-arrow-right' color='#fff' size={20} style={{ marginStart: '10%' }} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            {/* <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, opacity: 0.7, fontWeight: 'bold' }}>{t('Drawings')}</Text>
                  <View style={{ width: '100%', height: 250, marginTop: 8 }}>
                    <ImageSlider images={['http://placeimg.com/640/480/any', 'http://placeimg.com/640/480/any', 'http://placeimg.com/640/480/any']} />
                  </View>
                  <Image style={{ width: '100%', height: 250, marginTop: 8 }} source={require('../../assets/images/unnamed.jpg')} /> 
                  <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, fontWeight: 'bold', marginTop: 15, opacity: 0.7 }}>{t('Prerequisite')}</Text>
                  <View style={{ flex: 1, marginTop: 15 }}>
                    <FlatList
                      data={PreRequisite}
                      renderItem={renderPrerequisite}
                    />
                  </View> */}
            <Text style={{ alignSelf: 'center', color: '#353535', fontSize: 24, fontWeight: 'bold', marginTop: 15, opacity: 0.7 }}>{t('Milestones')}</Text>
            <View style={{ flex: 1, marginTop: 15 }}>
              <View style={{ marginStart: '4%' }}>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: "#353535", fontSize: 20, marginTop: 12, maxWidth: '80%' }}>{t('Preparing the fitting')}</Text>
                  <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                    <CheckBox checked={checked1 && checked2} onPress={() => { setChecked1(!checked1); setChecked2(!checked2); }} />
                    <View style={{ alignSelf: 'center', margin: 8 }}>
                      <TouchableOpacity onPress={handleShowMilestone1}>
                        {showMilestone1 ? <Feather name='chevron-up' size={18} /> : <Feather name='chevron-down' size={18} />}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {showMilestone1 ?
                  <>
                    <View style={{ flexDirection: 'row' }}>
                      <FeatherIcon name="alert-circle" size={18} style={{ color: 'red', marginTop: 15, marginRight: 5 }}></FeatherIcon>
                      <Text
                        style={{ color: "#353535", fontWeight: "bold", fontSize: 16, marginTop: 12, maxWidth: '80%' }}>{t('Solid wood for frame/ support')}
                      </Text>
                      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={checked1} onPress={() => setChecked1(!checked1)} />
                        {checked1 ? <View style={{ alignSelf: 'center', margin: 17 }}></View> : <View style={{ alignSelf: 'center', margin: 4 }}>
                          <TouchableOpacity>
                            <Feather name='image' size={24} />
                          </TouchableOpacity>
                        </View>}
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <FeatherIcon name="alert-circle" size={18} style={{ color: 'red', marginTop: 15, marginRight: 5 }}></FeatherIcon>
                      <Text style={{ color: "#353535", fontWeight: "bold", fontSize: 16, marginTop: 12, maxWidth: '80%' }}>
                        {t('Plywood for frame/support')}
                      </Text>
                      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={checked2} onPress={() => setChecked2(!checked2)} />
                        {checked2 ? <View style={{ alignSelf: 'center', margin: 17 }}></View> : <View style={{ alignSelf: 'center', margin: 4 }}>
                          <TouchableOpacity>
                            <Feather name='image' size={24} />
                          </TouchableOpacity>
                        </View>}
                      </View>
                    </View>
                  </> : null
                }

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: "#353535", fontSize: 20, marginTop: 12, maxWidth: '80%' }}>{t('Assembling')}</Text>
                  <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                    <CheckBox checked={checked3 && checked4} onPress={() => { setChecked3(!checked3); setChecked4(!checked4); }} />
                    <View style={{ alignSelf: 'center', margin: 8 }}>
                      <TouchableOpacity onPress={handleShowMilestone2}>
                        {showMilestone2 ? <Feather name='chevron-up' size={18} /> : <Feather name='chevron-down' size={18} />}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {showMilestone2 ?
                  <>
                    <View style={{ flexDirection: 'row' }}>
                      <FeatherIcon name="alert-circle" size={18} style={{ color: 'red', marginTop: 15, marginRight: 5 }}></FeatherIcon>
                      <Text style={{ color: "#353535", fontWeight: "bold", fontSize: 16, marginTop: 12, maxWidth: '80%' }}>
                        {t('Plywood for panels')}
                      </Text>
                      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={checked3} onPress={() => setChecked3(!checked3)} />
                        {checked3 ? <View style={{ alignSelf: 'center', margin: 17 }}></View> : <View style={{ alignSelf: 'center', margin: 4 }}>
                          <TouchableOpacity>
                            <Feather name='image' size={24} />
                          </TouchableOpacity>
                        </View>}
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <FeatherIcon name="alert-circle" size={18} style={{ color: 'red', marginTop: 15, marginRight: 5 }}></FeatherIcon>
                      <Text style={{ color: "#353535", fontWeight: "bold", fontSize: 16, marginTop: 12, maxWidth: '80%' }}>
                        {t('Plywood for partition')}
                      </Text>
                      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={checked4} onPress={() => setChecked4(!checked4)} />
                        {checked4 ? <View style={{ alignSelf: 'center', margin: 17 }}></View> : <View style={{ alignSelf: 'center', margin: 4 }}>
                          <TouchableOpacity>
                            <Feather name='image' size={24} />
                          </TouchableOpacity>
                        </View>}
                      </View>
                    </View>
                  </> : null
                }

                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: "#353535", fontSize: 20, marginTop: 12, maxWidth: '80%' }}>{t('Finishing')}</Text>
                  <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                    <CheckBox checked={checked5 && checked6 && checked7 && checked8 && checked9}
                      onPress={() => {
                        setChecked5(!checked5); setChecked6(!checked6); setChecked7(!checked7); setChecked8(!checked8); setChecked9(!checked9)
                      }} />
                    <View style={{ alignSelf: 'center', margin: 8 }}>
                      <TouchableOpacity onPress={handleShowMilestone3}>
                        {showMilestone3 ? <Feather name='chevron-up' size={18} /> : <Feather name='chevron-down' size={18} />}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {showMilestone3 ?
                  <>
                    <View style={{ flexDirection: 'row' }}>
                      <FeatherIcon name="alert-circle" size={18} style={{ color: 'red', marginTop: 15, marginRight: 5 }}></FeatherIcon>
                      <Text style={{ color: "#353535", fontWeight: "bold", fontSize: 16, marginTop: 12, maxWidth: '80%' }}>
                        {t('Fixing supports')}
                      </Text>
                      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={checked5} onPress={() => setChecked5(!checked5)} />
                        {checked5 ? <View style={{ alignSelf: 'center', margin: 17 }}></View> : <View style={{ alignSelf: 'center', margin: 4 }}>
                          <TouchableOpacity>
                            <Feather name='image' size={24} />
                          </TouchableOpacity>
                        </View>}
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <FeatherIcon name="alert-circle" size={18} style={{ color: 'red', marginTop: 15, marginRight: 5 }}></FeatherIcon>
                      <Text style={{ color: "#353535", fontWeight: "bold", fontSize: 16, marginTop: 12, maxWidth: '80%' }}>
                        {t('Fixing panels')}
                      </Text>
                      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={checked6} onPress={() => setChecked6(!checked6)} />
                        {checked6 ? <View style={{ alignSelf: 'center', margin: 17 }}></View> : <View style={{ alignSelf: 'center', margin: 4 }}>
                          <TouchableOpacity>
                            <Feather name='image' size={24} />
                          </TouchableOpacity>
                        </View>}
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <FeatherIcon name="alert-circle" size={18} style={{ color: 'red', marginTop: 15, marginRight: 5 }}></FeatherIcon>
                      <Text style={{ color: "#353535", fontWeight: "bold", fontSize: 16, marginTop: 12, maxWidth: '80%' }}>
                        {t('Check with level scale and plumb')}
                      </Text>
                      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={checked7} onPress={() => setChecked7(!checked7)} />
                        {checked7 ? <View style={{ alignSelf: 'center', margin: 17 }}></View> : <View style={{ alignSelf: 'center', margin: 4 }}>
                          <TouchableOpacity>
                            <Feather name='image' size={24} />
                          </TouchableOpacity>
                        </View>}
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <FeatherIcon name="alert-circle" size={18} style={{ color: 'red', marginTop: 15, marginRight: 5 }}></FeatherIcon>
                      <Text style={{ color: "#353535", fontWeight: "bold", fontSize: 16, marginTop: 12, maxWidth: '80%' }}>
                        {t('Cutting the Veneer as per size')}
                      </Text>
                      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={checked8} onPress={() => setChecked8(!checked8)} />
                        {checked8 ? <View style={{ alignSelf: 'center', margin: 17 }}></View> : <View style={{ alignSelf: 'center', margin: 4 }}>
                          <TouchableOpacity>
                            <Feather name='image' size={24} />
                          </TouchableOpacity>
                        </View>}
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                      <FeatherIcon name="alert-circle" size={18} style={{ color: 'red', marginTop: 15, marginRight: 5 }}></FeatherIcon>
                      <Text style={{ color: "#353535", fontWeight: "bold", fontSize: 16, marginTop: 12, maxWidth: '80%' }}>
                        {t('Fixing of veneer on the panels')}
                      </Text>
                      <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                        <CheckBox checked={checked9} onPress={() => setChecked9(!checked9)} />
                        {checked9 ? <View style={{ alignSelf: 'center', margin: 17 }}></View> : <View style={{ alignSelf: 'center', margin: 4 }}>
                          <TouchableOpacity>
                            <Feather name='image' size={24} />
                          </TouchableOpacity>
                        </View>}
                      </View>
                    </View>
                  </> : null
                }
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginEnd: '5%', marginTop: 60 }}>
              <Text style={{ color: '#353535', fontWeight: 'bold', fontSize: 18 }}>{t('Today\'s Target')}</Text>
              <Text style={{ marginStart: '5%', color: '#353535', fontSize: 18 }}>45,698 {t('Sqft')}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginEnd: '5%', marginTop: 25 }}>
              <Text style={{ color: '#353535', fontWeight: 'bold', fontSize: 18 }}>{t('Work Done')}</Text>
              <TextInput
                style={{
                  flex: 0.35, height: 40, alignSelf: "flex-start", marginStart: '5%', backgroundColor: '#AAA', borderWidth: 1, borderRadius: 10,
                  borderColor: errors.includes('workDone') ? 'red' : 'grey'
                }}
                placeholder=''
                placeholderTextColor='#000'
                keyboardType='numeric'
                onChangeText={(workDone) => setWorkDone(workDone)}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 15 }}>
              <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>{t('Site Cleaned')}</Text>
              <View style={{ marginRight: '18%' }}>
                <CheckBox checked={siteCleaned}
                  containerStyle={{
                    height: 24, width: 24, paddingLeft: 14, alignItems: "center", justifyContent: "center",
                    borderWidth: 1, borderColor: errors.includes('siteCleaned') ? 'red' : '#eee'
                  }}
                  onPress={() => setSiteCleaned(!siteCleaned)} />
              </View>
            </View>
            {/* <View style={styles.SiteEngineerRow}>
                  <Text style={{ color: '#353535', fontSize: 18, fontWeight: 'bold' }}>{t('Address')}</Text>
                  <View style={styles.SiteEngineerFiller}></View>
                  <Feather name="share-alt" color="black" size={25} style={{ top: 5 }} />
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: 'row', marginHorizontal: '20%', marginTop: 15 }}>
                    <Text style={styles.TypeStyle, { fontSize: 20 }}>{t('Type')}</Text>
                    <View style={styles.signInFiller}></View>
                    <Text style={styles.Number, { fontSize: 20 }}>{t('Number')}</Text>
                  </View>
                  <View style={{
                    marginTop: 15,
                    marginLeft: '20%', marginRight: '25%', flexDirection: 'row'
                  }}>
                    <Text style={styles.TypeStyle}>{t('Skills')}</Text>
                    <View style={styles.signInFiller}></View>
                    <Text style={styles.Number}>18</Text>
                  </View>
                  <View style={{
                    marginTop: 15,
                    marginLeft: '20%',
                    marginRight: '25%', flexDirection: 'row'
                  }}>
                    <Text style={styles.TypeStyle}>{t('Semi-skilled')}</Text>
                    <View style={styles.signInFiller}></View>
                    <Text style={styles.Number}>269</Text>
                  </View>
                  <View style={{
                    marginTop: 15,
                    marginLeft: '20%',
                    marginRight: '25%', flexDirection: 'row'
                  }}>
                    <Text style={styles.TypeStyle}>{t('Unskilled')}</Text>
                    <View style={styles.signInFiller}></View>
                    <Text style={styles.Number}>25</Text>
                  </View>
                </View > */}
            <View style={{ alignItems: 'center', marginTop: 50 }}>
              {/* <TouchableOpacity style={styles.approvedButton} onPress={() => { onSubmit(); navigation.replace('SuperVisorBottom') }}> */}
              <TouchableOpacity style={styles.approvedButton} onPress={onSubmit}>
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, color: '#fff' }}>{t('Submit')}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        }
      </ScrollView>
      <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 10, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{ borderRadius: 30, padding: 8, backgroundColor: '#fff', borderWidth: 1, borderColor: 'grey' }}>
          <FeatherIcon name="arrow-left" size={30} style={{ color: '#000' }}></FeatherIcon>
        </TouchableOpacity>
        <View style={styles.rect3}>
          <Text style={{ fontSize: 20, alignSelf: 'center' }}>{t('Area')} 1</Text>
        </View>
        <TouchableOpacity
          style={{ borderRadius: 30, marginStart: 20, padding: 8, backgroundColor: '#fff', borderWidth: 1, borderColor: 'grey' }}>
          <FeatherIcon name="arrow-right" size={30} style={{ color: '#000' }}></FeatherIcon>
        </TouchableOpacity>
      </View>
    </>
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
    color: "#000",
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
    width: "40%",
    height: 60,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(112,112,112,1)",
    borderStyle: "solid",
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: 'center',
    marginStart: 25
  },
  knowMore: {
    width: 120,
    height: 40,
    backgroundColor: "#000",
    borderWidth: 1,
    borderColor: "#fff",
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
  }
})

export default UpcomingTaskSupervisorScreen