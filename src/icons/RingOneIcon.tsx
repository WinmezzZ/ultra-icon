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
const RingOneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 11.273A3.636 3.636 0 1 0 24 4a3.636 3.636 0 0 0 0 7.273ZM24 44a3.636 3.636 0 1 0 0-7.273A3.636 3.636 0 0 0 24 44ZM7.636 27.636a3.636 3.636 0 1 0 0-7.272 3.636 3.636 0 0 0 0 7.272Zm32.728 0a3.636 3.636 0 1 0 0-7.272 3.636 3.636 0 0 0 0 7.272Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M32.734 10.16a16.45 16.45 0 0 1 5.106 5.106m0 17.468a16.451 16.451 0 0 1-5.106 5.106m-17.468 0a16.45 16.45 0 0 1-5.106-5.106m0-17.468a16.45 16.45 0 0 1 5.106-5.106"
      />
    </svg>
  );
};

RingOneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RingOneIcon = withWrapper(RingOneIconComponent);
export default RingOneIcon;
