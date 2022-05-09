/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const TornadoLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M2 3h20v2H2V3zm2 4h16v2H4V7zm4 4h14v2H8v-2zm2 4h8v2h-8v-2zm-2 4h6v2H8v-2z" />
    </svg>
  );
};

TornadoLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TornadoLineIcon = withWrapper(TornadoLineIconComponent);
export default TornadoLineIcon;
