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
const PhoneOffIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M19.444 21.5c-.427-1.067-.57-1.8-.57-1.8l2.358-4.713a2 2 0 0 0-.04-1.865l-2.447-4.407a2 2 0 0 0-1.749-1.03h-5.072c-2.584 0-4.45 2.403-3.623 4.851 1.211 3.59 3.204 8.595 6.046 12.964m12.33 3.412c1.227.521 2.097.688 2.097.688l4.713-2.356a2 2 0 0 1 1.866.04l4.42 2.458A2 2 0 0 1 40.8 31.49v5.073c0 2.584-2.404 4.449-4.852 3.623-3.747-1.265-9.035-3.381-13.533-6.424M40 8 8 40"
      />
    </svg>
  );
};

PhoneOffIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PhoneOffIcon = withWrapper(PhoneOffIconComponent);
export default PhoneOffIcon;
