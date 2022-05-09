/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const CropLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="M15 17v2H6a1 1 0 0 1-1-1V7H2V5h3V2h2v15h8zm2 5V7H9V5h9a1 1 0 0 1 1 1v11h3v2h-3v3h-2z" />
    </svg>
  );
};

CropLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const CropLineIcon = withWrapper(CropLineIconComponent);
export default CropLineIcon;
