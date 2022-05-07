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

const BabyBottleIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <path
            stroke="#000"
            strokeWidth={4}
            d="M12 20h24v24H12zm14 16h10m-10-8h10M8 20h32m-28-6h8.4V7.6C20.4 6.398 21.6 4 24 4c2.4 0 3.6 2.398 3.6 3.6V14H36"
          />
        </g>
      </svg>
    </span>
  );
};

BabyBottleIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default BabyBottleIcon;
