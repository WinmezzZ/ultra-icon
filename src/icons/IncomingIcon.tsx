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
const IncomingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M18 13a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm19 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M4 13h6m8 0h11m8 0h7" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m10 29-6 6 6 6m-6-6h40" />
    </svg>
  );
};

IncomingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const IncomingIcon = withWrapper(IncomingIconComponent);
export default IncomingIcon;
