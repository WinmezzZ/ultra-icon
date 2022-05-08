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
const ColaIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m36 37-2.79 6.4a1 1 0 0 1-.918.6H15.707a1 1 0 0 1-.916-.6L12 37m0-26 2.79-6.4a1 1 0 0 1 .918-.6h16.584a1 1 0 0 1 .917.6L36 11"
      />
      <path
        fill="null"
        stroke="#000"
        strokeWidth={4}
        d="M12 12a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V12Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m13 22.5 6.396-1.01a8.934 8.934 0 0 0 5.218-2.815v0a8.935 8.935 0 0 1 7.168-2.907L35.5 16m-23 16.5 5.553-.252a9.54 9.54 0 0 0 7.998-5.067v0a9.54 9.54 0 0 1 5.974-4.754L35.5 21.5"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M36 12v20M12 16v20" />
    </svg>
  );
};

ColaIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ColaIcon = withWrapper(ColaIconComponent);
export default ColaIcon;
