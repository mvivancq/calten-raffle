import { Stack } from "@mui/material"
import caltenGrey from "../assets/images/logo/calten-grey.png";

const CaltenNavigation = () => {
  return (
    <Stack direction="row" justifyContent="flex-start" alignItems="center">
      <img src={caltenGrey} style={{ height: 'auto', width: '100px'}}/>
    </Stack>
  )
}

export default CaltenNavigation;
