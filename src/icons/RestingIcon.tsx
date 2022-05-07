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

const RestingIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 26v12" />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M24 6v20" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 4v2M8 40h26l6-6m-25 6v4m17-4v4"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M24 6C14.059 6 6 14.034 6 23.944V26c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5v-2.056C42 14.034 33.941 6 24 6Z"
        />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M15 26s-1.5-5.5 1-11c2.501-5.5 8-9 8-9m9 20s.5-4.5-2-11-7-9-7-9m0 19V6"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M28.5 21c2.485 0 4.5 2.522 4.5 5 0-2.478 2.015-5 4.5-5m-9 0c-2.485 0-4.5 2.522-4.5 5 0-2.478-2.015-5-4.5-5m-9 0c2.485 0 4.5 2.522 4.5 5 0-2.478 2.015-5 4.5-5M15.733 8C18.21 6.722 21.02 6 24 6c2.98 0 5.79.722 8.266 2"
        />
      </svg>
    </span>
  );
};

RestingIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default RestingIcon;
