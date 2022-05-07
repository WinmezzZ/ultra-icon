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

const DamageMapIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M5 10v28a2 2 0 0 0 2 2h11l-3-11 7-2-1-7 8-4-2-3 3-5H7a2 2 0 0 0-2 2Zm38 28V10a2 2 0 0 0-2-2h-3l-4 6 3 5-9 4 1 8-7 2 2 7h17a2 2 0 0 0 2-2Z"
        />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#333"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M14.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
  );
};

DamageMapIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DamageMapIcon;
