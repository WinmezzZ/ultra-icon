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
const DonutChartLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11 2.05v2.012a8.001 8.001 0 1 0 5.906 14.258l1.423 1.423A9.966 9.966 0 0 1 12 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95zM21.95 13a9.948 9.948 0 0 1-2.207 5.328l-1.423-1.422A7.962 7.962 0 0 0 19.938 13h2.013zM13.002 2.05a10.004 10.004 0 0 1 8.95 8.95h-2.013a8.005 8.005 0 0 0-6.937-6.938V2.049z" />
    </svg>
  );
};

DonutChartLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const DonutChartLineIcon = withWrapper(DonutChartLineIconComponent);
export default DonutChartLineIcon;
