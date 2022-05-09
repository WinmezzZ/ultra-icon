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
const InboxUnarchiveLineIconComponent = (p: SVGComponentProps) => {
  const { size, filled, ...props } = p;
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="m20 3 2 4v13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.004L4 3h16zm0 6H4v10h16V9zm-8 1 4 4h-3v4h-2v-4H8l4-4zm6.764-5H5.236l-.999 2h15.527l-1-2z" />
    </svg>
  );
};

InboxUnarchiveLineIconComponent.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
const InboxUnarchiveLineIcon = withWrapper(InboxUnarchiveLineIconComponent);
export default InboxUnarchiveLineIcon;
