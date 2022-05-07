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

const ToxinsIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M33.958 44s.024-3.47 0-4.24a18.992 18.992 0 0 0 4.477-3.325A18.94 18.94 0 0 0 44 23c0-10.493-8.507-19-19-19S6 12.507 6 23a18.94 18.94 0 0 0 5.565 13.435 19.088 19.088 0 0 0 2.879 2.365c.515.345 1.01.666 1.56.96V44h17.954Z"
          clipRule="evenodd"
        />
        <path
          fill="null"
          stroke="#333"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M18 27a4 4 0 0 0 4-4l-4-4a4 4 0 0 0 0 8Zm14 0a4 4 0 0 1-4-4l4-4a4 4 0 0 1 0 8Z"
        />
        <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m22 34 2.938-3L28 33.896" />
      </svg>
    </span>
  );
};

ToxinsIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ToxinsIcon;
