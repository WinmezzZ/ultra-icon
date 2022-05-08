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
const NmrIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeWidth={4}
        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="M32.485 15.515A11.962 11.962 0 0 0 24 12a11.962 11.962 0 0 0-8.485 3.515"
      />
      <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M34 24H14v8h20v-8Z" />
      <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M17.045 32 17 42.715M31.046 32 31 42.715" />
    </svg>
  );
};

NmrIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const NmrIcon = withWrapper(NmrIconComponent);
export default NmrIcon;
