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
const WebcamIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M7.825 29.765C11.462 34.757 17.352 38 24 38c6.648 0 12.538-3.244 16.175-8.235C43.79 33.508 46 38.508 46 44H2c0-5.492 2.209-10.492 5.825-14.235Z"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 30c7.18 0 13-5.82 13-13S31.18 4 24 4 11 9.82 11 17s5.82 13 13 13Z"
      />
      <path
        fill="null"
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      />
    </svg>
  );
};

WebcamIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const WebcamIcon = withWrapper(WebcamIconComponent);
export default WebcamIcon;
