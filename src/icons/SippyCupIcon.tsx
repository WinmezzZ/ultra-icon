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
const SippyCupIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m34 44 3-28H11l3.5 28H34ZM24 10l-2-6M6 16h36m-5.005 9s5.47 0 4.973 4.404C41.471 33.81 36 32.928 36 32.928M11.005 25s-5.47 0-4.973 4.404C6.529 33.81 12 32.928 12 32.928"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M37 10H11v6h26v-6Z"
      />
    </svg>
  );
};

SippyCupIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SippyCupIcon = withWrapper(SippyCupIconComponent);
export default SippyCupIcon;
