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
const SunriseIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M4 24h3m3-14 2 2m12-8v3M14 24c0-5.522 4.478-10 10-10s10 4.478 10 10a9.987 9.987 0 0 1-4.215 8.158M38 10l-2 2m8 12h-3m-3.019 13.982-1.62-1.62"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M23.5 28c-3 0-9.5.2-9.5 3s4.606 2.79 7 3c2 .175 5.462 1.688 5 4-1 5-17 4-21 4"
      />
    </svg>
  );
};

SunriseIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SunriseIcon = withWrapper(SunriseIconComponent);
export default SunriseIcon;
