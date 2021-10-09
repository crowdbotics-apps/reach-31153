import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_369_7973} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a505/99f4/d242e8c9b59256d70d0e4270dfb957ac"
        }}
        style={styles.ImageBackground_369_7974}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf67/3dbe/b87c7719b166ba0bc07b20d6f1a9e8e8"
        }}
        style={styles.ImageBackground_431_1208}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6b9/1cc0/883dbdcb81ba4e3cd592554953a861c5"
        }}
        style={styles.ImageBackground_369_7977}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e06/ca78/b3da185f88a21a2a9561e096d49916a9"
        }}
        style={styles.ImageBackground_369_7981}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccc2/31e3/8bba98d1dcb65554ceb14c63ef028358"
        }}
        style={styles.ImageBackground_369_7992}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7de9/9408/b02b20549e671c5b8e35b77c8385e250"
        }}
        style={styles.ImageBackground_369_7993}
      />
      <View style={styles.View_369_7994}>
        <Text style={styles.Text_369_7994}>Comments</Text>
      </View>
      <View style={styles.View_369_7995}>
        <Text style={styles.Text_369_7995}>like</Text>
      </View>
      <View style={styles.View_369_7996}>
        <Text style={styles.Text_369_7996}>share</Text>
      </View>
      <View style={styles.View_369_7997}>
        <Text style={styles.Text_369_7997}>Reachout</Text>
      </View>
      <View style={styles.View_369_7998}>
        <Text style={styles.Text_369_7998}>Shoutout</Text>
      </View>
      <View style={styles.View_369_7999}>
        <Text style={styles.Text_369_7999}>Shoutdown</Text>
      </View>
      <View style={styles.View_369_8000}>
        <Text style={styles.Text_369_8000}>Jason statham</Text>
      </View>
      <View style={styles.View_369_8001}>
        <Text style={styles.Text_369_8001}>@jasonstatham</Text>
      </View>
      <View style={styles.View_369_8002}>
        <View style={styles.View_369_8003}>
          <Text style={styles.Text_369_8003}>Reachers</Text>
        </View>
        <View style={styles.View_369_8004}>
          <Text style={styles.Text_369_8004}>2k</Text>
        </View>
        <View style={styles.View_369_8005}>
          <Text style={styles.Text_369_8005}>Reaching</Text>
        </View>
        <View style={styles.View_369_8006}>
          <Text style={styles.Text_369_8006}>270</Text>
        </View>
        <View style={styles.View_369_8007}>
          <Text style={styles.Text_369_8007}>Staring</Text>
        </View>
        <View style={styles.View_369_8008}>
          <Text style={styles.Text_369_8008}>5</Text>
        </View>
      </View>
      <View style={styles.View_369_8009}>
        <Text style={styles.Text_369_8009}>
          English actor , typecast as the antihro, Born in shirebrook,
          Derbyshire
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5191/fb81/94544eaf5642595fbc7d65581a202c23"
        }}
        style={styles.ImageBackground_431_1217}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5191/fb81/94544eaf5642595fbc7d65581a202c23"
        }}
        style={styles.ImageBackground_431_1218}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/76af/228940e67f86b0bac1644ee295903fa1"
        }}
        style={styles.ImageBackground_431_1222}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d219/e7e2/7753f7b91c971789875cf57b53f72302"
        }}
        style={styles.ImageBackground_468_1056}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_1519_1160}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("369_8265"))
        }
      >
        <View style={styles.View_I1519_1160_369_7962} />
        <View style={styles.View_I1519_1160_369_7963}>
          <Text style={styles.Text_I1519_1160_369_7963}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_369_7973: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_369_7974: {
    width: wp("4.4685990338164245%"),
    height: hp("1.555295850409836%"),
    top: hp("6.914649504781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.676328502415459%")
  },
  ImageBackground_431_1208: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("26.229508196721312%"),
    minHeight: hp("26.229508196721312%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_369_7977: {
    width: wp("0.4830917874396135%"),
    height: hp("2.185792349726776%"),
    top: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%")
  },
  ImageBackground_369_7981: {
    width: wp("31.265686330012077%"),
    minWidth: wp("31.265686330012077%"),
    height: hp("17.68305210467896%"),
    minHeight: hp("17.68305210467896%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.29951690821256%"),
    top: hp("17.349726775956285%")
  },
  ImageBackground_369_7992: {
    width: wp("100.2415458937198%"),
    minWidth: wp("100.2415458937198%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("77.3224043715847%")
  },
  ImageBackground_369_7993: {
    width: wp("13.043478260869565%"),
    minWidth: wp("13.043478260869565%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.502415458937197%"),
    top: hp("77.3224043715847%")
  },
  View_369_7994: {
    width: wp("20.77294685990338%"),
    minWidth: wp("20.77294685990338%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.4830917874396135%"),
    top: hp("72.91666666666666%"),
    justifyContent: "flex-start"
  },
  Text_369_7994: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_7995: {
    width: wp("6.038647342995169%"),
    minWidth: wp("6.038647342995169%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.88436933876811%"),
    top: hp("72.91666666666666%"),
    justifyContent: "flex-start"
  },
  Text_369_7995: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_7996: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("103.44845684254227%"),
    top: hp("72.91666666666666%"),
    justifyContent: "flex-start"
  },
  Text_369_7996: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_7997: {
    width: wp("17.874396135265698%"),
    minWidth: wp("17.874396135265698%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.80171299441425%"),
    top: hp("72.91666666666666%"),
    justifyContent: "flex-start"
  },
  Text_369_7997: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_7998: {
    width: wp("16.666666666666664%"),
    minWidth: wp("16.666666666666664%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.18796705163043%"),
    top: hp("72.91666666666666%"),
    justifyContent: "flex-start"
  },
  Text_369_7998: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_7999: {
    width: wp("21.014492753623188%"),
    minWidth: wp("21.014492753623188%"),
    minHeight: hp("2.417392418032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.36655061141305%"),
    top: hp("72.86917264344262%"),
    justifyContent: "flex-start"
  },
  Text_369_7999: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_8000: {
    width: wp("45.169082125603865%"),
    minWidth: wp("45.169082125603865%"),
    minHeight: hp("5.05464480874317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057973%"),
    top: hp("36.47540983606557%"),
    justifyContent: "flex-start"
  },
  Text_369_8000: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 19.721878051757812,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_8001: {
    width: wp("29.71014492753623%"),
    minWidth: wp("29.71014492753623%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.26570048309179%"),
    top: hp("41.53005464480874%"),
    justifyContent: "flex-start"
  },
  Text_369_8001: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_8002: {
    width: wp("69.56521739130434%"),
    minWidth: wp("69.56521739130434%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.458937198067632%"),
    top: hp("46.58469945355191%")
  },
  View_369_8003: {
    width: wp("17.391304347826086%"),
    minWidth: wp("17.391304347826086%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_369_8003: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_8004: {
    width: wp("4.3478260869565215%"),
    minWidth: wp("4.3478260869565215%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.521739130434783%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-start"
  },
  Text_369_8004: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_8005: {
    width: wp("17.632850241545896%"),
    minWidth: wp("17.632850241545896%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.019323671497588%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_369_8005: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_8006: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.574879227053145%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_369_8006: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_8007: {
    width: wp("13.285024154589372%"),
    minWidth: wp("13.285024154589372%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.28019323671498%"),
    top: hp("2.4590163934426243%"),
    justifyContent: "flex-start"
  },
  Text_369_8007: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_8008: {
    width: wp("2.4154589371980677%"),
    minWidth: wp("2.4154589371980677%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.835748792270536%"),
    top: hp("0.1366120218579283%"),
    justifyContent: "flex-start"
  },
  Text_369_8008: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_369_8009: {
    width: wp("70.04830917874396%"),
    minWidth: wp("70.04830917874396%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.975845410628018%"),
    top: hp("54.91803278688525%"),
    justifyContent: "flex-start"
  },
  Text_369_8009: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_431_1217: {
    width: wp("7.380713126509662%"),
    height: hp("4.174337751878415%"),
    top: hp("5.563070995560109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.360943633001208%")
  },
  ImageBackground_431_1218: {
    width: wp("7.380713126509662%"),
    height: hp("4.174337751878415%"),
    top: hp("5.563070995560109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.64780768795289%")
  },
  ImageBackground_431_1222: {
    width: wp("0.4830917874396135%"),
    height: hp("2.185792349726776%"),
    top: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.33816425120773%")
  },
  ImageBackground_468_1056: {
    width: wp("4.5893719806763285%"),
    height: hp("1.639344262295082%"),
    top: hp("6.713000021345629%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.756614205917875%")
  },
  TouchableOpacity_1519_1160: {
    width: wp("31.15942028985507%"),
    minWidth: wp("31.15942028985507%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.54106280193236%"),
    top: hp("63.934426229508205%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1519_1160_369_7962: {
    flexGrow: 1,
    width: wp("31.15942028985507%"),
    height: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 119, 182, 1)"
  },
  View_I1519_1160_369_7963: {
    flexGrow: 1,
    width: wp("18.84057971014493%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.280193236714979%"),
    top: hp("1.229508196721298%"),
    justifyContent: "flex-start"
  },
  Text_I1519_1160_369_7963: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
