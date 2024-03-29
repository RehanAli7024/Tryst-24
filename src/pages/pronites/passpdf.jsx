import React from "react";
import {Page, Text, Image, Document, StyleSheet, View} from "@react-pdf/renderer";    

const styles = StyleSheet.create({
    page: {
		fontFamily: 'Archivo',
		flexDirection: 'row',
		backgroundColor: '#0c113e',
	},
	title: {
		position: 'absolute',
		left: "590",
		top: "120",
		width: "924",
		fontSize: "50",
		color: "#fff",
		fontWeight: "700",
	},
	dull:{
		fontSize: "25",
		color: "#fff7",
		fontWeight: "400",
		marginBottom: "10",
	},
	mainFlex: {
		position: 'absolute',
		left: "590",
		top: "233",
		width: "924",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-between",
		alignItems: "center",
	},
	mainCard1:{
		width: "35%",
		marginBottom: "20",
	},
	mainCard2:{
		width: "65%",
		marginBottom: "20",
	},
	detail:{
		fontSize: "25",
		fontWeight: 500,
		color: "#fff",
	},
	pronite :{
		position: 'absolute',
		width: "224",
		height: "50",
		borderRadius: "10",
		backgroundColor: "#93ffd8",
		color: "#000",
		fontSize: "31",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontWeight: "500",
		top: "33",
		left: "581"
	},
	dottedLine: {
		borderRightWidth: 6,
		borderRightStyle: 'dashed',
		borderRightColor: '#8c8d8d',
		height: "100%",
		top: "0",
		left: "1522",
	  },
	smallText : {
        position: 'absolute',
        height: "249",
        width: "253",
		top: "133",
		left: "860",
		fontSize: "30",
		color: "#fff",
		fontWeight: "500"

	}, 
    qrBox: {
        position: 'absolute',
        height: "249",
        width: "253",
        borderRadius: "15",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: "1657",
        top: "158",
        backgroundColor: "#fff" 
    },
    qr: {
        width: "232",
        height:"232",
    }
});

const PassPDF = (data) => {
    return (
        <Document>
		{console.log(data)}
		<Page size={{ width: 2021.1, height: 527.3 }} style={styles.page}>
			{/* <Image src={passBg1} style={{height: '100%', width: "552", position: 'absolute', top: "0", left: "0" }} /> */}
			{/* <Image src={token} style={{height: '42', width: "228", position: 'absolute', top: "86", right: "125" }} /> */}
			<View style={styles.dottedLine} />
			<Text style={styles.smallText}>({data.date})</Text>
			<View style={styles.pronite}>
				<Text>Pronite</Text>
			</View>
			<View style={styles.title}>
				<Text>TRYST'23</Text>
				<Text style={styles.dull}>Show this ticket at the entrance</Text>
			</View>
			<View style={styles.mainFlex}>
				<View style={styles.mainCard1}>
					<Text style={styles.dull}>Your Name</Text>
					{/* <Text style={styles.detail}>{data.userName.length > 25 ? data.userName.slice(0,24)+"..." : data.userName}</Text> */}
				</View>
				<View style={styles.mainCard2}>
					<Text style={styles.dull}>Venue</Text>
					<Text style={styles.detail}>Open Air Theater (OAT), IIT Delhi</Text>
				</View>
				<View style={styles.mainCard1}>
					<Text style={styles.dull}>Date</Text>
					<Text style={styles.detail}>{data.date}</Text>
				</View>
				<View style={styles.mainCard2}>
					<Text style={styles.dull}>Time</Text>
					<Text style={styles.detail}>5 PM</Text>
				</View>
				<View style={styles.mainCard1}>
					<Text style={styles.dull}>Tryst ID</Text>
					{/* <Text style={styles.detail}>{data.id}</Text> */}
				</View>
				<View style={styles.mainCard2}>
					<Text style={styles.dull}>College Name</Text>
					{/* <Text style={styles.detail}>{data.college.length > 45 ? data.college.slice(0,45) + "..." : data.college}</Text> */}
				</View>
			</View>
            {/* <View style={styles.qrBox}>
                <Image style={styles.qr} src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data.qr}`} />
            </View> */}
		</Page>
	</Document>
    );
};
export default PassPDF;