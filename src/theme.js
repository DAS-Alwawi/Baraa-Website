import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#dedfe2",
          200: "#bdbec5",
          300: "#9c9ea8",
          400: "#7b7d8b",
          500: "#5a5d6e",
          600: "#484a58",
          700: "#363842",
          800: "#24252c",
          900: "#121316",
        },
        primary: {
          100: "#d2d2d3",
          200: "#a4a5a7",
          300: "#77777a",
          400: "#494a4e",
          500: "#1c1d22",
          600: "#16171b",
          700: "#111114",
          800: "#0b0c0e",
          900: "#060607",
        },
        greenAccent: {
          100: "#edf1d3",
          200: "#dbe4a7",
          300: "#cad67a",
          400: "#b8c94e",
          500: "#a6bb22",
          600: "#85961b",
          700: "#647014",
          800: "#424b0e",
          900: "#212507",
        },
        redAccent: {
          100: "#f1dada",
          200: "#e3b5b5",
          300: "#d59090",
          400: "#c76b6b",
          500: "#b94646",
          600: "#943838",
          700: "#6f2a2a",
          800: "#4a1c1c",
          900: "#250e0e",
        },
        blueAccent: {
          100: "#d6e3f2",
          200: "#adc7e4",
          300: "#84abd7",
          400: "#5b8fc9",
          500: "#3273bc",
          600: "#285c96",
          700: "#1e4571",
          800: "#142e4b",
          900: "#0a1726",
        },
        money: {
          positive: "#38D86B",
          negative: "#D83A38",
          neutral: "#D3D3D3",
        },
        colorPool: {
          0: "#00A5E3", //blue
          1: "#8DD7BF", //green
          2: "#FF96C5", //pink
          3: "#FF5768", //red
          4: "#FFA23A", //orange
          5: "#FFD872", //yellow
          6: "#CFF800", //lime
          7: "#E7C582", //brown
          8: "#5a5d6e", //gray
        },
      }
    : {
        grey: {
          100: "#121316",
          200: "#24252c",
          300: "#363842",
          400: "#484a58",
          500: "#5a5d6e",
          600: "#7b7d8b",
          700: "#9c9ea8",
          800: "#bdbec5",
          900: "#dedfe2",
        },
        primary: {
          100: "#060607",
          200: "#0b0c0e",
          300: "#111114",
          400: "#f2f0f0",
          500: "#ebebeb",
          600: "#494a4e",
          700: "#77777a",
          800: "#a4a5a7",
          900: "#d2d2d3",
        },
        greenAccent: {
          100: "#212507",
          200: "#424b0e",
          300: "#647014",
          400: "#85961b",
          500: "#a6bb22",
          600: "#b8c94e",
          700: "#cad67a",
          800: "#dbe4a7",
          900: "#edf1d3",
        },
        redAccent: {
          100: "#250e0e",
          200: "#4a1c1c",
          300: "#6f2a2a",
          400: "#943838",
          500: "#b94646",
          600: "#c76b6b",
          700: "#d59090",
          800: "#e3b5b5",
          900: "#f1dada",
        },
        blueAccent: {
          100: "#0a1726",
          200: "#142e4b",
          300: "#1e4571",
          400: "#285c96",
          500: "#3273bc",
          600: "#5b8fc9",
          700: "#84abd7",
          800: "#adc7e4",
          900: "#d6e3f2",
        },
        money: {
          positive: "#38D86B",
          negative: "#D83A38",
          neutral: "#D3D3D3",
        },
        colorPool: {
          0: "#00A5E3", //blue
          1: "#8DD7BF", //green
          2: "#FF96C5", //pink
          3: "#FF5768", //red
          4: "#FFA23A", //orange
          5: "#FFD872", //yellow
          6: "#CFF800", //lime
          7: "#E7C582", //brown
          8: "#5a5d6e", //gray
        },
      }),
});

//mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& label.Mui-focused": {
              color: colors.primary[200],
            },
            "& input::-webkit-inner-spin-button": {
              appearance: "none",
              margin: "0",
            },
            "& p.Mui-error": {
              height: "0",
              margin: "0",
            },
            "& fieldset": {
              borderWidth: "1px",
              borderColor: colors.primary[400],
              borderRadius: "10px",
            },
            "& .Mui-focused>fieldset": {
              borderWidth: "1px!important",
              borderColor: colors.primary[300] + "!important",
              borderRadius: "10px",
            },
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          root: {
            "& .MuiDialog-paper": {
              backgroundImage: "unset!important",
              overflow: "auto",
              borderRadius: "15px",
              maxWidth: "95%",
              minWidth: "400px",
              maxHeight: "90vh",
              padding: "16px",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "10px",
          },
        },
      },
      MuiStepper: {
        styleOverrides: {
          root: {
            "& .Mui-active": {
              "&.MuiSvgIcon-root": {
                color: colors.blueAccent[500],
              },
              "& .MuiStepConnector-line": {
                borderColor: colors.blueAccent[500],
              },
            },
            "& .Mui-completed": {
              "&.MuiSvgIcon-root": {
                color: colors.blueAccent[500],
              },
              "&.MuiStepLabel-label": {
                color: colors.grey[400] + "!Important",
              },
              "& .MuiStepConnector-line": {
                borderColor: colors.grey[400],
              },
            },
          },
        },
      },
    },
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[100],
              light: colors.greenAccent[400],
              dark: colors.greenAccent[600],
              contrastText: colors.primary[500],
            },
            secondary: {
              main: colors.blueAccent[500],
              light: colors.blueAccent[300],
              dark: colors.blueAccent[700],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              paper: colors.primary[500],
              default: colors.primary[600],
            },
            table: {
              default: "#202538",
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      button: {
        textTransform: "none",
        fontFamily: "AbrilFatface-Regular",
        fontSize: 20,
      },
      fontFamily: "Montserrat",
      fontSize: 12,
      h1: {
        fontFamily: "Montserrat",
        fontSize: 40,
      },
      h2: {
        fontFamily: "Montserrat",
        fontSize: 32,
      },
      h3: {
        fontFamily: "Montserrat",
        fontSize: 24,
      },
      h4: {
        fontFamily: "Montserrat",
        fontSize: 20,
      },
      h5: {
        fontFamily: "Montserrat",
        fontSize: 16,
      },
      h6: {
        fontFamily: "Montserrat",
        fontSize: 14,
      },
    },
  };
};

//context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

export const chart = (mode) => {
  const colors = tokens(mode);

  return {
    background: colors.primary[500],
    textColor: colors.grey[100],
    fontSize: 12,
    axis: {
      domain: {
        line: {
          stroke: colors.grey[300],
          strokeWidth: 2,
        },
      },
      legend: {
        text: {
          fontSize: 12,
          fill: colors.grey[100],
        },
      },
      ticks: {
        line: {
          stroke: colors.grey[300],
          strokeWidth: 1,
        },
        text: {
          fontSize: 11,
          fill: colors.grey[300],
        },
      },
    },
    grid: {
      line: {
        stroke: colors.grey[700],
        strokeWidth: 1,
      },
    },
    legends: {
      title: {
        text: {
          fontSize: 11,
          fill: colors.grey[100],
        },
      },
      text: {
        fontSize: 11,
        fill: colors.grey[100],
      },
      ticks: {
        line: {},
        text: {
          fontSize: 10,
          fill: colors.grey[100],
        },
      },
    },
    annotations: {
      text: {
        fontSize: 13,
        fill: "#333333",
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      link: {
        stroke: "#000000",
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      outline: {
        stroke: "#000000",
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      symbol: {
        fill: "#000000",
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
    },
    tooltip: {
      container: {
        background: colors.primary[400],
        color: colors.grey[100],
        fontSize: 12,
      },
      basic: {},
      chip: {},
      table: {},
      tableCell: {},
      tableCellValue: {},
    },
  };
};
