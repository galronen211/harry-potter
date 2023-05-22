import { Avatar, AvatarGroup, Box, Card, IconButton, Typography } from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import React from 'react';
import { Spell } from '../../../models/Spell';
import { Student } from '../../../models/Student';
import { SelectionObject } from '../../../models/SelectionObject';

interface SpellCardProps {
    spell: SelectionObject
}

function SpellCard({ spell }: SpellCardProps) {
  return (
    <Card sx={{overflow: 'visible'}}>
      <Box display="flex" justifyContent="space-between" pt={1} px={2}>
        <Box
          borderRadius="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          overflow='hidden'
          mt={-3}>
          <Avatar
            alt="logo"
            src="https://i.pinimg.com/originals/f6/45/6e/f6456eb50d63646da76899ec3ea36a18.jpg"
            sx={{ width: 100, height: 100, border: 'white solid .15rem' }}
          ></Avatar>
        </Box>

        <Box textAlign='right' lineHeight={1.25}>
            <Typography fontWeight='light'>Name</Typography>
            <Typography variant="h5" fontWeight='bold'>Lumos</Typography>
        </Box>
      </Box>

        <Box display="flex" justifyContent="space-between" pt={1} px={2}>
            <Box>
                <IconButton><DeleteOutlineOutlinedIcon /></IconButton>
                <IconButton><EditOutlinedIcon /></IconButton>
            </Box>

            <Box>
                <AvatarGroup total={spell.users.length}>
                    {spell.users.slice(0, 4).map(user => <Avatar src={user.imageUrl} />)}
                </AvatarGroup>
            </Box>
        </Box>
    </Card>
  )
}

export default SpellCard