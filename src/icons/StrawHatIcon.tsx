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
const StrawHatIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeWidth={4}
        d="M34 22c0-5.523-4.477-10-10-10s-10 4.477-10 10m0 1c-5.978 1.204-10 3.456-10 6.034C4 32.881 12.954 36 24 36s20-3.119 20-6.966c0-2.578-4.022-4.83-10-6.034"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14 22c1 .833 4 4 10 4s9-3 10-4m-15 3 2-5"
      />
    </svg>
  );
};

StrawHatIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const StrawHatIcon = withWrapper(StrawHatIconComponent);
export default StrawHatIcon;
