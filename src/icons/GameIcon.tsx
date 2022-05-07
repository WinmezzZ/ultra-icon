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

const GameIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g strokeWidth={4} transform="translate(4 4)">
            <path
              fill="null"
              fillRule="nonzero"
              stroke="#000"
              d="M34.512 5.536A20.428 20.428 0 0 0 20.5 0C9.178 0 0 9.178 0 20.5S9.178 41 20.5 41a20.434 20.434 0 0 0 14.405-5.914L20 20 34.512 5.536Z"
            />
            <circle cx={36} cy={20} r={4} fill="null" fillRule="nonzero" stroke="#000" />
            <path stroke="#FFF" strokeLinecap="round" d="M13 9v8m-4-4h8" />
          </g>
        </g>
      </svg>
    </span>
  );
};

GameIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default GameIcon;
