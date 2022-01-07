import CakeIcon from '@mui/icons-material/Cake';

const nameStyle = {
	fontSize: "3em",
	fontFamily: "Roboto",
	fontWeight: "bold",
}

const designationStyle = {
	fontSize: "1em",
	fontFamily: "Roboto",
	fontWeight: "boldest",
}

const bDayStyle = {
	fontSize: "0.8em",
	fontFamily: "Roboto",
	fontWeight: "boldest",
}
const HeaderInfoSection = () => {
	return <>
		<div style={nameStyle}>Samridh Tuladhar</div>
		<div style={designationStyle}>Computer Engineer, Full Stack Web Developer</div>
		<div style={bDayStyle}>12th Nov 1996</div>
		<br />
		<div>A computer engineer with a passion for environmentally friendly automation and disdain for paperwork.</div>
	</>
}

export default HeaderInfoSection