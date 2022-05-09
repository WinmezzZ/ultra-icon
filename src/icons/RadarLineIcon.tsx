/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const RadarLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="currentColor" d="M0 0h24v24H0z" />
      <path d="m12.506 3.623-1.023 1.772c-2.91-.879-5.514-.45-6.411 1.105-1.178 2.04.79 5.652 4.678 7.897s8 2.142 9.178.103c.898-1.555-.033-4.024-2.249-6.105l1.023-1.772c3.082 2.709 4.463 6.27 2.958 8.877-1.86 3.222-7.189 3.355-11.91.63C4.029 13.402 1.48 8.721 3.34 5.5c1.505-2.607 5.28-3.192 9.166-1.877zm3.378-1.85 1.732 1-5 8.66-1.732-1 5-8.66zM6.732 20H17v2H5.017a.995.995 0 0 1-.883-.5 1.005 1.005 0 0 1 0-1l2.25-3.897 1.732 1L6.732 20z" />
    </svg>
  );
};

RadarLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const RadarLineIcon = withWrapper(RadarLineIconComponent);
export default RadarLineIcon;
