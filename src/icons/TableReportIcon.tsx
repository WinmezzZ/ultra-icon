/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const TableReportIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M5 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v37H8a3 3 0 0 1-3-3V7Z"
      />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M35 24a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v17a3 3 0 0 1-3 3h-5V24Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M11 12h8m-8 7h12" />
    </svg>
  );
};

TableReportIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TableReportIcon = withWrapper(TableReportIconComponent);
export default TableReportIcon;
