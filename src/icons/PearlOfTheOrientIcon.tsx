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

const PearlOfTheOrientIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <circle cx={24} cy={33} r={6} fill="null" stroke="#000" strokeWidth={4} />
        <circle cx={24} cy={13} r={3} fill="null" stroke="#000" strokeWidth={4} />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth={4}
          d="M24 40v4m-2-28-2 12m6-12 2 12m-9 9-3 7m13-7 3 7M24 4v6"
        />
      </svg>
    </span>
  );
};

PearlOfTheOrientIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PearlOfTheOrientIcon;
