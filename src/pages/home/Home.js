import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typer from "../../components/typer/Typer";
import Countdown from "../../components/countdown/Countdown";
import generateRandomPhrase from "../../shared/randomPhrase";
import { AlertConfigurationEnum } from "../../components/typer/AlertConfiguration";

function Home() {
  const [typedPhrase, setTypedPhrase] = React.useState("");
  const [phrase, setPhrase] = React.useState("");
  const [typerDisabled, setTyperDisabled] = React.useState(true);
  const [typerStatus, setTyperStatus] = React.useState(
    AlertConfigurationEnum.default
  );

  React.useEffect(() => {
    if (phrase === typedPhrase && phrase !== "") {
      endGame();
    }
  }, [typedPhrase]);

  function endGame() {
    setTyperDisabled(true);
    setTyperStatus(
      phrase === typedPhrase
        ? AlertConfigurationEnum.success
        : AlertConfigurationEnum.error
    );
  }

  function startGame() {
    setTypedPhrase("");
    setTyperStatus(AlertConfigurationEnum.default);
    setPhrase(generateRandomPhrase(10));
    setTyperDisabled(false);
  }

  function pauseGame() {
    setTyperDisabled(true);
  }

  function unpauseGame() {
    setTyperDisabled(false);
  }

  function finalizeGame() {
    setTyperDisabled(true);
    endGame();
  }

  return (
    <Container
      sx={{
        marginTop: "15vh",
      }}
    >
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={9}>
          <Typer
            generatedPhrase={phrase}
            disabled={typerDisabled}
            status={typerStatus}
            typedPhrase={typedPhrase}
            setTypedPhrase={setTypedPhrase}
            endGame={endGame}
          />
        </Grid>
        <Grid xs={3}>
          <Countdown
            countdownStarted={startGame}
            countdownPaused={pauseGame}
            countdownUnpaused={unpauseGame}
            countdownFinalized={finalizeGame}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
