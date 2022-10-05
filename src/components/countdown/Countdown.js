import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import StopCircleIcon from "@mui/icons-material/StopCircle";

const centralizeCardContent = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pl: 1,
  pb: 1,
  width: "100%",
};

function Countdown({ defaultTime = 15 }) {
  const [showStart, setShowStart] = React.useState(true);
  const [timerPaused, setTimerPaused] = React.useState(false);
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!timerPaused) setTimer((timer) => timer - 1);
    }, 1000);
    timer === 0 && finalizeTimer(interval);

    return () => clearInterval(interval);
  }, [timer, timerPaused]);

  function startTimer() {
    setShowStart(false);
    setTimerPaused(false);
    setTimer(timer === 0 ? defaultTime : timer);
  }

  function pauseTimer() {
    setTimerPaused(true);
    setTimer(timer);
  }

  function finalizeTimer(interval) {
    clearInterval(interval);
    setShowStart(true);
    setTimerPaused(false);
  }

  function stopTimer() {
    setTimer(0);
  }

  return (
    <React.Fragment>
      <Card variant="elevation" elevation={6}>
        <CardContent sx={centralizeCardContent}>
          <Typography variant="h1" component="h2">
            {timer}
          </Typography>
        </CardContent>
        <CardActions sx={centralizeCardContent}>
          <Box>
            {timerPaused ? (
              <IconButton aria-label="stop">
                <StopCircleIcon
                  sx={{ height: 38, width: 38 }}
                  onClick={stopTimer}
                />
              </IconButton>
            ) : null}
            {!showStart && !timerPaused ? (
              <IconButton aria-label="pause">
                <PauseCircleOutlineIcon
                  sx={{ height: 38, width: 38 }}
                  onClick={pauseTimer}
                />
              </IconButton>
            ) : (
              <IconButton aria-label="play">
                <PlayCircleOutlineIcon
                  sx={{ height: 38, width: 38 }}
                  onClick={startTimer}
                />
              </IconButton>
            )}
          </Box>
        </CardActions>
      </Card>
    </React.Fragment>
  );
}

export default Countdown;
