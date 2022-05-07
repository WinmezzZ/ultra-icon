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

const CookingPotIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g stroke="#000" strokeWidth={4}>
            <path strokeLinecap="round" d="M10 44h28V20.947C38 14.901 31.732 10 24 10s-14 4.901-14 10.947V44Z" />
            <path
              fill="null"
              fillRule="nonzero"
              d="M38 22.044v-1.097C38 14.901 31.732 10 24 10s-14 4.901-14 10.947v1.093l28 .004Z"
            />
            <path strokeLinecap="round" d="M4 22h40M21 4h6" />
          </g>
        </g>
      </svg>
    </span>
  );
};

CookingPotIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default CookingPotIcon;
