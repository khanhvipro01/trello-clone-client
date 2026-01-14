import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typography from '@mui/material/Typography'

// import * as React from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'


import {
  useColorScheme
} from '@mui/material/styles'


// import './App.css'
import Button from '@mui/material/Button'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectedMode = event.target.value
    console.log(selectedMode)
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="label-select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: 'flex', alignContent: 'center ', gap: '5px' }}>
            <LightModeIcon fontSize='small' />
            Light
          </Box>

        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignContent: 'center ', gap: '5px' }}>
            <DarkModeIcon fontSize='small' />
            Dark
          </Box>

        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignContent: 'center ', gap: '5px' }}>
            <SettingsBrightnessIcon fontSize='small' />
            System
          </Box>

        </MenuItem>
      </Select>
    </FormControl>
  )
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
  // console.log('prefersDarkMode:', prefersDarkMode)
  // console.log('prefersLightMode:', prefersLightMode)
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect />
      <hr></hr>
      <ModeToggle />
      <Typography variant='body2' color="text.secondary">Hello</Typography >
      <Button variant="contained">Hello world</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

export default App
