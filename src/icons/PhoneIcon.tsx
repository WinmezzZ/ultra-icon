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
const PhoneIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M8 30h32v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V30Z"
      />
      <path stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M40 30V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v24" />
      <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M22 37h4" />
    </svg>
  );
};

PhoneIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PhoneIcon = withWrapper(PhoneIconComponent);
export default PhoneIcon;
