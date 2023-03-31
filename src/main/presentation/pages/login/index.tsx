import { Grid } from '@mui/material'
import Background from './assets/background.jpg'
import * as S from './styles'
import { FormLogin } from './components/form-login'

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

      <FormLogin />
    </Grid>
  )
}
