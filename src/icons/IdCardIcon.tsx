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

const IdCardIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g strokeWidth={4} transform="translate(4 8)">
            <rect width={40} height={32} fill="null" fillRule="nonzero" stroke="#000" rx={2} />
            <path fill="null" fillRule="nonzero" stroke="#FFF" d="M24 8h8v8h-8z" />
            <path stroke="#FFF" strokeLinecap="round" d="M8 24h24M8 8h6m-6 8h6" />
          </g>
        </g>
      </svg>
    </span>
  );
};

IdCardIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default IdCardIcon;
