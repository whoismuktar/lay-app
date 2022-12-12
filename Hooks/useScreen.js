import { useEffect, useState } from "react";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

export const useScreen = () => {
  const allScreens = useBreakpoint();
  const [screen, setScreen] = useState({
    xsOnly: false,
    smOnly: false,
    smAndAbove: false,
    mdAndAbove: false,
  });

  useEffect(() => {
    // console.log(allScreens);

    if (allScreens.md && !allScreens.sm && allScreens.lg && allScreens.xl) {
      return setScreen({...screen, ...{mdAndAbove: true}});
    } else if (allScreens.sm && !allScreens.xs && !allScreens.md && !allScreens.lg && !allScreens.xl) {
      return setScreen({...screen, ...{smOnly: true}});
    }

    // console.log("------");
  }, [allScreens]);

  return screen
};

export default useScreen;
