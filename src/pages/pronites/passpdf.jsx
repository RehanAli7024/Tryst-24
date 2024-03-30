import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";

import customfont from "./militech_r_2019-04-13.otf"
import qr from "./QRplace.png"


Font.register({
  family: 'militech',
  src: customfont,
});

import pass1 from "./Pronite1.png";
const styles = StyleSheet.create({
  text: {
    position: "absolute",
    right: "11.5%",
    top: "54%",
    color: "white",
    fontSize: "38px",
    fontFamily: "militech",
  },
  section: { margin: 10, padding: 10, flexGrow: 1 },
  qrCode: {
    position: "absolute",
    left: "10%",
    top: "54%",
    width: "35%",
  },
  text1: {
    position: "absolute",
    right: "11.5%",
    top: "58%",
    color: "white",
    fontSize: "38px",
    fontFamily: "militech",
  },
  text2: {
    position: "absolute",
    right: "11.5%",
    top: "64%",
    color: "white",
    fontSize: "38px",
    fontFamily: "militech",
  },
  page: {
    position: "relative",
    backgroundColor: "white",
  },
  imagei: {
    position: "absolute",
    left: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
  },
  qr: {
    position: "absolute",
    left: "10%",
    top: "54%",
    width: "35%",
  },
  text3: {
    position: "absolute",
    left: "13%",
    top: "50%",
    width: "35%",
    color: "white",
    fontSize: "35px",
    fontFamily: "militech",
  },
});

const PassPDF = ({ name, trystid, qrCodeUrl }) => {
  return (
    <Document>
      <Page size={{ width: 600, height: 900 }} style={styles.page}>
        <Image src={pass1} style={styles.imagei} />
        {qrCodeUrl && <Image src={qrCodeUrl} style={styles.qrCode} />}
        <Text style={styles.text}>
          {name.split(" ")[0]}
        </Text>
        <Text style={styles.text1}>
          {name.split(" ")[1]}
        </Text>
        <Text style={styles.text2}>IIT DELHI</Text>
        <Text style={styles.text3}>{trystid}</Text>
      </Page>
    </Document>
  );
};
export default PassPDF;
