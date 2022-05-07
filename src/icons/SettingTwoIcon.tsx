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

const SettingTwoIcon = (p: SVGComponentProps) => {
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
        <path
          fill="#2F88FF"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M18.284 43.171a19.995 19.995 0 0 1-8.696-5.304 6 6 0 0 0-5.182-9.838A20.09 20.09 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65 19.968 19.968 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277 19.968 19.968 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18 19.99 19.99 0 0 1 44 24c0 1.38-.14 2.728-.406 4.029a6 6 0 0 0-5.182 9.838 19.995 19.995 0 0 1-8.696 5.304 6.003 6.003 0 0 0-11.432 0Z"
        />
        <path
          fill="#43CCF8"
          stroke="#fff"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 31a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
        />
      </svg>
    </span>
  );
};

SettingTwoIcon.propTypes = {
  size: PropTypes.number,
};
export default SettingTwoIcon;
