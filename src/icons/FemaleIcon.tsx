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

const FemaleIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd">
          <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g stroke="#000" strokeLinejoin="round" strokeWidth={4}>
            <path
              fill="null"
              fillRule="nonzero"
              d="M38.379 9.852c-5.468-5.468-14.332-5.468-19.8 0a13.956 13.956 0 0 0-4.1 9.9 13.96 13.96 0 0 0 4.1 9.899c5.468 5.467 14.332 5.467 19.8 0 5.467-5.468 5.467-14.332 0-19.8Z"
            />
            <path strokeLinecap="round" d="M18.464 29.536 5.737 42.263m13.435-.707L6.444 28.828" />
          </g>
        </g>
      </svg>
    </span>
  );
};

FemaleIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default FemaleIcon;
