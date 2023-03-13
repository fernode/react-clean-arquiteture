import { Grid, Typography, TextField, Button } from '@mui/material'
import Background from './assets/background.jpg'
import * as S from './styles'

export function Login() {
  return (
    <Grid container>
      <Grid item xs={7}>
        <S.BoxImageContainer>
          <img
            src={Background}
            alt="Imagem de um computador com códigos na tela"
          />
        </S.BoxImageContainer>
      </Grid>

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
            Entrar
          </Button>
        </S.BoxFormContainer>
      </Grid>
    </Grid>
  )
}
