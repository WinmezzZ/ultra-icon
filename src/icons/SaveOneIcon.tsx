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
const SaveOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M39.3 6H8.7A2.7 2.7 0 0 0 6 8.7v30.6A2.7 2.7 0 0 0 8.7 42h30.6a2.7 2.7 0 0 0 2.7-2.7V8.7A2.7 2.7 0 0 0 39.3 6Z"
      />
      <path fill="null" stroke="#333" strokeLinejoin="round" strokeWidth={4} d="M32 6v18H15V6h17Z" />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M26 13v4" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M10.997 6h25.002" />
    </svg>
  );
};

SaveOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SaveOneIcon = withWrapper(SaveOneIconComponent);
export default SaveOneIcon;
