/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const AlarmLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M12 22a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm1-7h3v2h-5V8h2v5zM1.747 6.282l3.535-3.535 1.415 1.414L3.16 7.697 1.747 6.282zm16.97-3.535 3.536 3.535-1.414 1.415-3.536-3.536 1.415-1.414z" />
    </svg>
  );
};

AlarmLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const AlarmLineIcon = withWrapper(AlarmLineIconComponent);
export default AlarmLineIcon;
