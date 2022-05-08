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
const FlightSafetyIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M38.986 23c-.313 10.709-5.866 16.522-13.984 20-4.393-1.881-8.034-4.447-10.502-8.101M39 19v-8.744L25.007 5 11 10.256v11.773c0 2.587.294 4.9.848 6.971"
      />
      <path
        fill="null"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M9.268 30.632c-1.373-1.257-2.99-3.877-3.587-4.027 0 0-1.798 4.434-1.68 7.395.117 2.96 2.896 4.635 5.824 3.22C12.753 35.806 44 20 44 20l-9-2L9.268 30.632Z"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="m28 21-9-3-2 1 3 6" />
    </svg>
  );
};

FlightSafetyIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const FlightSafetyIcon = withWrapper(FlightSafetyIconComponent);
export default FlightSafetyIcon;
