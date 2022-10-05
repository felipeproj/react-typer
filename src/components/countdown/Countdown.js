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

function Countdown({
  defaultTime = 15,
  countdownStarted,
  countdownPaused,
  countdownUnpaused,
  countdownFinalized,
}) {
  const [showStart, setShowStart] = React.useState(true);
  const [timerPaused, setTimerPaused] = React.useState(false);
  const [timer, setTimer] = React.useState(0);
  const [formattedTimer, setFormattedTimer] = React.useState(formatTime(timer));

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!timerPaused) setTimer((timer) => timer - 1);
    }, 1000);
    timer === 0 && finalizeTimer(interval);
    setFormattedTimer(formatTime(timer));

    return () => clearInterval(interval);
  }, [timer, timerPaused]);

  function formatTime(seconds) {
    const time = new Date(0);
    time.setSeconds(seconds);
    return time.toISOString().substring(14, 19);
  }

  function startTimer() {
    setShowStart(false);
    setTimerPaused(false);
    if (timer === 0) {
      if (countdownStarted) countdownStarted();
      setTimer(defaultTime);
    } else {
      if (countdownUnpaused) countdownUnpaused();
      setTimer(timer);
    }
  }

  function pauseTimer() {
    if (countdownPaused) countdownPaused();
    setTimerPaused(true);
    setTimer(timer);
  }

  function finalizeTimer(interval) {
    clearInterval(interval);
    setShowStart(true);
    setTimerPaused(false);
    if (countdownFinalized) countdownFinalized();
  }

  function stopTimer() {
    setTimer(0);
  }

  return (
    <React.Fragment>
      <Card variant="elevation" elevation={6}>
        <CardContent sx={centralizeCardContent}>
          <Typography variant="h1" component="h2">
            {formattedTimer}
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
