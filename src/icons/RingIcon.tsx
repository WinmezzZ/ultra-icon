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
const RingIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 11.619c2.093 0 3.79-1.706 3.79-3.81C27.79 5.707 26.092 4 24 4s-3.79 1.706-3.79 3.81c0 2.103 1.697 3.809 3.79 3.809ZM9.79 40.19c2.092 0 3.789-1.705 3.789-3.809s-1.697-3.81-3.79-3.81C7.697 32.572 6 34.278 6 36.382s1.697 3.81 3.79 3.81Zm28.42 0c2.093 0 3.79-1.705 3.79-3.809s-1.697-3.81-3.79-3.81c-2.092 0-3.789 1.706-3.789 3.81s1.697 3.81 3.79 3.81Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M33.143 10.314A18.105 18.105 0 0 1 42 25.904c0 .578-.027 1.148-.08 1.711v0m-10.906 14.96A17.863 17.863 0 0 1 24 44c-2.488 0-4.858-.507-7.014-1.425M6.08 27.615a18.416 18.416 0 0 1-.08-1.71 18.105 18.105 0 0 1 8.857-15.59"
      />
    </svg>
  );
};

RingIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RingIcon = withWrapper(RingIconComponent);
export default RingIcon;
