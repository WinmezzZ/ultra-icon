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
const WindmillTwoIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 24c5.523 0 10-4.477 10-10S29.523 4 24 4v20Zm0 0c0 5.523 4.477 10 10 10s10-4.477 10-10H24Zm0 0c0-5.523-4.477-10-10-10S4 18.477 4 24h20Zm0 0c-5.523 0-10 4.477-10 10s4.477 10 10 10V24Z"
      />
    </svg>
  );
};

WindmillTwoIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WindmillTwoIcon = withWrapper(WindmillTwoIconComponent);
export default WindmillTwoIcon;
