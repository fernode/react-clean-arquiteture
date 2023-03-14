import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const BoxImageContainer = styled(Box)(() => ({
  '& img': {
    maxWidth: '100%',
    height: '100vh',
  },
}))
