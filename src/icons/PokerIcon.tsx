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

const PokerIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g strokeWidth={4}>
            <path fill="null" fillRule="nonzero" stroke="#000" d="M12 4h30v40H12z" />
            <path stroke="#000" strokeLinecap="round" d="M4 11.79 12 10v34z" />
            <path fill="null" fillRule="nonzero" stroke="#FFF" d="m27 18-5 6 5 6 5-6z" />
            <path stroke="#FFF" strokeLinecap="round" d="M18 10v4m18 20v4" />
          </g>
        </g>
      </svg>
    </span>
  );
};

PokerIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PokerIcon;
