import { useMemo } from 'react';
import './ResponsiveGrid.css';
import getContrastingColors from './utils/getContrastingColors';
import useBackgroundColor from './hooks/useBackgroundColor';
import useVisibleButtons from './hooks/useVisibleButtons';
import useButtonActions from './hooks/useButtonActions';
import GradientTitle from './components/GradientTitle';
import ButtonGrid from './components/ButtonGrid';
import ActionNotification from './components/ActionNotification';

export default function ResponsiveGrid() {
  const { backgroundColor, changeBackgroundColor } = useBackgroundColor();
  const { visibleButtons, hideRandomButton } = useVisibleButtons(9);
  const { buttonActions, snackbarOpen, handleCloseSnackbar } = useButtonActions(
    changeBackgroundColor,
    hideRandomButton
  );

  const [gradientColor1, gradientColor2] = useMemo(() => 
    getContrastingColors(backgroundColor), 
    [backgroundColor]
  );

  return (
    <>
      <ActionNotification 
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message="Actions reshuffled!"
      />
      <GradientTitle 
        text="Pointless Clicks"
        gradientColor1={gradientColor1}
        gradientColor2={gradientColor2}
      />
      <ButtonGrid 
        visibleButtons={visibleButtons}
        buttonActions={buttonActions}
      />
    </>
  );
}
