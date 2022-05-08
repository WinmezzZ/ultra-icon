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
const LocalIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9.858 32.757C6.238 33.843 4 35.343 4 37c0 3.314 8.954 6 20 6v0c11.046 0 20-2.686 20-6 0-1.657-2.239-3.157-5.858-4.243"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 35s13-8.496 13-18.318C37 9.678 31.18 4 24 4S11 9.678 11 16.682C11 26.504 24 35 24 35Z"
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

LocalIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const LocalIcon = withWrapper(LocalIconComponent);
export default LocalIcon;
