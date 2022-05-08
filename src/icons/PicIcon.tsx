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
const PicIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <g fill="none" fillRule="evenodd" strokeLinejoin="round">
        <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
        <g stroke="#000" transform="translate(5 8)">
          <path
            strokeLinecap="round"
            strokeWidth={4}
            d="M2 0h34a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Z"
          />
          <circle cx={9.5} cy={8.5} r={1.5} strokeLinecap="round" strokeWidth={3} />
          <path
            fill="null"
            fillRule="nonzero"
            strokeWidth={4}
            d="m10 16 5 4 6-7 17 13v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4l10-10Z"
          />
        </g>
      </g>
    </svg>
  );
};

PicIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PicIcon = withWrapper(PicIconComponent);
export default PicIcon;
