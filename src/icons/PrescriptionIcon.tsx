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

const PrescriptionIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path
          fill="null"
          fillRule="evenodd"
          stroke="#000"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M8 8a2 2 0 0 1 2-2h17v12h13v22a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V8Z"
          clipRule="evenodd"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m27 6 13 12M27.024 6v12.082H40"
        />
        <path stroke="#333" strokeLinecap="round" strokeWidth={4} d="M14 30h12m-6-6v12" />
      </svg>
    </span>
  );
};

PrescriptionIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PrescriptionIcon;
