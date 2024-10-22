import Menu from "@mui/icons-material/Menu";
import { createViewState } from "@jbrowse/react-linear-genome-view";

import assembly from "./assembly";
import tracks from "./tracks";
import defaultSession from "./defaultSession";

function View() {
  // unused, but produces issues
  const viewState = createViewState({
    assembly,
    tracks,
    defaultSession,
  });

  return <Menu />;
}

export default View;
