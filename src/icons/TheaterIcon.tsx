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
const TheaterIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M8 6h32a2 2 0 0 1 2 2v28L32 22.005c-2.667 1.585-5.333 2.378-8 2.378s-5.333-.793-8-2.378L6 36V8a2 2 0 0 1 2-2Z"
        clipRule="evenodd"
      />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M6 42h36" />
    </svg>
  );
};

TheaterIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TheaterIcon = withWrapper(TheaterIconComponent);
export default TheaterIcon;
