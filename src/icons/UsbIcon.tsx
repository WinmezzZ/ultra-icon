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

const UsbIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
        <g fill="none" fillRule="evenodd">
          <path fill="#FFF" fillOpacity={0.01} d="M0 0h48v48H0z" />
          <path
            fill="null"
            fillRule="nonzero"
            stroke="#000"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M12 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm24 6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          />
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="m19 9 5-5 5 5m-4 30L12 28.263V22m24 6v4.79L24 41m0-37v39m-3 1h6"
          />
        </g>
      </svg>
    </span>
  );
};

UsbIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default UsbIcon;
