import { Button, Grid, TextField, Typography } from '@mui/material'
import * as S from './styles'

export function FormLogin() {
  return (
    <Grid item xs={5}>
      <S.BoxFormContainer component="form">
        <Typography variant="h2" color="initial">
          Entrar
        </Typography>
        <TextField
          className="form__input"
          id="Email"
          label="Email"
          variant="standard"
          type="email"
        />
        <TextField
          className="form__input"
          id="Password"
          label="Password"
          variant="standard"
          type="password"
        />
        <Button className="form__button" variant="contained" type="submit">
          Login
        </Button>
      </S.BoxFormContainer>
    </Grid>
  )
}
