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
const DataArrivalIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="null"
        fillRule="evenodd"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M6 42h36V6H30c-1.324 3.159-3.324 4.738-6 4.738S19.324 9.158 18 6H6v36Z"
        clipRule="evenodd"
      />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m15 24 6 6 12-12" />
    </svg>
  );
};

DataArrivalIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DataArrivalIcon = withWrapper(DataArrivalIconComponent);
export default DataArrivalIcon;
