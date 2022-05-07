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

const OkayIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M15.114 24.947c-2.403 2.745-2.827 6.086-2.65 8.41.085 1.104 1.205 1.713 2.234 1.302.744-.297 1.56-.668 2.146-1.06 1.731-1.153 1.154-2.307 1.731-4.037C19.152 27.83 21.692 26.423 24 27s3.229 2.562 3.229 4.292c0 1.731-.729 3.708-2.885 4.615-2.378 1.002-3.461 0-6.346-.576-1.503-.301-3.006 1.014-3.871 1.967a1.514 1.514 0 0 0-.118 1.918c.289.402.661.863 1.105 1.307 1.154 1.153 5.769 4.615 10.384 4.038s8.653-4.038 10.384-8.077c1.73-4.038.577-8.653-2.307-12.114-2.885-3.462-8.077-4.039-9.23-4.039-1.155 0-5.193 0-9.231 4.616Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M31.562 22.639 12.643 8.17c-.398-.304-.967-.27-1.264.133-.713.97-1.386 2.507-.303 3.95 1.384 1.847 6.73 6.539 9.23 8.654"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M35 26 23.14 4.198c-.239-.44-.771-.641-1.207-.394-1.047.594-2.29 1.723-1.89 3.483.51 2.25 2.538 6.262 3.957 9.213"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m36 28-.95-20.308c-.023-.5-.414-.913-.914-.882-1.201.077-2.813.55-3.223 2.307-.524 2.247-.9 5.608-.913 8.883"
        />
      </svg>
    </span>
  );
};

OkayIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default OkayIcon;
