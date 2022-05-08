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
const PhoneVideoCallIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 51 51" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M3 0h48v48H3z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M17.376 9.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.865l-2.357 4.714s.683 3.511 3.541 6.37c2.859 2.858 6.358 3.53 6.358 3.53l4.714-2.357a2 2 0 0 1 1.866.04l4.42 2.458a2 2 0 0 1 1.027 1.748v5.073c0 2.584-2.4 4.45-4.848 3.624-5.028-1.696-12.832-4.927-17.78-9.873-4.946-4.947-8.176-12.752-9.873-17.78-.826-2.448 1.04-4.848 3.624-4.848h5.073Z"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M42 15H30V5h12v3l5-2v8l-5-2v3Z"
      />
    </svg>
  );
};

PhoneVideoCallIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PhoneVideoCallIcon = withWrapper(PhoneVideoCallIconComponent);
export default PhoneVideoCallIcon;
