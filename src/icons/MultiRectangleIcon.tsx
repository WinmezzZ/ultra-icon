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
const MultiRectangleIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M12 39h32V7H12v8" />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M8 39h24V15H8v8" />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M4 23h16v16H4z" />
    </svg>
  );
};

MultiRectangleIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MultiRectangleIcon = withWrapper(MultiRectangleIconComponent);
export default MultiRectangleIcon;
