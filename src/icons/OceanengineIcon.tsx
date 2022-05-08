/**
 * 这些代码由 UltraIcons 自动生成，请勿改动。
 */

/** @jsx jsx */
import { jsx } from '@emotion/react';
import { SVGProps } from 'react';
import PropTypes from 'prop-types';
import withWrapper from '../utils/withWrapper';
interface SVGComponentProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  filled?: boolean;
}
const OceanengineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <path fill="#fff" fillOpacity={0.01} d="M0 0h48v48H0z" />
      <path
        fill="#000"
        d="m21.482 8.474 2.398 8.153H4.758l2.457-8.153h14.267ZM9.133 18.125l8.213 1.979-9.531 16.544L2 30.474l7.133-12.349Zm2.158 15.526 5.815-6.174 9.591 16.545L18.425 46l-7.134-12.349Zm28.775 5.815H25.797L23.4 31.373h19.122m2.758-13.907-7.133 12.409-8.212-1.979 9.53-16.545m-3.476 2.998-5.815 6.174-9.591-16.605L28.856 2l7.133 12.349Z"
      />
    </svg>
  );
};

OceanengineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const OceanengineIcon = withWrapper(OceanengineIconComponent);
export default OceanengineIcon;
