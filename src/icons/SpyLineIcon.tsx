/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const SpyLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M17 13a4 4 0 1 1-4 4h-2a4 4 0 1 1-.535-2h3.07A3.998 3.998 0 0 1 17 13zM7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM16 3a4 4 0 0 1 4 4v3h2v2H2v-2h2V7a4 4 0 0 1 4-4h8zm0 2H8c-1.054 0-2 .95-2 2v3h12V7c0-1.054-.95-2-2-2z" />
    </svg>
  );
};

SpyLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const SpyLineIcon = withWrapper(SpyLineIconComponent);
export default SpyLineIcon;
