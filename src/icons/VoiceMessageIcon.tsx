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

const VoiceMessageIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        {...props}
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g transform="translate(4 4)">
            <circle
              cx={20}
              cy={20}
              r={20}
              fill="null"
              fillRule="nonzero"
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth={4}
            />
            <g transform="translate(11 10)">
              <circle cx={2} cy={9.899} r={2} fill="#FFF" />
              <path
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M6.95 14.85A6.978 6.978 0 0 0 9 9.9a6.978 6.978 0 0 0-2.05-4.95m4.95 14.849a13.956 13.956 0 0 0 4.1-9.9A13.96 13.96 0 0 0 11.9 0"
              />
            </g>
          </g>
        </g>
      </svg>
    </span>
  );
};

VoiceMessageIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default VoiceMessageIcon;
