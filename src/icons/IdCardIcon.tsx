/**
 * These code auto generated by UltraIcon
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const defaultProps = {
  size: 24,
};

const IdCardIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        {...props}
      >
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g strokeWidth={4} transform="translate(4 8)">
            <rect width={40} height={32} fill="#2F88FF" fillRule="nonzero" stroke="#000" rx={2} />
            <path fill="#43CCF8" fillRule="nonzero" stroke="#FFF" d="M24 8h8v8h-8z" />
            <path stroke="#FFF" strokeLinecap="round" d="M8 24h24M8 8h6m-6 8h6" />
          </g>
        </g>
      </svg>
    </span>
  );
};

IdCardIcon.propTypes = {
  size: PropTypes.number,
};
export default IdCardIcon;
