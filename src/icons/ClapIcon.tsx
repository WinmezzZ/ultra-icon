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
const ClapIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} clipPath="url(#prefix__a)">
        <path d="M17.118 26.013 9.253 12.39a1.605 1.605 0 0 0-2.896 1.36l5.52 14.918c.082.22.123.452.125.686l.057 12.672a2 2 0 0 0 2 1.991h4.957a2 2 0 0 0 1.954-2.426L18 28l-.882-1.987ZM12 29l6-1m12.563-2.271 7.691-13.322a1.625 1.625 0 0 1 2.946 1.337l-5.105 14.977a2.002 2.002 0 0 0-.106.573l-.466 12.798a2 2 0 0 1-1.998 1.928H28.56a2 2 0 0 1-1.94-2.485L30 28l.334-1.665a2 2 0 0 1 .23-.606ZM30 28l6 1M15 7l3.5 4M23 4l1 6m9-4-3 4" />
      </g>
      <defs>
        <clipPath id="prefix__a">
          <path fill="#fff" d="M0 0h48v48H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

ClapIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ClapIcon = withWrapper(ClapIconComponent);
export default ClapIcon;
