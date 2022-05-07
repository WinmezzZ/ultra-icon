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

const AvocadoIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M33 19c-2-5 0-15-9-15s-7 10-9 14-5 7-5 13c0 9 7.5 13 14 13s14-4 14-13c0-5-3-7-5-12Z"
        />
        <path
          fill="null"
          stroke="#333"
          strokeWidth={4}
          d="M30 30a6 6 0 0 1-12 0c0-3.314 2.686-7.5 6-7.5s6 4.186 6 7.5Z"
        />
      </svg>
    </span>
  );
};

AvocadoIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default AvocadoIcon;
