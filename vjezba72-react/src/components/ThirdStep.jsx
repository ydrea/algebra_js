import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const steps = ["Prvi korak", "Drugi korak", "Treći korak"];

const ThirdStep = ({ page, setPage, data }) => {
  const handleBack = () => {
    setPage(() => page - 1);
  };

  const handleNext = () => {
    setPage(() => page + 1);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <List>
        <ListItem>
          <ListItemText primary="Ime" secondary={data.ime} />
        </ListItem>

        <ListItem>
          <ListItemText primary="Prezime" secondary={data.prezime} />
        </ListItem>

        <ListItem>
          <ListItemText primary="E-mail" secondary={data.email} />
        </ListItem>

        <ListItem>
          <ListItemText primary="Zanimanje" secondary={data.zanimanje} />
        </ListItem>

        <ListItem>
          <ListItemText primary="Grad" secondary={data.grad} />
        </ListItem>

        <ListItem>
          <ListItemText primary="Godine" secondary={data.godine} />
        </ListItem>
      </List>

      <Button variant="contained" onClick={handleBack}>
        Nazad
      </Button>
      <Button variant="contained" onClick={handleNext}>
        Dalje
      </Button>
    </>
  );
};

export default ThirdStep;
