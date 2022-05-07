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

const SpeakerIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path fill="#fff" fillOpacity={0.01} d="M48 0H0v48h48V0Z" />
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M38 2H10a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"
        />
        <path
          fill="#43CCF8"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 38a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
      </svg>
    </span>
  );
};

SpeakerIcon.propTypes = {
  size: PropTypes.number,
};
export default SpeakerIcon;