import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { AlertConfiguration } from "./AlertConfiguration";

function Typer({
  generatedPhrase = "",
  endGame,
  disabled = false,
  status = "default",
}) {
  const [typedPhrase, setTypedPhrase] = React.useState("");
  const [inputColor, setInputColor] = React.useState("primary");
  const [alertAttributes, setAlertAttributes] = React.useState(
    AlertConfiguration[status]
  );

  React.useEffect(() => {
    setAlertAttributes(AlertConfiguration[status]);
  }, [status]);

  const handleChange = (event) => {
    setTypedPhrase(event.target.value);
    validateTypedPhrase(event.target.value);
    if (generatedPhrase === event.target.value) {
      endGame(generatedPhrase, event.target.value);
    }
  };

  function validateTypedPhrase(typedPhrase) {
    const typedLength = typedPhrase.length;
    //   Verify if typed prhase is empty. if its true, set the color field to default 'primary'
    if (typedLength === 0) {
      setInputColor("primary");
    } else {
      // Verify if typed prhase is similar to generated phrase.
      if (generatedPhrase.substr(0, typedLength) === typedPhrase) {
        // If its true, set the color to 'success'.
        setInputColor("success");
      } else {
        // If its false, set the color to 'error'
        setInputColor("error");
      }
    }
  }

  return (
    <React.Fragment>
      <Card variant="elevation" elevation={6}>
        <CardContent>
          <Collapse in={alertAttributes.open}>
            <Alert severity={alertAttributes.severity} sx={{ mb: 4, mt: 2 }}>
              <AlertTitle>{alertAttributes.title}</AlertTitle>
              {alertAttributes.text}
            </Alert>
          </Collapse>
          <TextField
            id="standard-multiline-flexible"
            label="Digite a frase aleatória:"
            multiline
            rows={4}
            fullWidth
            value={typedPhrase}
            onChange={handleChange}
            color={inputColor}
            disabled={disabled}
          />

          <Divider sx={{ mt: 6, mb: 4 }}>Frase aleatória</Divider>

          <TextField
            id="filled-multiline-static"
            hiddenLabel
            multiline
            fullWidth
            value={generatedPhrase}
            disabled={true}
            variant="filled"
            size="small"
          />
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </React.Fragment>
  );
}

export default Typer;
