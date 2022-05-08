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
const TwoDimensionalCodeOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M18 6H6v12h12V6Zm0 24H6v12h12V30Zm24 0H30v12h12V30Zm0-24H30v12h12V6Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M24 6v18m0 6v12m0-18H6m36 0H30" />
    </svg>
  );
};

TwoDimensionalCodeOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TwoDimensionalCodeOneIcon = withWrapper(TwoDimensionalCodeOneIconComponent);
export default TwoDimensionalCodeOneIcon;
