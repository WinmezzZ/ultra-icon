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

const BaggageDelayIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M36 26V14a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h17M16 12v28m12-28v17m0-17V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6"
        />
        <path fill="null" stroke="#000" strokeWidth={4} d="M35 44a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M34 32v4h4" />
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M13 40v4" />
      </svg>
    </span>
  );
};

BaggageDelayIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BaggageDelayIcon;
