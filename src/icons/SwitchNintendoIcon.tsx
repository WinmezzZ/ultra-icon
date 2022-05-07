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

const SwitchNintendoIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeWidth={4}
          d="M6 12a8 8 0 0 1 8-8h5a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2h-5a8 8 0 0 1-8-8V12Zm36 2a8 8 0 0 0-8-8h-6a2 2 0 0 0-2 2v34a2 2 0 0 0 2 2h6a8 8 0 0 0 8-8V14Z"
        />
        <rect width={5} height={5} x={11} y={30} fill="#fff" rx={2.5} />
        <rect width={5} height={5} x={31.5} y={14} fill="#fff" rx={2.5} />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M15 17h-3m22 11v6m-3-3h6" />
      </svg>
    </span>
  );
};

SwitchNintendoIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default SwitchNintendoIcon;
