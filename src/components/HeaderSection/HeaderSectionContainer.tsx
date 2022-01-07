import { Grid } from "@mui/material"
import HeaderInfoSection from "./HeaderInfoSection"

const photoStyle = {
  width: "100%",
  borderRadius: "50%",
}

const HeaderSectionContainer = () => {
  return (
    <Grid container direction="row" spacing={3}>
      <Grid item xs={12} sm={6} md={3} lg={3}>
        <img src="https://avatars.githubusercontent.com/u/15893434" style={photoStyle} alt="Samridh's profile pic" />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <HeaderInfoSection />
      </Grid>
    </Grid>
  )
}

export default HeaderSectionContainer