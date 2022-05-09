/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ShareForwardBoxFillIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M9 3v2H4v14h16v-9h2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7 2V1l7 6h-9a2 2 0 0 0-2 2v6h-2V9a4 4 0 0 1 4-4h2z" />
    </svg>
  );
};

ShareForwardBoxFillIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ShareForwardBoxFillIcon = withWrapper(ShareForwardBoxFillIconComponent);
export default ShareForwardBoxFillIcon;
