/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const defaultProps = {
  size: 24,
};

const PhoneIncomingIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 51 51" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M2 0h48v48H2z" />
        <path fill="#fff" fillOpacity={0.01} d="M3 0h48v48H3z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M17.376 9.794a2 2 0 0 1 1.748 1.03l2.447 4.406a2 2 0 0 1 .04 1.866l-2.357 4.713s.683 3.512 3.541 6.37c2.859 2.858 6.359 3.53 6.359 3.53l4.713-2.357a2 2 0 0 1 1.866.041l4.42 2.457a2 2 0 0 1 1.027 1.748v5.074c0 2.583-2.4 4.45-4.848 3.623-5.028-1.696-12.832-4.927-17.78-9.873-4.946-4.947-8.176-12.752-9.873-17.78-.826-2.448 1.04-4.848 3.624-4.848h5.073Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M31 20 44 7.5M44 20H31V7" />
      </svg>
    </span>
  );
};

PhoneIncomingIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PhoneIncomingIcon;
