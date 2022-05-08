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
const MusicMenuIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M29 6v29" />
      <path
        stroke="#000"
        strokeLinejoin="round"
        strokeWidth={4}
        d="M15 36.04A5.04 5.04 0 0 1 20.04 31H29v5.96A5.04 5.04 0 0 1 23.96 42h-3.92A5.04 5.04 0 0 1 15 36.96v-.92Z"
      />
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
        d="m29 14.066 12.883 3.056V9.013L29 6v8.066Z"
        clipRule="evenodd"
      />
      <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 8h14M6 16h14M6 24h10" />
    </svg>
  );
};

MusicMenuIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const MusicMenuIcon = withWrapper(MusicMenuIconComponent);
export default MusicMenuIcon;
