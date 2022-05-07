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

const PrinterTwoIcon = (p: SVGComponentProps) => {
  const { size, filled, ...props } = merge(defaultProps, p);
  return (
    <span css={iconStyle(props)} className="ultra-icon">
      <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
        <path stroke="#000" strokeLinecap="round" strokeWidth={4} d="M38 20V8a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v12" />
        <rect width={36} height={22} x={6} y={20} stroke="#000" strokeWidth={4} rx={2} />
        <path
          fill="null"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M20 34h15v8H20v-8Z"
        />
        <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M12 26h3" />
      </svg>
    </span>
  );
};

PrinterTwoIcon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default PrinterTwoIcon;
