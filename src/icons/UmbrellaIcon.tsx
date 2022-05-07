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

const UmbrellaIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        {...props}
      >
        <g fill="none" fillRule="evenodd">
          <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g stroke="#000" strokeLinejoin="round" strokeWidth={4}>
            <path
              fill="null"
              fillRule="nonzero"
              d="M16.727 27c2.425-2.424 4.849-3.636 7.273-3.636 2.424 0 4.848 1.212 7.273 3.636 2.828-2.424 4.95-3.636 6.363-3.636 1.415 0 3.536 1.212 6.364 3.636 0-11.046-8.954-20-20-20S4 15.954 4 27c2.828-2.424 4.95-3.636 6.364-3.636 1.414 0 3.535 1.212 6.363 3.636Z"
            />
            <path strokeLinecap="round" d="M24 24v14.554c0 3.014 2.486 5.457 5.5 5.457s5.5-2.443 5.5-5.457M24 3v4" />
          </g>
        </g>
      </svg>
    </span>
  );
};

UmbrellaIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default UmbrellaIcon;
