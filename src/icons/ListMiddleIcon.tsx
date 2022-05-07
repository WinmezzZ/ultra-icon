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

const ListMiddleIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="null" stroke="#000" strokeLinejoin="round" strokeWidth={4} d="M8 28a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
        <path
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M8 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 28a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20 24h24M20 38h24M20 10h24"
        />
      </svg>
    </span>
  );
};

ListMiddleIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ListMiddleIcon;
