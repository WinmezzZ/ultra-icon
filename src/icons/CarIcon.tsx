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
const CarIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="#000"
        fillRule="evenodd"
        d="M13.5 32a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm21 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
        clipRule="evenodd"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M7 37a3 3 0 0 1-3-3v-9.29a6 6 0 0 1 3.319-5.368l.682-.34 2.31-9.91A4 4 0 0 1 14.205 6h19.688a4 4 0 0 1 3.904 3.128l2.205 9.873.68.34A6 6 0 0 1 44 24.709V34a3 3 0 0 1-3 3h-1.997v1A4.001 4.001 0 0 1 31 38v-1H17v1a4 4 0 1 1-8 0v-1H7Z"
      />
      <path
        fill="null"
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M14 22h20l-1.652-7.434A2 2 0 0 0 30.396 13H17.604a2 2 0 0 0-1.952 1.566L14 22Z"
      />
    </svg>
  );
};

CarIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CarIcon = withWrapper(CarIconComponent);
export default CarIcon;
