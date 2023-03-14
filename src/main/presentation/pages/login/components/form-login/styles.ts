import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const BoxFormContainer = styled(Box)(() => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  '& .form': {
    '&__input': {
      width: '80%',
      marginBottom: 20,
    },

    '&__button': {
      marginTop: 20,
    },
  },
}))
