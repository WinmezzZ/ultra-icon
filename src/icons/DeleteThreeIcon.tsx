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

const DeleteThreeIcon = (p: SVGComponentProps) => {
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
        <circle cx={24} cy={24} r={20} fill="null" stroke="#000" strokeWidth={4} />
        <path
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m17 31 14-14m-12 2-2-2m14 14-2-2"
        />
      </svg>
    </span>
  );
};

DeleteThreeIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DeleteThreeIcon;
