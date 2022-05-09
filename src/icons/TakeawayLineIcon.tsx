/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const TakeawayLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M16 1a1 1 0 0 1 1 1v.999L22 3v6l-2.02-.001 2.767 7.596a4 4 0 1 1-7.62 2.406h-4.253a4.002 4.002 0 0 1-7.8-.228A1.997 1.997 0 0 1 2 17V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v8a1 1 0 0 0 .883.993L12 13h2a1 1 0 0 0 .993-.883L15 12V3h-3V1h4ZM7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12-.001a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-1.148-7H17V12a3 3 0 0 1-3 3h-2a3.001 3.001 0 0 1-2.829-2H4v2.354A4.002 4.002 0 0 1 10.874 17h4.252a4.002 4.002 0 0 1 4.57-2.94l-1.844-5.061ZM9 8H4v3h5V8Zm11-3h-3v2h3V5ZM9 5H4v1h5V5Z" />
    </svg>
  );
};

TakeawayLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TakeawayLineIcon = withWrapper(TakeawayLineIconComponent);
export default TakeawayLineIcon;
