import React from 'react'
import { Card, Grid, Typography } from '@mui/material'
import DaysOfTheWeek from '../../utils/days-of-the-week'

interface Props {
  dateTime: Date,
  location: string,
  focus: string
}

const WorkoutCard = ({dateTime, location, focus}: Props) => {
  const [year, month, day] = [
    dateTime.getFullYear(),
    dateTime.getMonth(),
    dateTime.getDate()
  ]
  const dayOfTheWeek = DaysOfTheWeek[dateTime.getDay()];
  return (
    <Card>
      <Grid container>
        <Grid item xs={12}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
            {dayOfTheWeek} [{focus}]
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {year}/{month}/{day}
        </Grid>
        <Grid item xs={6}>
          {location}
        </Grid>
      </Grid>
    </Card>
  )
}

export default WorkoutCard