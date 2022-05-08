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
const ChartRingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20.976 4.227C11.366 5.685 4 13.982 4 24c0 10.021 7.37 18.321 16.986 19.774a20.151 20.151 0 0 0 6.018.002C35.646 42.474 42.476 35.643 43.776 27m-.001-6.006c-1.302-8.638-8.13-15.466-16.767-16.77"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 16a8 8 0 1 0 0 16 8 8 0 0 0 0-16Z"
      />
    </svg>
  );
};

ChartRingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ChartRingIcon = withWrapper(ChartRingIconComponent);
export default ChartRingIcon;
