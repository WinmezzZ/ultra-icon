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
const HighHeeledShoesIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M29.183 20C31.264 15.054 36.35 10.667 39 8c1.104.667 5 2.604 5 7 0 4-1.455 7.111-3 8l-5.987 4.191a23 23 0 0 0-6.533 7.01L25 40H4v-4c2.429-1.333 9.82-5.867 13-8 7 4 10.5-4 12.183-8Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M43 21v19" />
    </svg>
  );
};

HighHeeledShoesIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const HighHeeledShoesIcon = withWrapper(HighHeeledShoesIconComponent);
export default HighHeeledShoesIcon;
