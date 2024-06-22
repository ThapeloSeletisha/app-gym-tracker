import React from 'react'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

type Props = {}

const AddWorkoutButton = (props: Props) => {
  return (
      <IconButton sx={{ borderRadius: '50%', background: 'grey'}}>
        <AddIcon/>
      </IconButton>
  )
}

export default AddWorkoutButton