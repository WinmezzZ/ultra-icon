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
const CastScreenIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M21 39c0-8.837-7.163-16-16-16m8 16a8 8 0 0 0-8-8"
      />
      <path fill="#000" fillRule="evenodd" d="M5.5 41a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" clipRule="evenodd" />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 16.057V8h40v32H28.771" />
    </svg>
  );
};

CastScreenIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CastScreenIcon = withWrapper(CastScreenIconComponent);
export default CastScreenIcon;
