import { AppBar, Button, Container } from "@mui/material"

const SelectionSectionContainer = () => {
  return <AppBar position="static" color="transparent">
    <Container maxWidth="xl">
      <Button>Experience</Button>
      <Button>Education</Button>
      <Button>Other projects</Button>
      <Button>Contact</Button>
    </Container>
  </AppBar>
}

export default SelectionSectionContainer