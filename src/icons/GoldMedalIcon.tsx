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

const GoldMedalIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 4H31l-4 10.3A15.023 15.023 0 0 1 37.27 22L44 4ZM17 4H4l6.73 18A15.023 15.023 0 0 1 21 14.3L17 4Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M39 29c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-2.528.625-4.91 1.73-7A15.023 15.023 0 0 1 21 14.3c.97-.197 1.973-.3 3-.3s2.03.103 3 .3A15.023 15.023 0 0 1 37.27 22 14.935 14.935 0 0 1 39 29Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 35V22l-3 1m3 12h4m-4 0h-4"
        />
      </svg>
    </span>
  );
};

GoldMedalIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GoldMedalIcon;
