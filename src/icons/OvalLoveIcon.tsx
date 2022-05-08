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
const OvalLoveIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M29.516 17.5c5.523 9.566 4.96 20.23-1.258 23.82S12.523 40.067 7 30.5 2.04 10.27 8.258 6.68 23.994 7.934 29.516 17.5Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M18.258 17.5c-5.523 9.566-4.96 20.23 1.258 23.82s15.736-1.254 21.259-10.82 4.96-20.23-1.259-23.82C33.3 3.09 23.781 7.934 18.258 17.5Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M23.753 10.344c2.145 1.908 4.129 4.325 5.763 7.156 5.523 9.566 4.96 20.23-1.258 23.82-1.298.75-2.74 1.132-4.26 1.18"
      />
    </svg>
  );
};

OvalLoveIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OvalLoveIcon = withWrapper(OvalLoveIconComponent);
export default OvalLoveIcon;
