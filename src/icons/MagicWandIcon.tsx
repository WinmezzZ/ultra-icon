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

const MagicWandIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        fill="currentColor"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
      >
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M7.58 35.42A19.908 19.908 0 0 1 4 24C4 12.954 12.954 4 24 4s20 8.954 20 20-8.954 20-20 20a19.908 19.908 0 0 1-11.42-3.58m-5-5a20.114 20.114 0 0 0 5 5m-5-5L16 27m-3.42 13.42L21 32m-5-5 4-4 5 5-4 4m-5-5 5 5m-4-18h4m-2-2v4m9 1h6m-3-3v6m1 9h4m-2-2v4"
        />
      </svg>
    </span>
  );
};

MagicWandIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default MagicWandIcon;
