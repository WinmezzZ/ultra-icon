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
const DatabaseNetworkIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M44 31c0 5.523-4.477 10-10 10-1.79 0-3.472-.47-4.926-1.295A10.01 10.01 0 0 1 24 31c0-2.568.968-4.91 2.558-6.68A9.975 9.975 0 0 1 34 21c5.523 0 10 4.477 10 10Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 12v9a9.975 9.975 0 0 0-7.442 3.32A9.963 9.963 0 0 0 24 31a10.01 10.01 0 0 0 5.074 8.705C26.412 40.51 22.878 41 19 41c-8.284 0-15-2.239-15-5V12"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M34 12c0 2.761-6.716 5-15 5-8.284 0-15-2.239-15-5s6.716-5 15-5c8.284 0 15 2.239 15 5Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 28c0 2.761 6.716 5 15 5 1.807 0 3.54-.106 5.144-.302M4 20c0 2.761 6.716 5 15 5 2.756 0 5.339-.248 7.558-.68M34 41s-3.5-5.862-3.5-10c0-4.137 3.5-10 3.5-10m0 20s3.5-5.862 3.5-10c0-4.137-3.5-10-3.5-10m10 10H24"
      />
    </svg>
  );
};

DatabaseNetworkIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DatabaseNetworkIcon = withWrapper(DatabaseNetworkIconComponent);
export default DatabaseNetworkIcon;
