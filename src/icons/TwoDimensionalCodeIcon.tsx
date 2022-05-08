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
const TwoDimensionalCodeIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M20 6H6v14h14V6Zm0 22H6v14h14V28ZM42 6H28v14h14V6Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M29 28v14m12-14v14" />
    </svg>
  );
};

TwoDimensionalCodeIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TwoDimensionalCodeIcon = withWrapper(TwoDimensionalCodeIconComponent);
export default TwoDimensionalCodeIcon;
