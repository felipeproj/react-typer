import * as React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typer from "../../components/typer/Typer";
import Countdown from "../../components/countdown/Countdown";
import { AlertConfigurationEnum } from "../../components/typer/AlertConfiguration";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function generateRandomPhrase() {
  const chars = 100;
  const letters =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz_";
  let randomPhrase = "";
  for (let i = 0; i < chars; i++) {
    randomPhrase += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return randomPhrase;
}

function Home() {
  const [phrase, setPhrase] = React.useState(generateRandomPhrase());
  const [typerDisabled, setTyperDisabled] = React.useState(false);
  const [typerStatus, setTyperStatus] = React.useState(
    AlertConfigurationEnum.default
  );
  function endGame(generatedPhrase, typedPhrase) {
    setTyperDisabled(true);
    setTyperStatus(
      generatedPhrase === typedPhrase
        ? AlertConfigurationEnum.success
        : AlertConfigurationEnum.error
    );
  }

  return (
    <Container>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={9}>
          <Typer
            generatedPhrase={phrase}
            endGame={endGame}
            disabled={typerDisabled}
            status={typerStatus}
          />
        </Grid>
        <Grid xs={3}>
          <Countdown />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
