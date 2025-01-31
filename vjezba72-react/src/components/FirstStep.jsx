import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

const steps = ["Prvi korak", "Drugi korak", "Treći korak"];

const FirstStep = ({ page, setPage, data, setData }) => {
  const handleNext = () => {
    setPage(() => page + 1);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <div>
        <TextField
          id="standard-basic"
          label="Ime"
          variant="standard"
          value={data.ime}
          onChange={(event) => setData({ ...data, ime: event.target.value })}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Prezime"
          variant="standard"
          value={data.prezime}
          onChange={(event) => setData({ ...data, prezime: event.target.value })}
        />
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="E-mail"
          variant="standard"
          value={data.email}
          onChange={(event) => setData({ ...data, email: event.target.value })}
        />
      </div>
      <Button variant="contained" onClick={handleNext}>
        Dalje
      </Button>
    </>
  );
};

export default FirstStep;
