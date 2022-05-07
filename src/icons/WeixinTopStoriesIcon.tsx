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

const WeixinTopStoriesIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m24 4 7.2 7.53L41.32 14 38.4 24l2.92 10-10.12 2.47L24 44l-7.2-7.53L6.68 34 9.6 24 6.68 14l10.12-2.47L24 4Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m30.977 11.915.395 7.829L37.955 24l-6.583 4.256-.395 7.829L24 32.512l-6.977 3.573-.395-7.829L10.046 24l6.582-4.256.395-7.829L24 15.488l6.977-3.573Z"
        />
      </svg>
    </span>
  );
};

WeixinTopStoriesIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default WeixinTopStoriesIcon;
