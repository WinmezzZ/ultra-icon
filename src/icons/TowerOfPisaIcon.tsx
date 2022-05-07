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

const TowerOfPisaIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <g stroke="#000" strokeWidth={4} clipPath="url(#prefix__a)">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 44h40" />
          <path strokeLinejoin="round" d="m21.25 7.475 15.454 4.14L28 44H11L21.25 7.475Z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.317 6.957 19.319 5.176m-22.425 6.415 19.319 5.177"
          />
          <path strokeLinecap="round" d="m25.482 20.932 1.036-3.864" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m13.106 30.14 19.319 5.176" />
          <path strokeLinecap="round" d="m22.482 31.932 1.036-3.864" />
          <rect
            width={10}
            height={4}
            x={25.183}
            y={4.387}
            strokeLinecap="round"
            strokeLinejoin="round"
            rx={1}
            transform="rotate(15 25.183 4.387)"
          />
          <path strokeLinecap="round" d="m19.482 42.932 1.036-3.864" />
        </g>
        <defs>
          <clipPath id="prefix__a">
            <path fill="#fff" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </span>
  );
};

TowerOfPisaIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default TowerOfPisaIcon;
