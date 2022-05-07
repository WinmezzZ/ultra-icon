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

const DescendIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
          <path
            fill="null"
            d="m11.549 16.625 1.464-5.464s-4.794 1.152-7.1 2.857c-2.308 1.706-2.653 5.399.074 6.973 2.726 1.574 38.186 18.945 38.186 18.945l-2.768-8.794L11.55 16.625Z"
          />
          <path d="m20 35 6 3m3-13L26 9l-4-2-3 13" />
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

DescendIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default DescendIcon;
