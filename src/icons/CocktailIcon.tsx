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

const CocktailIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <g stroke="#000" strokeLinecap="round" strokeWidth={4} clipPath="url(#prefix__a)">
          <path strokeLinejoin="round" d="M35.8 13H32L21 32 9.8 13H6" />
          <path d="M25.75 25.596c5.602 3.15 12.696 1.164 15.846-4.437 3.15-5.6 1.165-12.695-4.436-15.845-5.601-3.15-12.695-1.164-15.846 4.437" />
          <path strokeLinejoin="round" d="M26 44H16m5 0V32m-9-16s2-2 5-2 5 3 8 3 5-1 5-1" />
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

CocktailIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CocktailIcon;
