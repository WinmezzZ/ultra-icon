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
const SaveIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M6 9a3 3 0 0 1 3-3h25.281L42 13.207V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9Z"
      />
      <path
        fill="null"
        fillRule="evenodd"
        d="M24.008 6 24 13.385c0 .34-.448.615-1 .615h-8c-.552 0-1-.275-1-.615V6"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24.008 6 24 13.385c0 .34-.448.615-1 .615h-8c-.552 0-1-.275-1-.615V6h10.008Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M9 6h25.281" />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M14 26h20m-20 8h10.008" />
    </svg>
  );
};

SaveIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SaveIcon = withWrapper(SaveIconComponent);
export default SaveIcon;
