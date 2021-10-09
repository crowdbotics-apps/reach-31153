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
      <View style={styles.View_1478_4425}>
        <Text style={styles.Text_1478_4425}>By Reach me</Text>
      </View>
      <View style={styles.View_1478_4468}>
        <View style={styles.View_1478_4426}>
          <View style={styles.View_1478_4427}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b43d/9e2b/a08fe94a0f34882b5038e303ef9cf632"
              }}
              style={styles.ImageBackground_1478_4428}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f041/a8d1/16988cc197925dfc6fb1e6e16e8e96c3"
              }}
              style={styles.ImageBackground_1478_4434}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1478_4483}>
        <View style={styles.View_1478_4469}>
          <View style={styles.View_1478_4470}>
            <View style={styles.View_1478_4471}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/500e/abb4/2535e1265ead15c3acf091d265bd2196"
                }}
                style={styles.ImageBackground_1478_4472}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09bc/9adb/8606b038b45220ae99478652a75ee637"
                }}
                style={styles.ImageBackground_1478_4478}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1478_4467} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1478_4425: {
    width: wp("25.120772946859905%"),
    top: hp("110.24590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.38574690519324%"),
    justifyContent: "flex-start"
  },
  Text_1478_4425: {
    color: "rgba(25, 78, 247, 1)",
    fontSize: 12.278120994567871,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1478_4468: {
    width: wp("45.325503141983695%"),
    minWidth: wp("45.325503141983695%"),
    height: hp("6.693955718493852%"),
    minHeight: hp("6.693955718493852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057973%"),
    top: hp("51.65605388703894%")
  },
  View_1478_4426: {
    width: wp("45.325503141983695%"),
    height: hp("6.693955718493852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1478_4427: {
    width: wp("45.325503141983695%"),
    height: hp("6.693955718493852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1478_4428: {
    width: wp("32.07033313990791%"),
    height: hp("6.671309340846994%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1478_4434: {
    width: wp("15.118762030117756%"),
    height: hp("3.9666848104508197%"),
    top: hp("2.7272709080430317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.206726369074577%")
  },
  View_1478_4483: {
    width: wp("45.325503141983695%"),
    minWidth: wp("45.325503141983695%"),
    height: hp("6.693955718493852%"),
    minHeight: hp("6.693955718493852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.536231884057973%"),
    top: hp("51.65605388703894%")
  },
  View_1478_4469: {
    width: wp("45.325503141983695%"),
    minWidth: wp("45.325503141983695%"),
    height: hp("6.693955718493852%"),
    minHeight: hp("6.693955718493852%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1478_4470: {
    width: wp("45.325503141983695%"),
    height: hp("6.693955718493852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1478_4471: {
    width: wp("45.325503141983695%"),
    height: hp("6.693955718493852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1478_4472: {
    width: wp("32.07033313990791%"),
    height: hp("6.671309340846994%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1478_4478: {
    width: wp("15.118762030117756%"),
    height: hp("3.9666848104508197%"),
    top: hp("2.7272709080430317%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.206726369074577%")
  },
  View_1478_4467: {
    width: wp("45.325503141983695%"),
    height: hp("6.693955718493852%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
