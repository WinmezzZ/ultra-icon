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

const PlugIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g strokeWidth={4}>
            <path fill="null" fillRule="nonzero" stroke="#000" d="M6 14h36v10c-4 8-10 12-18 12S10 32 6 24V14Z" />
            <path stroke="#000" strokeLinecap="round" d="m33 34-1 10H16l-1-10" />
            <path stroke="#FFF" strokeLinecap="round" d="M22 24h4" />
            <path stroke="#000" strokeLinecap="round" d="M16 4v8m16-8v8" />
          </g>
        </g>
      </svg>
    </span>
  );
};

PlugIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PlugIcon;
