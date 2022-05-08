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
const EyesIconComponent = (p: SVGComponentProps) => {
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
        d="M24 41c9.941 0 18-8.322 18-14 0-5.678-8.059-14-18-14S6 21.328 6 27c0 5.672 8.059 14 18 14Z"
        clipRule="evenodd"
      />
      <path
        fill="null"
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M24 33a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeWidth={4}
        d="m13.264 11.266 2.594 3.62m19.767-3.176-2.595 3.62M24.009 7v6"
      />
    </svg>
  );
};

EyesIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const EyesIcon = withWrapper(EyesIconComponent);
export default EyesIcon;
