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
const DomeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 43h40" />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M5 24s9-1 19-1 19 1 19 1M6 18s9.053-4 18-4 18 4 18 4M5 30s9 2 19 2 19-2 19-2"
      />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M24 6C12.954 6 4 14.954 4 26c0 7.809 3.475 13.706 10 17h20c6.525-3.294 10-9.191 10-17 0-11.046-8.954-20-20-20Z"
      />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M24 6c-3.866 0-7 8.954-7 20 0 7.177 1.012 13.472 3 17h8c1.988-3.528 3-9.823 3-17 0-11.046-3.134-20-7-20Z"
      />
    </svg>
  );
};

DomeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DomeIcon = withWrapper(DomeIconComponent);
export default DomeIcon;
