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

const GhostIcon = (p: SVGComponentProps) => {
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
          <path
            fill="#2F88FF"
            fillRule="nonzero"
            stroke="#000"
            strokeWidth={4}
            d="m8 44 4-4 4 4 4-6 4 6 4-6 4 6 4-4 4 4V20c0-8.837-7.163-16-16-16S8 11.163 8 20v24Z"
          />
          <path stroke="#FFF" strokeLinecap="round" strokeWidth={4} d="M19 20h2m10 0h2" />
        </g>
      </svg>
    </span>
  );
};

GhostIcon.propTypes = {
  size: PropTypes.number,
};
export default GhostIcon;