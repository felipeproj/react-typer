import * as React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typer from "../../components/typer/Typer";
import { AlertConfigurationEnum } from "../../components/typer/AlertConfiguration";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  const [typerDisabled, setTyperDisabled] = React.useState(false);
  const [typerStatus, setTyperStatus] = React.useState(
    AlertConfigurationEnum.default
  );
  const phrase = "teste externo";
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
          <Item>xs=6</Item>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
