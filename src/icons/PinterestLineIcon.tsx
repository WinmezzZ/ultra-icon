/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */
import React, { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}
const PinterestLineIconComponent = (p: SVGComponentProps) => {
  const { size, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8.49 19.191c.024-.336.072-.671.144-1.001.063-.295.254-1.13.534-2.34l.007-.03.387-1.668c.079-.34.14-.604.181-.692a3.46 3.46 0 0 1-.284-1.423c0-1.337.756-2.373 1.736-2.373.36-.006.704.15.942.426.238.275.348.644.302.996 0 .453-.085.798-.453 2.035-.071.238-.12.404-.166.571-.051.188-.095.358-.132.522-.096.386-.008.797.237 1.106a1.2 1.2 0 0 0 1.006.456c1.492 0 2.6-1.985 2.6-4.548 0-1.97-1.29-3.274-3.432-3.274A3.878 3.878 0 0 0 9.2 9.1a4.13 4.13 0 0 0-1.195 2.961 2.553 2.553 0 0 0 .512 1.644c.181.14.25.383.175.59-.041.168-.14.552-.176.68a.41.41 0 0 1-.216.297.388.388 0 0 1-.355.002c-1.16-.479-1.796-1.778-1.796-3.44 0-2.985 2.491-5.584 6.192-5.584 3.135 0 5.481 2.329 5.481 5.14 0 3.532-1.932 6.104-4.69 6.104a2.508 2.508 0 0 1-2.046-.959l-.043.177-.207.852-.002.007c-.146.6-.248 1.017-.288 1.174-.106.355-.24.703-.4 1.04a8 8 0 1 0-1.656-.593zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
};

PinterestLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const PinterestLineIcon = withWrapper(PinterestLineIconComponent);
export default PinterestLineIcon;
