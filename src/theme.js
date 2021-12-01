import { createTheme } from "@mui/material";
import { indigo } from '@mui/material/colors'

const theme = createTheme({
    palette: {
      primary: {
        main: indigo[500],
      },
      secondary: {
        main: indigo[100],
      },
      contrastThreshold: 3,
      background: {
        default: '#1a237e'
      }
    },
    typography: {
      allVariants: {
        color: 'secondary'
      }
    }
  })

export default theme