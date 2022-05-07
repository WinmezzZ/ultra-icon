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

const ElectrocardiogramIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd">
          <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <circle
            cx={24}
            cy={24}
            r={20}
            fill="null"
            fillRule="nonzero"
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth={4}
          />
          <path
            stroke="#FFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M11 28.132h5.684L21.224 13l3.671 22 4.553-10.382 3.465 3.514H37"
          />
        </g>
      </svg>
    </span>
  );
};

ElectrocardiogramIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ElectrocardiogramIcon;
