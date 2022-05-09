/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const WindowsLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M21 2.5v19l-18-2v-15l18-2zm-2 10.499L12 13v5.487l7 .778V13zm-14 4.71 5 .556V13l-5-.001v4.71zM19 11V4.735l-7 .777V11l7-.001zm-9-5.265L5 6.29V11h5V5.734z" />
    </svg>
  );
};

WindowsLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WindowsLineIcon = withWrapper(WindowsLineIconComponent);
export default WindowsLineIcon;
