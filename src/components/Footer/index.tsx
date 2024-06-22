import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import AddWorkoutButton from '../AddWorkoutButton'

interface Props {
  total: number
}

const Footer = ({total}: Props) => {
  return (
    <Box component="footer" sx={{ p: 1, backgroundColor: 'lightgrey', position: 'fixed', bottom: 0, width: '100%'}}>
      <Grid container>
        <Grid item xs={4} md={4} />
        <Grid item xs={4} md={4}>
          <Box sx={{display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center'}}>
            <Typography align="center">{total} workouts</Typography>
          </Box>
        </Grid>
        <Grid item xs={4} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', paddingRight:'16px'}}>
            <AddWorkoutButton/>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer