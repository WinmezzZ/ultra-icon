/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const TrainWifiLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12.498 3a6.464 6.464 0 0 0-.479 2H7a2 2 0 0 0-1.995 1.85L5 7v11h14v-6.019a6.463 6.463 0 0 0 2-.48V18a2 2 0 0 1-2 2h-1.8l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h5.498zM12 13a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm.174-6a6.51 6.51 0 0 0 2.862 4.001L6 11V7h6.174zM18.5 1a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.416a1.994 1.994 0 0 0-1.413-.584zm0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165.944.942a3.323 3.323 0 0 1 2.357-.977 3.32 3.32 0 0 1 2.201.83l.156.147.943-.943A4.652 4.652 0 0 0 18.5 3.5z" />
    </svg>
  );
};

TrainWifiLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const TrainWifiLineIcon = withWrapper(TrainWifiLineIconComponent);
export default TrainWifiLineIcon;
