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
const SlideshowLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V6h20v14a1 1 0 0 1-1 1h-8zm-9-2h16V8H4v11zm9-9h5v2h-5v-2zm0 4h5v2h-5v-2zm-4-4v3h3a3 3 0 1 1-3-3zM2 3h20v2H2V3z" />
    </svg>
  );
};

SlideshowLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SlideshowLineIcon = withWrapper(SlideshowLineIconComponent);
export default SlideshowLineIcon;
