/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const ZcoolLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8.26 8.26C5.838 8.803 4 11.208 4 13.935a5.903 5.903 0 0 0 11.703 1.098 2 2 0 0 1 1.129-1.448c.482-.222.91-.473 1.284-.743-.863-.603-1.186-1.862-.47-2.834a9.796 9.796 0 0 0 1.391-2.651 19.04 19.04 0 0 1-3.668 1.265c-1.261.303-2.392-.638-2.466-1.814-1.18.572-2.67 1.01-4.642 1.452zm10.996 2.934c1.166 0 1.917-.424 2.744-.587-.325 1.448-1.5 3.49-4.33 4.795A7.903 7.903 0 0 1 2 13.936C2 10.29 4.467 7.06 7.824 6.308 11.745 5.43 13.528 4.742 14.9 2c.689 1.333.689 2.892 0 4.677 2.816-.67 5.074-1.852 6.774-3.548 0 4.802-1.822 7.186-2.419 8.065zm-5.84 3.932c.584.145.584.832.584 1.02v1.022c0 .561-.342.773-.844.773H7.742c-.475-.087-.734-.346-.734-.778v-.95c0-.475.216-.82.432-1.08l3.152-3.369H7.526c-.302 0-.518-.216-.518-.604-.044-.735.086-1.9.647-2.16.087 0 .087.13.087.173-.087.173 0 .302.216.302h3.887c.863 0 1.381 0 1.684-.086.13-.043.216 0 .173.13-.087.302-.044.647-.044.95 0 .993 0 1.382-.777 2.159l-2.678 2.937 2.85-.002c.316 0 .364-.146.364-.437z" />
    </svg>
  );
};

ZcoolLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const ZcoolLineIcon = withWrapper(ZcoolLineIconComponent);
export default ZcoolLineIcon;
