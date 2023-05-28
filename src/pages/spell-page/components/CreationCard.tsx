import { Box, Card, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import React from 'react'

interface CreationCardProps {
    onClick: () => void;
}

function CreationCard({ onClick }: CreationCardProps) {
  return (
    <Card onClick={onClick} sx={{ cursor: "pointer" }}>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={9}>
            <AddCircleIcon color="primary" sx={{width: 45, height: 45}} />
            <Typography variant="h6" fontWeight="bolder">Create Spell</Typography>
        </Box>
    </Card>
  )
}

export default CreationCard