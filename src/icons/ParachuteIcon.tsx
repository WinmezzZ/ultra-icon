/**
 * These code auto generated by UltraIcon
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import iconStyle from '../styles';
import merge from '../utils/merge';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const defaultProps = {
  size: 24,
};

const ParachuteIcon = (p: SVGComponentProps) => {
  const { size, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle} className="ultra-icon">
      <svg
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="currentColor"
        {...props}
      >
        <g fill="none" fillRule="evenodd" strokeLinejoin="round">
          <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <g stroke="#000" strokeWidth={4}>
            <path
              fill="#2F88FF"
              fillRule="nonzero"
              d="M16.727 24c2.425-2.424 4.849-3.636 7.273-3.636 2.424 0 4.848 1.212 7.273 3.636 2.828-2.424 4.95-3.636 6.363-3.636 1.415 0 3.536 1.212 6.364 3.636 0-11.046-8.954-20-20-20S4 12.954 4 24c2.828-2.424 4.95-3.636 6.364-3.636 1.414 0 3.535 1.212 6.363 3.636Z"
            />
            <path strokeLinecap="round" d="m4 24 20 20-7.273-20m14.546 0L24 44l20-20" />
          </g>
        </g>
      </svg>
    </span>
  );
};

ParachuteIcon.propTypes = {
  size: PropTypes.number,
};
export default ParachuteIcon;
