import { Button, ButtonGroup, Stack, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

export const UsingButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="success">
          Contained
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" href="#contained-buttons">
          Link
        </Button>
      </Stack>
      <Stack direction="row">
        <ButtonGroup>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color="primary"
          disableFocusRipple
          startIcon={<SendIcon />}
          onClick={() => {
            alert("SEND");
          }}
        >
          Send
        </Button>
        <Button
          variant="contained"
          color="error"
          endIcon={<DeleteIcon />}
          onClick={() => {
            alert("DELETED");
          }}
        >
          Delete
        </Button>
      </Stack>
      <Stack direction="row">
        <Button variant="contained" component="label" disableElevation>
          Upload
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <PhotoCameraIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};
