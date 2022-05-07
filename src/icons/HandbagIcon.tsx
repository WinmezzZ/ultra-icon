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

const HandbagIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14 14a6 6 0 0 1 6-6h9a6 6 0 0 1 6 6v2H14v-2Z"
        />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m4 25 19.515 4.879c.318.08.652.08.97 0L44 25v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V25Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M44 27v-9a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9"
        />
        <path fill="#000" d="M26.5 23a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
      </svg>
    </span>
  );
};

HandbagIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default HandbagIcon;
