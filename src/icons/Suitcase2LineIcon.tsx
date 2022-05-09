/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const Suitcase2LineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M18 23h-2v-1H8v1H6v-1H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-1v1zm1-16H5v13h14V7zm-9 2v9H8V9h2zm6 0v9h-2V9h2zm-2-5h-4v1h4V4z" />
    </svg>
  );
};

Suitcase2LineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const Suitcase2LineIcon = withWrapper(Suitcase2LineIconComponent);
export default Suitcase2LineIcon;
